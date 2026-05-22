import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',       href: 'home' },
  { label: 'About',      href: 'about' },
  { label: 'Skills',     href: 'skills' },
  { label: 'Projects',   href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Resume',     href: 'resume' },
  { label: 'Contact',    href: 'contact' },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [active, setActive]         = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].href);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(NAV_LINKS[i].href);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
      <div className="container navbar-inner">

        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={e => handleClick(e, 'home')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">BC</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar-links">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a
                href={`#${l.href}`}
                className={`nav-link${active === l.href ? ' active' : ''}`}
                onClick={e => handleClick(e, l.href)}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="/resume.pdf" className="btn btn-outline navbar-cta" target="_blank" rel="noopener noreferrer">
          Resume
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a
                href={`#${l.href}`}
                className={`mobile-nav-link${active === l.href ? ' active' : ''}`}
                onClick={e => handleClick(e, l.href)}
              >{l.label}</a>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" className="btn btn-primary" style={{ justifyContent:'center', width:'100%', marginTop:8 }}
               target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
