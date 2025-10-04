import { useState } from 'react'
import './App.css'
import LogoIntro from './components/LogoIntro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import LiveStrip from './components/LiveStrip'

import Logo3D from './components/Logo3D'
import Domains from './components/Domains'
import Events from './components/Events'
import Team from './components/Team'
import FAQ from './components/FAQ'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  return (
    <>
      {showIntro && <LogoIntro onComplete={handleIntroComplete} />}
      
      <div className="gradient-grid">
        {!showIntro && <Navbar />}
        <main>
          <Hero />
          {/* <Logo3D /> */}
          <section className="container-xl space-y-24 pt-16">
            {/* <LiveStrip /> */}
            {/* <Features /> */}
            <About />
            <Domains />
            <Events />
            <Team />
            <FAQ />
          </section>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
