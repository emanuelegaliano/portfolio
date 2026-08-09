import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ResumeSplit from './components/ResumeSplit'
import Work from './components/Work'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ResumeSplit />
        <Work />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Emanuele Galiano. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
