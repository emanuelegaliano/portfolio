import React from 'react'

const EducationExperience = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        
        <div className="ed-exp-grid">
          
          <div className="ed-col">
            <h3 style={{ marginBottom: '2rem', fontFamily: 'Inter', fontSize: '1.1rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px' }}>Education</h3>
            
            <div className="timeline-item">
              <h4 className="timeline-title">BSc in Computer Science</h4>
              <div className="timeline-meta">Università di Catania (UNICT)</div>
              <p className="timeline-desc">Grade: 110/110 Cum Laude</p>
            </div>
            
          </div>
          
          <div className="exp-col">
            <h3 style={{ marginBottom: '2rem', fontFamily: 'Inter', fontSize: '1.1rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px' }}>Experience</h3>
            
            <div className="timeline-item">
              <h4 className="timeline-title">Academic Internship</h4>
              <div className="timeline-meta">Reconstruction of Latent Orders</div>
              <p className="timeline-desc">
                Supervised by <a href="#" className="academic-link">Antonino Furnari</a>.
              </p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default EducationExperience
