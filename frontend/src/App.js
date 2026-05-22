import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function Loader() {
  const [imgError, setImgError] = React.useState(false);
  return (
    <div style={{
      position:'fixed', inset:0, background:'var(--bg-primary)',
      display:'flex', alignItems:'center', justifyContent:'center',
      zIndex:9999, flexDirection:'column', gap:'20px'
    }}>
      {/* Profile photo or fallback initials */}
      <div style={{
        width:100, height:100, borderRadius:'50%',
        background:'var(--gradient)',
        padding:3,
        boxShadow:'0 0 0 4px rgba(79,70,229,0.15), 0 8px 30px rgba(79,70,229,0.3)',
        animation:'pulse-glow 2s ease-in-out infinite',
        flexShrink:0,
      }}>
        {!imgError ? (
          <img
            src="/profile.jpg"
            alt="Bhargavi Choulkar"
            onError={() => setImgError(true)}
            style={{
              width:'100%', height:'100%', borderRadius:'50%',
              objectFit:'cover', objectPosition:'center top',
              display:'block',
            }}
          />
        ) : (
          <div style={{
            width:'100%', height:'100%', borderRadius:'50%',
            background:'var(--gradient)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:'2rem', fontWeight:800, color:'white',
          }}>BC</div>
        )}
      </div>

      {/* Name */}
      <p style={{
        fontFamily:'var(--font-main)', fontSize:'1.1rem', fontWeight:700,
        color:'var(--text-primary)', letterSpacing:'0.05em',
      }}>Bhargavi Choulkar</p>

      {/* Progress bar */}
      <div style={{ width:200, height:4, background:'var(--border)', borderRadius:2, overflow:'hidden' }}>
        <div style={{
          height:'100%', background:'var(--gradient)', borderRadius:2,
          animation:'loadBar 1.5s ease forwards'
        }}></div>
      </div>
      <style>{`@keyframes loadBar { from{width:0} to{width:100%} }`}</style>
      <p style={{ fontFamily:'var(--font-code)', fontSize:'0.8rem', color:'var(--text-muted)' }}>
        Loading portfolio...
      </p>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
