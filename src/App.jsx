import { useState } from 'react'
import './App.css'
import LogoIntro from './components/LogoIntro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import LiveStrip from './components/LiveStrip'
import Footer from './components/Footer'
import Logo3D from './components/Logo3D'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  return (
    <>
      {showIntro && <LogoIntro onComplete={handleIntroComplete} />}
      
      <div className={`min-h-screen w-full gradient-grid transition-opacity duration-500 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          {/* <Logo3D /> */}
          <section className="container-xl space-y-24 pt-16">
            <LiveStrip />
            <Features />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
