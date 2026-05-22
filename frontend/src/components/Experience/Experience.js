import React, { useState } from 'react';
import './Experience.css';

const EDUCATION = [
  {
    id:1,
    role:'Master of Computer Applications (MCA)',
    company:'Jawaharlal Nehru Technological University',
    period:'2025 – 2027',
    location:'Hyderabad | Kukatpally',
    description:'Currently pursuing MCA with a focus on software engineering, full-stack development, and advanced computing concepts.',
    achievements:[
      'Specialization in Full Stack Web Development',
      'Active participant in coding competitions and hackathons',
      'Building real-world projects using React, Node.js, and MongoDB',
    ],
    tech:['React','Node.js','MongoDB','Python','Data Structures'],
    logo:'MCA',
    color:'#6366f1',
  },
  {
    id:2,
    role:'Bachelor of Physical Science (MPCs)',
    company:'Masters Degree College',
    period:'2022 – 2025',
    location:'Sangareddy',
    description:'Graduated with 94.5% — studied Mathematics, Physics, and Computer Science with strong analytical foundations.',
    achievements:[
      'Percentage: 94.5%',
      'Strong foundation in Mathematics and logical reasoning',
      'Introduced to programming with C',
    ],
    tech:['C','Mathematics','Physics'],    logo:'BSc',
    color:'#06b6d4',
  },
  {
    id:3,
    role:'Intermediate – MPC',
    company:'Gayatri Junior College',
    period:'2020 – 2022',
    location:'Zaheerabad',
    description:'Completed Intermediate with Mathematics, Physics, and Chemistry. Percentage: 97.6%',
    achievements:[
      'Percentage: 97.6%',
      'Consistent academic excellence throughout',
    ],
    tech:['Mathematics','Physics','Chemistry'],
    logo:'XII',
    color:'#f59e0b',
  },
  {
    id:4,
    role:'SSC (10th Grade)',
    company:'Brilliant Public School',
    period:'2019 – 2020',
    location:'Zaheerabad',
    description:'Completed SSC with 100% — demonstrated exceptional academic performance.',
    achievements:[
      'Percentage: 100%',
      'School topper — outstanding academic record',
    ],
    tech:['Science','Mathematics','English'],
    logo:'SSC',
    color:'#10b981',
  },
];

const CERTIFICATIONS = [
  {
    id:5,
    role:'TCS iON Career Edge',
    company:'TCS iON',
    period:'2026',
    location:'Online',
    description:'Industry-recognized certification covering professional skills, communication, and career readiness for IT roles.',
    achievements:[
      'Covered professional communication and workplace skills',
      'Completed modules on IT fundamentals and career development',
    ],
    tech:['Professional Skills','IT Fundamentals','Communication'],
    logo:'TCS',
    color:'#6366f1',
  },
  {
    id:6,
    role:'Cybersecurity – 30 Hour Training',
    company:'ExcelR',
    period:'2026',
    location:'Online',
    description:'Comprehensive 30-hour cybersecurity training covering network security, ethical hacking fundamentals, and threat analysis.',
    achievements:[
      'Completed 30 hours of hands-on cybersecurity training',
      'Learned network security, vulnerability assessment, and threat mitigation',
    ],
    tech:['Cybersecurity','Network Security','Ethical Hacking'],
    logo:'EXR',
    color:'#ef4444',
  },
  {
    id:7,
    role:'Full Stack Development – OptCamp',
    company:'JNTUH-UCESTH',
    period:'2026',
    location:'Hyderabad',
    description:'Intensive full-stack development bootcamp covering modern web technologies from frontend to backend deployment.',
    achievements:[
      'Built full-stack applications using React and Node.js',
      'Learned deployment, REST APIs, and database integration',
    ],
    tech:['React','Node.js','MongoDB','Express','HTML','CSS'],
    logo:'OPT',
    color:'#8b5cf6',
  },
  {
    id:8,
    role:'AI Workshop & Hackathon',
    company:'VCE & RGMCET',
    period:'2026',
    location:'Andhra Pradesh',
    description:'Participated in an AI workshop and hackathon, exploring machine learning concepts and building AI-powered solutions.',
    achievements:[
      'Participated in AI/ML workshop and hackathon',
      'Explored machine learning models and real-world AI applications',
      'Collaborated in a team to build an AI-powered project',
    ],
    tech:['Python','Machine Learning','AI','Team Collaboration'],
    logo:'AI',
    color:'#06b6d4',
  },
  {
    id:9,
    role:'Cybersecurity Analyst Job Simulation',
    company:'Forage × TATA',
    period:'2026',
    location:'Online',
    description:'Completed a job simulation as a Cybersecurity Analyst in collaboration with TATA on the Forage platform, focusing on Identity and Access Management.',
    achievements:[
      'Learned IAM (Identity and Access Management) fundamentals',
      'Crafted practical IAM solutions for enterprise scenarios',
      'Gained hands-on experience with real-world cybersecurity workflows',
      'Simulated analyst tasks used in TATA cybersecurity operations',
    ],
    tech:['IAM','Cybersecurity','Access Control','TATA','Forage'],
    logo:'IAM',
    color:'#0891b2',
  },
];

export default function Experience() {
  const [tab, setTab] = useState('edu');
  const items = tab === 'edu' ? EDUCATION : CERTIFICATIONS;
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" className="experience section" aria-labelledby="exp-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// education & certifications</span>
          <h2 className="section-title" id="exp-title">My Journey</h2>
          <p className="section-subtitle">Academic background and professional certifications that shaped my skills.</p>
        </div>

        {/* Tabs */}
        <div className="exp-tabs" role="tablist">
          <button role="tab" aria-selected={tab==='edu'} className={`exp-tab${tab==='edu'?' active':''}`} onClick={() => { setTab('edu'); setExpanded(null); }}>
            🎓 Education
          </button>
          <button role="tab" aria-selected={tab==='cert'} className={`exp-tab${tab==='cert'?' active':''}`} onClick={() => { setTab('cert'); setExpanded(null); }}>
            🏆 Certifications
          </button>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {items.map((item, i) => (
            <div key={item.id} className={`timeline-item${expanded===item.id?' expanded':''}`} style={{ animationDelay:`${i*0.1}s` }}>
              {/* Line */}
              <div className="timeline-line" aria-hidden="true">
                <div className="timeline-dot" style={{ background: item.color, boxShadow:`0 0 12px ${item.color}66` }}>
                  <span>{item.logo}</span>
                </div>
                {i < items.length - 1 && <div className="timeline-connector" />}
              </div>

              {/* Card */}
              <div className="timeline-card">
                <div className="timeline-card-header" onClick={() => setExpanded(expanded===item.id ? null : item.id)}>
                  <div className="timeline-meta">
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-company">
                      <span style={{ color: item.color, fontWeight:600 }}>{item.company}</span>
                      <span className="timeline-sep">·</span>
                      <span className="timeline-period">{item.period}</span>
                    </div>
                    <span className="timeline-location">📍 {item.location}</span>
                  </div>
                  <button className="expand-btn" aria-label={expanded===item.id ? 'Collapse' : 'Expand'} aria-expanded={expanded===item.id}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      style={{ transform: expanded===item.id ? 'rotate(180deg)' : 'none', transition:'transform 0.3s' }}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                </div>

                <p className="timeline-desc">{item.description}</p>

                {expanded === item.id && (
                  <div className="timeline-details">
                    <ul className="achievements">
                      {item.achievements.map(a => (
                        <li key={a}>
                          <span className="ach-dot" style={{ background: item.color }} aria-hidden="true" />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <div className="timeline-tech">
                      {item.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
