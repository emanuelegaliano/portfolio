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
    title: 'Explainable AI (XAI) Dashboard',
    tags: 'MLOps | Interpretability | Dashboard',
    theme: 'dark',
    chart: 'bar'
  },
  {
    id: 2,
    title: 'Time Series Forecasting for Inventory',
    tags: 'TIME SERIES | FORECASTING | LOGISTICS',
    theme: 'light',
    chart: 'line'
  },
  {
    id: 3,
    title: 'NLP Customer Feedback Analysis',
    tags: 'NLP | Sentiment Analysis | Visualizations',
    theme: 'light',
    chart: 'donut'
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle active

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  const renderChartPlaceholder = (type) => {
    if (type === 'bar') {
      return (
        <div className="chart-placeholder bar-chart">
          <div className="bar" style={{height: '60%', background: '#4F46E5'}}></div>
          <div className="bar" style={{height: '40%', background: '#06B6D4'}}></div>
          <div className="bar" style={{height: '80%', background: '#10B981'}}></div>
          <div className="bar" style={{height: '50%', background: '#F59E0B'}}></div>
          <div className="bar" style={{height: '70%', background: '#EF4444'}}></div>
        </div>
      )
    }
    if (type === 'line') {
      return (
        <div className="chart-placeholder line-chart">
          <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="line-svg">
            <path d="M0,40 Q10,20 20,30 T40,10 T60,25 T80,5 T100,15" fill="none" stroke="#F59E0B" strokeWidth="2" />
            <path d="M0,40 Q10,20 20,30 T40,10 T60,25 T80,5 T100,15 L100,50 L0,50 Z" fill="rgba(59, 130, 246, 0.2)" stroke="none" />
            <path d="M0,35 Q10,25 20,25 T40,20 T60,15 T80,10 T100,10" fill="none" stroke="#3B82F6" strokeWidth="1" />
          </svg>
        </div>
      )
    }
    if (type === 'donut') {
      return (
        <div className="chart-placeholder donut-chart">
          <div className="donut">
            <div className="donut-hole"></div>
          </div>
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
                    
                    <a href="#" className="card-github" aria-label="View on GitHub">
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
