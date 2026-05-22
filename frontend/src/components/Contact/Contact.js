import React, { useState } from 'react';
import './Contact.css';

const CONTACT_INFO = [
  { icon:'📞', label:'Phone',    value:'+91 9121613958',                       href:'tel:+919121613958' },
  { icon:'📧', label:'Email',    value:'bhargavichoulkar988@gmail.com',        href:'mailto:bhargavichoulkar988@gmail.com' },
  { icon:'💼', label:'LinkedIn', value:'linkedin.com/in/bhargavi-choulkar987', href:'https://www.linkedin.com/in/bhargavi-choulkar987/' },
  { icon:'🐙', label:'GitHub',   value:'github.com/bhargavichoulkar988',       href:'https://github.com/bhargavichoulkar988' },
  { icon:'📍', label:'Address',  value:'Plot No.12, Veerabhadranagar, Sangareddy 502001', href:null },
];

const INIT = { name:'', email:'', subject:'', message:'' };

export default function Contact() {
  const [form, setForm]     = useState(INIT);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    // Send via mailto — works without a backend
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject);
    window.location.href = `mailto:bhargavichoulkar988@gmail.com?subject=${subject}&body=${body}`;
    setStatus('success');
    setForm(INIT);
  };

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// contact</span>
          <h2 className="section-title" id="contact-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind or just want to say hi? My inbox is always open.</p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">{"Let's connect"}</h3>
            <p className="contact-info-text">
              {"I'm actively looking for internships and entry-level opportunities in web development. Whether you have a project, a role, or just want to connect — feel free to reach out!"}
            </p>

            <div className="contact-cards">
              {CONTACT_INFO.map(c => (
                <div key={c.label} className="contact-card">
                  <span className="contact-card-icon" aria-hidden="true">{c.icon}</span>
                  <div>
                    <span className="contact-card-label">{c.label}</span>
                    {c.href
                      ? <a href={c.href} className="contact-card-value link" target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{c.value}</a>
                      : <span className="contact-card-value">{c.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="availability">
              <span className="avail-dot" aria-hidden="true" />
              <span>Open to internships &amp; opportunities</span>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            {status === 'success' ? (
              <div className="form-success" role="alert">
                <div className="success-icon" aria-hidden="true">✅</div>
                <h3>Opening Email Client!</h3>
                <p>Your default email app will open with the message pre-filled. Just hit Send!</p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="John Doe"
                      value={form.name} onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                      aria-describedby={errors.name ? 'name-err' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <span id="name-err" className="field-error" role="alert">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="john@example.com"
                      value={form.email} onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      aria-describedby={errors.email ? 'email-err' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span id="email-err" className="field-error" role="alert">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject <span aria-hidden="true">*</span></label>
                  <input
                    id="subject" name="subject" type="text"
                    placeholder="Project inquiry / Job opportunity / Just saying hi"
                    value={form.subject} onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                    aria-describedby={errors.subject ? 'subject-err' : undefined}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && <span id="subject-err" className="field-error" role="alert">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="message" name="message" rows={6}
                    placeholder="Tell me about your project or idea..."
                    value={form.message} onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    aria-describedby={errors.message ? 'message-err' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <span id="message-err" className="field-error" role="alert">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary submit-btn" aria-busy={status === 'loading'}>
                  {status === 'loading' ? (
                    <><span className="spinner" aria-hidden="true" /> Sending...</>
                  ) : (
                    <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message</>
                  )}                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
