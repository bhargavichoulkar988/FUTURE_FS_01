import React from 'react';
import './Resume.css';

export default function Resume() {
  return (
    <section id="resume" className="resume-section section" aria-labelledby="resume-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// resume</span>
          <h2 className="section-title" id="resume-title">My Resume</h2>
          <p className="section-subtitle">A complete overview of my education, skills, projects and certifications.</p>
        </div>

        {/* Download Button */}
        <div className="resume-download-bar">
          <a
            href="/resume.pdf"
            download="Bhargavi_Choulkar_Resume.pdf"
            className="btn btn-primary"
            aria-label="Download Bhargavi Choulkar Resume PDF"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
          </a>
          <a
            href="mailto:bhargavichoulkar988@gmail.com"
            className="btn btn-outline"
            aria-label="Email Bhargavi"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Hire Me
          </a>
        </div>

        {/* Resume Card */}
        <div className="resume-card" role="document" aria-label="Bhargavi Choulkar Resume">

          {/* Header */}
          <div className="res-header">
            <h1 className="res-name">BHARGAVI CHOULKAR</h1>
            <p className="res-role">Computer Science Student · MCA</p>
            <div className="res-contact-row">
              <a href="tel:+919121613958" className="res-contact-item">📞 9121613958</a>
              <a href="mailto:bhargavichoulkar988@gmail.com" className="res-contact-item">✉️ bhargavichoulkar988@gmail.com</a>
              <a href="https://www.linkedin.com/in/bhargavi-choulkar987/" target="_blank" rel="noopener noreferrer" className="res-contact-item">💼 LinkedIn</a>
              <a href="https://github.com/bhargavichoulkar988" target="_blank" rel="noopener noreferrer" className="res-contact-item">🐙 GitHub</a>
              <span className="res-contact-item">📍 Plot No.12, Veerabhadranagar, Sangareddy</span>
            </div>
          </div>

          <div className="res-body">
            {/* Left Column */}
            <div className="res-left">

              {/* Contact */}
              <div className="res-block">
                <h3 className="res-block-title">CONTACT</h3>
                <ul className="res-list">
                  <li><strong>Phone:</strong> 9121613958</li>
                  <li><strong>Email:</strong> bhargavichoulkar988@gmail.com</li>
                  <li>
                    <strong>LinkedIn:</strong>{' '}
                    <a href="https://www.linkedin.com/in/bhargavi-choulkar987/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/bhargavi-choulkar987
                    </a>
                  </li>
                  <li><strong>Address:</strong> Plot No.12 Veerabhadranagar, Sangareddy</li>
                </ul>
              </div>

              {/* Technical Skills */}
              <div className="res-block">
                <h3 className="res-block-title">TECHNICAL SKILLS</h3>
                <ul className="res-skills-list">
                  {['C','Python','HTML','CSS','JavaScript','React'].map(s => (
                    <li key={s} className="res-skill-tag">{s}</li>
                  ))}
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="res-block">
                <h3 className="res-block-title">SOFT SKILLS</h3>
                <ul className="res-list">
                  {['Teamwork','Time Management','Leadership','Good Communication'].map(s => (
                    <li key={s} className="res-bullet">{s}</li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="res-block">
                <h3 className="res-block-title">LANGUAGES KNOWN</h3>
                <ul className="res-list">
                  {['Telugu','English','Marathi','Hindi'].map(l => (
                    <li key={l} className="res-bullet">{l}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column */}
            <div className="res-right">

              {/* Career Objective */}
              <div className="res-block">
                <h3 className="res-block-title">CAREER OBJECTIVE</h3>
                <p className="res-para">
                  To utilize my academic knowledge, project experience, and self developed skills as a stepping stone
                  into the IT industry, where I can apply what I have learned, gain real-world experience, and build
                  the competencies needed to grow as a successful professional.
                </p>
              </div>

              {/* Education */}
              <div className="res-block">
                <h3 className="res-block-title">EDUCATION</h3>
                <div className="res-edu-list">
                  <div className="res-edu-item">
                    <div className="res-edu-left">
                      <p className="res-edu-degree">Master of Computer Applications</p>
                      <p className="res-edu-school">Jawaharlal Nehru Technological University · Hyderabad | Kukatpally</p>
                    </div>
                    <span className="res-edu-year">2025 – 2027</span>
                  </div>
                  <div className="res-edu-item">
                    <div className="res-edu-left">
                      <p className="res-edu-degree">Degree – Bachelor of Physical Science (MPCs)</p>
                      <p className="res-edu-school">Masters Degree College · Sangareddy</p>
                      <p className="res-edu-pct">Percentage: 94.5%</p>
                    </div>
                    <span className="res-edu-year">2022 – 2025</span>
                  </div>
                  <div className="res-edu-item">
                    <div className="res-edu-left">
                      <p className="res-edu-degree">Intermediate – MPC</p>
                      <p className="res-edu-school">Gayatri Junior College · Zaheerabad</p>
                      <p className="res-edu-pct">Percentage: 97.6%</p>
                    </div>
                    <span className="res-edu-year">2020 – 2022</span>
                  </div>
                  <div className="res-edu-item">
                    <div className="res-edu-left">
                      <p className="res-edu-degree">SSC</p>
                      <p className="res-edu-school">Brilliant Public School · Zaheerabad</p>
                      <p className="res-edu-pct">Percentage: 100%</p>
                    </div>
                    <span className="res-edu-year">2019 – 2020</span>
                  </div>
                </div>
              </div>

              {/* About Myself */}
              <div className="res-block">
                <h3 className="res-block-title">ABOUT MYSELF</h3>
                <p className="res-para">
                  Motivated MCA student with strong analytical, communication, and problem-solving skills.
                  Experienced in both individual responsibilities and team collaboration, with a focus on
                  delivering quality work within deadlines. Passionate about applying technical knowledge
                  to real-world projects and continuously developing professional competencies.
                </p>
              </div>

              {/* Projects */}
              <div className="res-block">
                <h3 className="res-block-title">PROJECTS</h3>
                <div className="res-project-list">
                  <div className="res-project-item">
                    <p className="res-project-name">Client Lead Management System</p>
                    <p className="res-project-stack">
                      <strong>Tech Stack:</strong> React, Node.js, Express.js, MongoDB, JWT, Rest API, Render
                    </p>
                  </div>
                  <div className="res-project-item">
                    <p className="res-project-name">Resume Keyword Filter</p>
                    <p className="res-project-stack">
                      <strong>Tech Stack:</strong> HTML, CSS, React, Supabase, Python
                    </p>
                  </div>
                  <div className="res-project-item">
                    <p className="res-project-name">Personal Portfolio</p>
                    <p className="res-project-stack">
                      <strong>Tech Stack:</strong> React, Node.js, MongoDB
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="res-block">
                <h3 className="res-block-title">CERTIFICATIONS</h3>
                <ul className="res-list">
                  {[
                    'TCS iON Career Edge – TCS iON',
                    'Cybersecurity – 30 Hour Training – ExcelR',
                    'OptCamp – Full Stack Development – JNTUH-UCESTH',
                    'AI Workshop & Hackathon – VCE & RGMCET',
                    'Cybersecurity Analyst Job Simulation – Forage × TATA',
                  ].map(c => (
                    <li key={c} className="res-bullet">{c}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
