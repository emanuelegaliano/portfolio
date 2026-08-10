import React from 'react'

const PersonalityHobbies = () => {
  return (
    <section className="personality-section" id="personality">
      <div className="container">
        <h2 className="section-heading-editorial" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          Beyond Code
        </h2>
        
        <div className="ph-grid">
          
          {/* Personality Card */}
          <div className="ph-card personality-card">
            <div className="ph-card-header">
              <h3>Commander (ENTJ-T)</h3>
              <span className="ph-badge">16Personalities</span>
            </div>
            
            <p className="personality-desc">
              Commanders are bold, imaginative, and strong-willed, always finding a way – or making one. These decisive types love momentum and accomplishment, often acting on their creative visions.
            </p>

            <div className="personality-traits">
              <div className="trait-item">
                <span className="trait-label">Extroverted</span>
                <div className="trait-bar"><div className="trait-fill ext" style={{width: '71%'}}></div></div>
                <span className="trait-pct">71%</span>
              </div>
              <div className="trait-item">
                <span className="trait-label">Intuitive</span>
                <div className="trait-bar"><div className="trait-fill int" style={{width: '73%'}}></div></div>
                <span className="trait-pct">73%</span>
              </div>
              <div className="trait-item">
                <span className="trait-label">Thinking</span>
                <div className="trait-bar"><div className="trait-fill thn" style={{width: '60%'}}></div></div>
                <span className="trait-pct">60%</span>
              </div>
              <div className="trait-item">
                <span className="trait-label">Judging</span>
                <div className="trait-bar"><div className="trait-fill jdg" style={{width: '58%'}}></div></div>
                <span className="trait-pct">58%</span>
              </div>
              <div className="trait-item">
                <span className="trait-label">Turbulent</span>
                <div className="trait-bar"><div className="trait-fill trb" style={{width: '51%'}}></div></div>
                <span className="trait-pct">51%</span>
              </div>
            </div>
            
            <a href="https://www.16personalities.com/entj-personality" target="_blank" rel="noopener noreferrer" className="ph-link">
              Read more on 16personalities <span>&rarr;</span>
            </a>
          </div>

          {/* Hobbies Card */}
          <div className="ph-card hobbies-card">
            <h3>Hobbies & Interests</h3>
            <p className="personality-desc" style={{marginBottom: '2rem'}}>
              When I'm not writing code or analyzing data, you can find me exploring other passions.
            </p>
            <div className="hobbies-list">
              <div className="hobby-item">
                <span className="hobby-icon">🎸</span>
                <div className="hobby-info">
                  <h4>Slapping tha bass</h4>
                  <p>Grooving and keeping the rhythm</p>
                </div>
              </div>
              <div className="hobby-item">
                <span className="hobby-icon">♟️</span>
                <div className="hobby-info">
                  <h4>Strategy Games</h4>
                  <p>Planning and executing complex moves</p>
                </div>
              </div>
              <div className="hobby-item">
                <span className="hobby-icon">🧠</span>
                <div className="hobby-info">
                  <h4>Studying new things</h4>
                  <p>Always curious and learning</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default PersonalityHobbies
