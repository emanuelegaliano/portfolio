import React from 'react'

const ResumeSplit = () => {
  return (
    <section className="split-section" id="resume">
      
      {/* LEFT COLUMN - LIGHT */}
      <div className="split-left">
        
        <div>
          <h2 className="column-heading">Education</h2>
          <div className="timeline-list">
            
            <div className="timeline-row">
              <div className="timeline-year">2027 ─ Curr.</div>
              <div className="timeline-content">
                <h4>Upcoming MSc in AI</h4>
                <p>Focusing on Causal Analysis and Advanced Machine Learning</p>
              </div>
            </div>

            <div className="timeline-row">
              <div className="timeline-year">2023 ─ 2026</div>
              <div className="timeline-content">
                <h4>BSc in Computer Science</h4>
                <p>Università di Catania (UNICT) - <a href="https://web.dmi.unict.it/en" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Department of Mathematics and Computer Science</a> — Grade: 110/110 Cum Laude</p>
              </div>
            </div>
            
            <div className="timeline-row">
              <div className="timeline-year">2018 ─ 2022</div>
              <div className="timeline-content">
                <h4>High School Diploma</h4>
                <p><a href="https://www.majoranascordia.edu.it/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Liceo Scientifico Ettore Majorana</a> — Grade: 100/100</p>
              </div>
            </div>

          </div>
        </div>

        <div className="experience-block">
          <h2 className="column-heading">Experience</h2>
          <div className="timeline-list">
            <div className="timeline-row">
              <div className="timeline-year">2026 ─ Curr.</div>
              <div className="timeline-content">
                <h4>Research Group Member</h4>
                <p><a href="https://coai-iplab.github.io/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Co-AI IPLAB</a> — Causal Object-centric AI</p>
              </div>
            </div>

            <div className="timeline-row">
              <div className="timeline-year">2025 ─ 2026</div>
              <div className="timeline-content">
                <h4>Academic Internship</h4>
                <p>Reconstruction of Latent Orders. Supervised by <a href="https://antoninofurnari.github.io/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Antonino Furnari</a>.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="languages-block">
          <h2 className="column-heading">Languages</h2>
          <div className="timeline-list">
            <div className="timeline-row">
              <div className="timeline-year" style={{ color: 'var(--text-dark)', fontWeight: '600' }}>🇮🇹 Italian</div>
              <div className="timeline-content">
                <p>Native</p>
              </div>
            </div>
            <div className="timeline-row">
              <div className="timeline-year" style={{ color: 'var(--text-dark)', fontWeight: '600' }}>🇬🇧 English</div>
              <div className="timeline-content">
                <p>Upcoming Cambridge B2</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* RIGHT COLUMN - DARK */}
      <div className="split-right">
        
        <div className="contact-box" id="contact">
          <h2>Contacts</h2>
          <div className="contact-item">
            <span>📍</span> Catania, Italy
          </div>
          <div className="contact-item">
            <span>✉️</span> <a href="mailto:galianoo.emanuele@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>galianoo.emanuele@gmail.com</a>
          </div>
          <div className="contact-item">
            <span>🎓</span> <a href="mailto:emanuele.galiano@studium.unict.it" style={{ color: 'inherit', textDecoration: 'none' }}>emanuele.galiano@studium.unict.it</a>
          </div>
        </div>

        <h1 className="huge-bg-text">RESUME<br/>RESUME<br/><span className="resume-last">RESUME</span></h1>

        <div className="interests-grid">
          <div className="interest-column">
            <h3>Specializations</h3>
            <div className="interest-item">
              <div className="interest-item-title">Data Science</div>
              <div className="interest-item-desc">Extracting value from complex datasets</div>
            </div>
            <div className="interest-item">
              <div className="interest-item-title">Machine Learning</div>
              <div className="interest-item-desc">Predictive modeling & robust algorithms</div>
            </div>
          </div>

          <div className="interest-column">
            <h3>Interests</h3>
            <div className="interest-item">
              <div className="interest-item-title">Causal Inference</div>
              <div className="interest-item-desc">Discovering underlying causal structures</div>
            </div>
            <div className="interest-item">
              <div className="interest-item-title">Artificial Intelligence</div>
              <div className="interest-item-desc">Advanced modeling and problem solving</div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default ResumeSplit
