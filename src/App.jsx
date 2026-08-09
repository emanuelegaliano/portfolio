import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import EducationExperience from './components/EducationExperience'
import Interests from './components/Interests'
import Work from './components/Work'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EducationExperience />
        <Interests />
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
