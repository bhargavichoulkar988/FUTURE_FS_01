import React, { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id:1, title:'Client Lead Management System', category:'fullstack',
    description:'A full-stack CRM application to manage client leads efficiently. Features JWT authentication, REST API, and real-time data rendering.',
    tags:['React','Node.js','Express.js','MongoDB','JWT','REST API','Render'],
    github:'https://github.com/bhargavichoulkar988',
    live:null,
    featured:true, stars:0, forks:0,
    gradient:'linear-gradient(135deg,#6366f1,#8b5cf6)',
    icon:'📋',
  },
  {
    id:2, title:'Resume Keyword Filter', category:'frontend',
    description:'A smart resume filtering tool that matches keywords from job descriptions against resumes. Built with React, Python backend, and Supabase for storage.',
    tags:['HTML','CSS','React','Supabase','Python'],
    github:'https://github.com/bhargavichoulkar988',
    live:null,
    featured:true, stars:0, forks:0,
    gradient:'linear-gradient(135deg,#06b6d4,#0ea5e9)',
    icon:'📄',
  },
  {
    id:3, title:'Personal Portfolio', category:'fullstack',
    description:'A fully responsive personal portfolio website to showcase skills, projects, education, and certifications. Built with a modern tech stack and deployed online.',
    tags:['React','Node.js','MongoDB'],
    github:'https://github.com/bhargavichoulkar988',
    live:null,
    featured:true, stars:0, forks:0,
    gradient:'linear-gradient(135deg,#f59e0b,#ef4444)',
    icon:'🌐',
  },
];

const FILTERS = ['all','fullstack','frontend','backend'];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="projects section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// projects</span>
          <h2 className="section-title" id="projects-title">Featured Work</h2>
          <p className="section-subtitle">A selection of projects I've built — from side projects to production apps.</p>
        </div>

        {/* Filters */}
        <div className="proj-filters" role="group" aria-label="Filter by category">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => { setFilter(f); setShowAll(false); }}
              aria-pressed={filter === f}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="proj-grid">
          {displayed.map((p, i) => (
            <article key={p.id} className={`proj-card${p.featured ? ' featured' : ''}`} style={{ animationDelay:`${i*0.08}s` }}>
              <div className="proj-card-top" style={{ background: p.gradient }}>
                <span className="proj-icon" aria-hidden="true">{p.icon}</span>
                {p.featured && <span className="proj-featured-badge">⭐ Featured</span>}
              </div>
              <div className="proj-card-body">
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.description}</p>
                <div className="proj-tags">
                  {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                </div>
                <div className="proj-footer">
                  <div className="proj-stats">
                    <span title="Stars">⭐ {p.stars}</span>
                    <span title="Forks">🍴 {p.forks}</span>
                  </div>
                  <div className="proj-links">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link" aria-label={`${p.title} source code`}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                      Code
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-link proj-link-live" aria-label={`${p.title} live demo`}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length > 6 && (
          <div style={{ textAlign:'center', marginTop:'2rem' }}>
            <button className="btn btn-outline" onClick={() => setShowAll(s => !s)}>
              {showAll ? 'Show Less' : `Show All (${filtered.length})`}
            </button>
          </div>
        )}

        <div className="github-cta">
          <p>Want to see more? Check out my GitHub for all projects.</p>
          <a href="https://github.com/bhargavichoulkar988" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
