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
              <div className="timeline-year">2023 ─</div>
              <div className="timeline-content">
                <h4>BSc in Computer Science</h4>
                <p>Università di Catania (UNICT) — Grade: 110/110 Cum Laude</p>
              </div>
            </div>
            
            <div className="timeline-row">
              <div className="timeline-year">2024 ─</div>
              <div className="timeline-content">
                <h4>Upcoming MSc in AI</h4>
                <p>Focusing on Causal Analysis and Advanced Machine Learning</p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-block">
          <h2 className="column-heading">Experience</h2>
          <div className="timeline-row">
            <div className="timeline-year">2023 ─</div>
            <div className="timeline-content">
              <h4>Academic Internship</h4>
              <p>Reconstruction of Latent Orders. Supervised by <a href="#" style={{textDecoration: 'underline'}}>Antonino Furnari</a>.</p>
            </div>
          </div>
        </div>
        
      </div>

      {/* RIGHT COLUMN - DARK */}
      <div className="split-right">
        
        <div className="contact-box">
          <h2>Contact</h2>
          <div className="contact-item">
            <span>📍</span> Catania, Italy
          </div>
          <div className="contact-item">
            <span>✉️</span> email1@example.com
          </div>
          <div className="contact-item">
            <span>✉️</span> email2@example.com
          </div>
        </div>

        <h1 className="huge-bg-text">RESUME<br/>RESUME</h1>

        <div className="interests-grid">
          <div className="interest-column">
            <h3>Specializations</h3>
            <div className="interest-item">
              <div className="interest-item-title">Causal Inference</div>
              <div className="interest-item-desc">Discovering underlying causal structures</div>
            </div>
            <div className="interest-item">
              <div className="interest-item-title">Machine Learning</div>
              <div className="interest-item-desc">Predictive modeling & robust algorithms</div>
            </div>
          </div>

          <div className="interest-column">
            <h3>Focus Areas</h3>
            <div className="interest-item">
              <div className="interest-item-title">Data Science</div>
              <div className="interest-item-desc">Extracting value from complex datasets</div>
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
