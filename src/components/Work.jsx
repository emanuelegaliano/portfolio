import React from 'react'

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
)

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Causal Discovery in Latent Orders",
      desc: "Academic project focusing on extracting and reconstructing latent causal orderings from observational data.",
      tech: ["Python", "PyTorch", "Causal Inference"],
      link: "#"
    },
    {
      id: 2,
      title: "Data Analysis Pipeline",
      desc: "End-to-end machine learning pipeline for robust feature engineering and predictive modeling.",
      tech: ["Python", "Scikit-Learn", "Pandas"],
      link: "#"
    },
    {
      id: 3,
      title: "AI Model Evaluation Tool",
      desc: "A framework to systematically test and evaluate deep learning models on various benchmarks.",
      tech: ["Python", "TensorFlow", "Docker"],
      link: "#"
    }
  ]

  return (
    <section className="work-section" id="work">
      <div className="container">
        <h2 className="section-heading-editorial">Selected Work</h2>
        
        <div className="bento-grid">
          {projects.map((project) => (
            <div key={project.id} className="bento-item">
              
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <a href={project.link} style={{ color: 'inherit' }} aria-label="View on GitHub">
                  <GithubIcon />
                </a>
              </div>
              
              <p className="project-desc">{project.desc}</p>
              
              <div className="tech-stack">
                {project.tech.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
