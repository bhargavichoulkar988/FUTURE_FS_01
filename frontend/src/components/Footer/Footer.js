import React from 'react';
import './Footer.css';

const LINKS = [
  { label:'Home',       href:'home' },
  { label:'About',      href:'about' },
  { label:'Skills',     href:'skills' },
  { label:'Projects',   href:'projects' },
  { label:'Experience', href:'experience' },
  { label:'Resume',     href:'resume' },
  { label:'Contact',    href:'contact' },
];

const SOCIALS = [
  { label:'GitHub',   href:'https://github.com/bhargavichoulkar988',          icon:'GH' },
  { label:'LinkedIn', href:'https://www.linkedin.com/in/bhargavi-choulkar987/',    icon:'LI' },
  { label:'Twitter',  href:'https://twitter.com/bhargavichoulkar',          icon:'TW' },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">BC</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p className="footer-tagline">Building the web, one component at a time.</p>
            <div className="footer-socials">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   className="footer-social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <nav className="footer-nav" aria-label="Footer navigation">
            <h4 className="footer-nav-title">Navigation</h4>
            <ul>
              {LINKS.map(l => (
                <li key={l.href}>
                  <button onClick={() => scrollTo(l.href)} className="footer-link">{l.label}</button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer-contact">
            <h4 className="footer-nav-title">Contact</h4>
            <ul>
              <li><a href="mailto:bhargavichoulkar988@gmail.com" className="footer-link">bhargavichoulkar988@gmail.com</a></li>
              <li><a href="tel:+919121613958" className="footer-link">+91 9121613958</a></li>
              <li><span className="footer-link-plain">Sangareddy, Telangana</span></li>
              <li>
                <a href="/resume.pdf" className="btn btn-outline footer-resume-btn" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Bhargavi Choulkar. Built with React &amp; ❤️</p>
          <p className="footer-made">Designed &amp; developed by Bhargavi Choulkar</p>
        </div>
      </div>
    </footer>
  );
}
