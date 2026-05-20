# Personal Portfolio Website

A modern, responsive portfolio built with **React.js** (frontend) and **Node.js + Express** (backend).

## Tech Stack

| Layer    | Technology                              |
|----------|-----------------------------------------|
| Frontend | React.js (CRA), CSS3, Axios             |
| Backend  | Node.js, Express, Nodemailer            |
| Database | MongoDB (Mongoose)                      |
| Security | Helmet, CORS, express-rate-limit        |

## Features

- ⚡ Animated Hero with typewriter effect
- 👤 About section with interactive code card
- 🛠️ Skills with tabbed progress bars
- 📁 Projects grid with category filters
- 📅 Experience timeline (expandable)
- 📬 Contact form with email notifications + auto-reply
- 🔝 Scroll-to-top button
- 📱 Fully responsive (mobile-first)
- ♿ Accessible (ARIA labels, semantic HTML)
- 🔍 SEO-friendly (meta tags, Open Graph)

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build
```

### Backend

```bash
cd backend
cp .env.example .env   # fill in your values
npm install
npm run dev            # dev server on http://localhost:5000
```

### Environment Variables (backend/.env)

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=your-email@gmail.com
NODE_ENV=development
```

## Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Navbar/
│       │   ├── Hero/
│       │   ├── About/
│       │   ├── Skills/
│       │   ├── Projects/
│       │   ├── Experience/
│       │   ├── Contact/
│       │   ├── Footer/
│       │   └── ScrollToTop/
│       ├── App.js
│       └── index.js
└── backend/
    ├── server.js
    ├── .env.example
    └── package.json
```

## Deployment

- **Frontend**: Vercel, Netlify, or GitHub Pages
- **Backend**: Railway, Render, or Heroku
- **Database**: MongoDB Atlas (free tier)
