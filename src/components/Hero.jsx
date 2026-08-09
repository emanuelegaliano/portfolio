import React from 'react'

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <span className="hero-subtitle">IT Graduate</span>
        <h1 className="hero-title">
          Emanuele<br/>Galiano
        </h1>
        <p className="hero-bio">
          BSc in Computer Science. Specializing in Data Science and Machine Learning. Upcoming MSc student in Artificial Intelligence, with a strong focus on the application of Causal Analysis.
        </p>
      </div>
      
      <div className="hero-visual">
        <div className="geometric-shape"></div>
        <div className="geometric-shape-2"></div>
      </div>
    </section>
  )
}

export default Hero
