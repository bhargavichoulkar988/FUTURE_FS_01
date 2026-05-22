import React from 'react';
import './About.css';

const HIGHLIGHTS = [
  { icon: '🎓', label: 'Education',  value: 'MCA – JNTU Hyderabad' },
  { icon: '📍', label: 'Location',   value: 'Sangareddy, Telangana' },
  { icon: '🌐', label: 'Languages',  value: 'Telugu, English, Hindi, Marathi' },
  { icon: '🤝', label: 'Soft Skills', value: 'Teamwork, Leadership, Communication' },
];

export default function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// about me</span>
          <h2 className="section-title" id="about-title">Who I Am</h2>
          <p className="section-subtitle">A passionate developer who loves turning complex problems into elegant solutions.</p>
        </div>

        <div className="about-grid">
          {/* Text */}
          <div className="about-text">
            <p>{"Hi! I'm "}
              <strong>Bhargavi Choulkar</strong>
              {", a motivated MCA student at JNTU Hyderabad with strong analytical, communication, and problem-solving skills. I'm experienced in both individual responsibilities and team collaboration, with a focus on delivering quality work within deadlines."}
            </p>
            <p>{"I'm passionate about applying technical knowledge to real-world projects and continuously developing professional competencies. My academic background spans Computer Science, and I've built projects using React, Node.js, Python, and more."}</p>
            <p>{"I'm actively looking for opportunities where I can contribute, grow, and make a meaningful impact in the IT industry."}</p>

            <div className="about-highlights">
              {HIGHLIGHTS.map(h => (
                <div key={h.label} className="highlight-item">
                  <span className="highlight-icon" aria-hidden="true">{h.icon}</span>
                  <div>
                    <span className="highlight-label">{h.label}</span>
                    <span className="highlight-value">{h.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Resume
              </a>
              <button className="btn btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}>
                Let's Talk
              </button>
            </div>
          </div>

          {/* Code Card */}
          <div className="about-visual">
            <div className="code-card">
              <div className="code-card-header">
                <div className="dots" aria-hidden="true"><span /><span /><span /></div>
                <span className="code-filename">about.js</span>
              </div>
              <pre className="code-body" aria-label="Code profile">
                <code>{`const developer = {
  name: "Bhargavi Choulkar",
  role: "MCA Student & Developer",
  location: "Sangareddy, Telangana",

  skills: {
    languages: ["C", "Python",
                "JavaScript"],
    frontend:  ["HTML", "CSS",
                "React"],
    backend:   ["Node.js","Express",
                "MongoDB"],
    tools:     ["Git","VS Code",
                "Supabase"]
  },

  softSkills: ["Teamwork",
    "Leadership","Communication",
    "Time Management"],

  languages: ["Telugu","English",
    "Hindi","Marathi"],

  openToWork: true
};`}</code>
              </pre>
            </div>

            <div className="fun-facts">
              {[['🚀','Always learning'],['🌍','Remote-friendly'],['💡','Problem solver']].map(([icon,text]) => (
                <div key={text} className="fun-fact">
                  <span aria-hidden="true">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
