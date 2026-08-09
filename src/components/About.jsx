import React from 'react'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        
        <div className="about-content">
          <h2 className="about-title">
            Hello,<br/>
            I'm Emanuele !
          </h2>
          <p className="about-bio">
            I am a Computer Science graduate specializing in Data Science and Machine Learning. 
            I approach complex problems in a rational way, currently preparing for an MSc in Artificial Intelligence 
            with a strong focus on the application of Causal Analysis.
          </p>
          
          <a href="#" className="btn-pill-large">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            linkedin.com/in/emanuele-galiano
          </a>
        </div>

        <div className="about-visual">
          <div className="visual-circle"></div>
          <div className="visual-rect"></div>
          
          <div className="floating-badge badge-1">Upcoming MSc</div>
          <div className="floating-badge badge-2">Italian</div>
        </div>

      </div>
    </section>
  )
}

export default About
