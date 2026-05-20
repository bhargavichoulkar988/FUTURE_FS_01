require('dotenv').config();
const express    = require('express');
const cors       = require('cors');
const helmet     = require('helmet');
const rateLimit  = require('express-rate-limit');
const mongoose   = require('mongoose');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Security middleware ──────────────────────────────────────────────────────
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? 'https://bhargavichoulkar.dev'
    : 'http://localhost:3000',
  methods: ['GET', 'POST'],
}));
app.use(express.json({ limit: '10kb' }));

// ── Rate limiting ────────────────────────────────────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: 'Too many requests. Please try again later.' },
});

// ── MongoDB connection ───────────────────────────────────────────────────────
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('MongoDB error:', err.message));
}

// ── Message schema ───────────────────────────────────────────────────────────
const messageSchema = new mongoose.Schema({
  name:      { type: String, required: true, trim: true, maxlength: 100 },
  email:     { type: String, required: true, trim: true, lowercase: true },
  subject:   { type: String, required: true, trim: true, maxlength: 200 },
  message:   { type: String, required: true, trim: true, maxlength: 2000 },
  createdAt: { type: Date, default: Date.now },
  ip:        { type: String },
});
const Message = mongoose.model('Message', messageSchema);

// ── Email transporter ────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host:   process.env.EMAIL_HOST   || 'smtp.gmail.com',
  port:   parseInt(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ── Routes ───────────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact form
app.post(
  '/api/contact',
  contactLimiter,
  [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
    body('email').isEmail().withMessage('Valid email required').normalizeEmail(),
    body('subject').trim().notEmpty().withMessage('Subject is required').isLength({ max: 200 }),
    body('message').trim().notEmpty().withMessage('Message is required').isLength({ min: 20, max: 2000 }),
  ],
  async (req, res) => {
    // Validate
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    try {
      // Save to MongoDB (if connected)
      if (mongoose.connection.readyState === 1) {
        await Message.create({ name, email, subject, message, ip: req.ip });
      }

      // Send email notification
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail({
          from:    `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
          to:      process.env.EMAIL_TO || process.env.EMAIL_USER,
          replyTo: email,
          subject: `[Portfolio] ${subject}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f9f9f9;border-radius:8px;">
              <h2 style="color:#6366f1;margin-bottom:20px;">New Portfolio Message</h2>
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;font-weight:bold;color:#333;width:100px;">From:</td><td style="padding:8px 0;color:#555;">${name}</td></tr>
                <tr><td style="padding:8px 0;font-weight:bold;color:#333;">Email:</td><td style="padding:8px 0;color:#555;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:8px 0;font-weight:bold;color:#333;">Subject:</td><td style="padding:8px 0;color:#555;">${subject}</td></tr>
              </table>
              <div style="margin-top:20px;padding:16px;background:white;border-radius:6px;border-left:4px solid #6366f1;">
                <p style="color:#333;line-height:1.7;white-space:pre-wrap;">${message}</p>
              </div>
              <p style="margin-top:20px;font-size:12px;color:#999;">Sent from your portfolio contact form</p>
            </div>
          `,
        });

        // Auto-reply to sender
        await transporter.sendMail({
          from:    `"Bhargavi Choulkar" <${process.env.EMAIL_USER}>`,
          to:      email,
          subject: `Re: ${subject} — Got your message!`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;">
              <h2 style="color:#6366f1;">Thanks for reaching out, ${name}!</h2>
              <p style="color:#555;line-height:1.7;">
                I've received your message and will get back to you within 24 hours.
              </p>
              <p style="color:#555;line-height:1.7;">
                In the meantime, feel free to check out my
                <a href="https://github.com/bhargavichoulkar988" style="color:#6366f1;">GitHub</a> or
                <a href="https://www.linkedin.com/in/bhargavi-choulkar987/" style="color:#6366f1;">LinkedIn</a>.
              </p>
              <p style="color:#555;">Best,<br/><strong>Bhargavi Choulkar</strong></p>
            </div>
          `,
        });
      }

      res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (err) {
      console.error('Contact error:', err.message);
      res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
  }
);

// 404
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
