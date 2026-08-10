import React, { useState } from 'react'

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
)

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
)

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)

const projects = [
  {
    id: 1,
    title: 'Graph-EBM',
    tags: 'Causal Discovery | Gumbel-Sinkhorn',
    theme: 'dark',
    chart: 'bar',
    link: 'https://github.com/emanuelegaliano/Graph-EBM'
  },
  {
    id: 2,
    title: 'pyroclast',
    tags: 'OpenCL | MC Simulation',
    theme: 'light',
    chart: 'line',
    link: 'https://github.com/emanuelegaliano/pyroclast'
  },
  {
    id: 3,
    title: 'Sylloge-by-Manu',
    tags: 'Academic Study Notes | LaTeX Course Summaries',
    theme: 'light',
    chart: 'donut',
    link: 'https://github.com/emanuelegaliano/Sylloge-by-Manu'
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Start with first active

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  const renderChartPlaceholder = (type) => {
    if (type === 'bar') {
      return (
        <div className="chart-placeholder" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: '16px' }}>
          <svg viewBox="0 0 100 100" width="80%" height="80%">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
              </marker>
            </defs>
            <circle cx="20" cy="50" r="6" fill="#4F46E5" />
            <circle cx="50" cy="20" r="6" fill="#06B6D4" />
            <circle cx="50" cy="80" r="6" fill="#10B981" />
            <circle cx="80" cy="50" r="6" fill="#F59E0B" />
            
            <line x1="26" y1="44" x2="44" y2="26" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="26" y1="56" x2="44" y2="74" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="56" y1="26" x2="74" y2="44" stroke="#06B6D4" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="56" y1="74" x2="74" y2="56" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrow)" />
          </svg>
        </div>
      )
    }
    if (type === 'line') {
      return (
        <div className="chart-placeholder" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.02)', borderRadius: '16px' }}>
          <svg viewBox="0 0 100 100" width="80%" height="80%">
            {/* Grid */}
            <path d="M 20 20 L 80 20 M 20 40 L 80 40 M 20 60 L 80 60 M 20 80 L 80 80" stroke="#e2e8f0" strokeWidth="1" />
            <path d="M 20 20 L 20 80 M 40 20 L 40 80 M 60 20 L 60 80 M 80 20 L 80 80" stroke="#e2e8f0" strokeWidth="1" />
            
            {/* Particles/Heat */}
            <circle cx="50" cy="50" r="8" fill="#EF4444" opacity="0.8" />
            <circle cx="40" cy="40" r="5" fill="#F59E0B" />
            <circle cx="60" cy="60" r="5" fill="#F59E0B" />
            <circle cx="30" cy="30" r="3" fill="#10B981" />
            <circle cx="70" cy="70" r="3" fill="#10B981" />
            
            {/* Flow paths */}
            <path d="M 50 50 Q 60 40 70 30" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 50 50 Q 40 60 30 70" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>
      )
    }
    if (type === 'donut') {
      return (
        <div className="chart-placeholder" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.02)', borderRadius: '16px' }}>
          <svg viewBox="0 0 100 100" width="80%" height="80%">
            {/* Document / Notes */}
            <rect x="25" y="15" width="50" height="70" rx="4" fill="none" stroke="#3B82F6" strokeWidth="4" />
            
            {/* Lines of text */}
            <line x1="35" y1="35" x2="65" y2="35" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
            <line x1="35" y1="45" x2="55" y2="45" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <line x1="35" y1="55" x2="65" y2="55" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
            <line x1="35" y1="65" x2="50" y2="65" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" />
            
            {/* LaTeX math symbol hint */}
            <path d="M 75 15 L 85 15 L 85 25" fill="none" stroke="#06B6D4" strokeWidth="3" />
            <path d="M 85 15 L 70 30" fill="none" stroke="#06B6D4" strokeWidth="3" />
          </svg>
        </div>
      )
    }
  };

  return (
    <section className="work-carousel-section" id="work">
      {/* Network Background Pattern */}
      <div className="network-bg"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-heading-editorial" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          SELECTED WORK
        </h2>
        
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={handlePrev} aria-label="Previous Project">
            <ChevronLeft />
          </button>
          
          <div className="carousel-track">
            {projects.map((project, index) => {
              // Calculate relative position (-1, 0, 1)
              let position = index - currentIndex;
              
              // Handle looping positions for only 3 items
              if (currentIndex === 0 && index === projects.length - 1) position = -1;
              if (currentIndex === projects.length - 1 && index === 0) position = 1;

              const isCenter = position === 0;
              const isLeft = position === -1;
              const isRight = position === 1;

              let className = "carousel-card ";
              if (isCenter) className += "card-center";
              else if (isLeft) className += "card-left";
              else if (isRight) className += "card-right";
              else className += "card-hidden";

              className += project.theme === 'dark' ? " theme-dark" : " theme-light";

              return (
                <div key={project.id} className={className} onClick={() => setCurrentIndex(index)}>
                  <div className="card-inner">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-tags">{project.tags}</p>
                    
                    {renderChartPlaceholder(project.chart)}
                    
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-github" aria-label="View on GitHub">
                      <GithubIcon />
                      <span>VIEW ON GITHUB</span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          <button className="carousel-btn next" onClick={handleNext} aria-label="Next Project">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Work
