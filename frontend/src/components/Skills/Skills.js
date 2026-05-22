import React, { useState } from 'react';
import './Skills.css';

const CATEGORIES = [
  {
    id: 'languages', label: 'Languages', icon: '💻',
    skills: [
      { name: 'C',          level: 80, color: '#5c6bc0' },
      { name: 'Python',     level: 78, color: '#3776ab' },
      { name: 'JavaScript', level: 82, color: '#f7df1e' },
    ],
  },
  {
    id: 'frontend', label: 'Frontend', icon: '🎨',
    skills: [
      { name: 'HTML5',  level: 90, color: '#e34f26' },
      { name: 'CSS3',   level: 85, color: '#1572b6' },
      { name: 'React',  level: 80, color: '#61dafb' },
    ],
  },
  {
    id: 'backend', label: 'Backend', icon: '⚙️',
    skills: [
      { name: 'Node.js',    level: 75, color: '#68a063' },
      { name: 'Express.js', level: 72, color: '#aaaaaa' },
      { name: 'MongoDB',    level: 74, color: '#4db33d' },
      { name: 'REST APIs',  level: 78, color: '#06b6d4' },
    ],
  },
  {
    id: 'soft', label: 'Soft Skills', icon: '🤝',
    skills: [
      { name: 'Teamwork',          level: 95, color: '#10b981' },
      { name: 'Time Management',   level: 88, color: '#f59e0b' },
      { name: 'Leadership',        level: 85, color: '#6366f1' },
      { name: 'Communication',     level: 90, color: '#06b6d4' },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState('frontend');
  const category = CATEGORIES.find(c => c.id === active);

  return (
    <section id="skills" className="skills section" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// skills</span>
          <h2 className="section-title" id="skills-title">Tech Stack</h2>
          <p className="section-subtitle">Technologies I work with to build modern, scalable applications.</p>
        </div>

        {/* Tabs */}
        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              className={`skills-tab${active === c.id ? ' active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              <span aria-hidden="true">{c.icon}</span> {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="skills-grid" role="tabpanel">
          {category?.skills.map((s, i) => (
            <div key={s.name} className="skill-item" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="skill-header">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.level}%</span>
              </div>
              <div className="skill-bar" role="progressbar" aria-valuenow={s.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${s.name}: ${s.level}%`}>
                <div className="skill-fill" style={{ '--w': `${s.level}%`, '--c': s.color }} />
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="tech-cloud" aria-label="All technologies">
          {['C','Python','JavaScript','HTML5','CSS3','React','Node.js','Express','MongoDB','Git','Supabase'].map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
