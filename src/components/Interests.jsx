import React from 'react'

const Interests = () => {
  const interests = [
    "Causal Inference",
    "Machine Learning",
    "Data Science",
    "Artificial Intelligence"
  ];

  return (
    <section className="section interests-container" id="interests">
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--text-light)'}}>Interests & Specializations</h2>
        
        <div className="tags-wrapper">
          {interests.map((item, index) => (
            <div key={index} className="tag-pill">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Interests
