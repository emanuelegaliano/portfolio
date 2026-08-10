import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ResumeSplit from './components/ResumeSplit'
import Work from './components/Work'
import PersonalityHobbies from './components/PersonalityHobbies'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ResumeSplit />
        <Work />
        <PersonalityHobbies />
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
