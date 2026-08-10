import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo">
            <span className="logo-star" style={{ display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="10" y1="19" x2="14" y2="5"></line>
                <polyline points="15 18 21 12 15 6"></polyline>
              </svg>
            </span> Emanuele Galiano
          </div>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <nav className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            <a href="#resume" className="nav-link" onClick={closeMenu}>Resume</a>
            <a href="#work" className="nav-link" onClick={closeMenu}>Work</a>
            <a href="#contact" className="btn btn-secondary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }} onClick={closeMenu}>Get in touch!</a>
          </nav>
        </div>
      </header>
      
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  )
}

export default Header
