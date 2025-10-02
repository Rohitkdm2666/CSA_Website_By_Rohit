import { useEffect, useState } from 'react'
import CSALogo from './CSALogo'

function Clock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="tabular-nums text-sm text-orange-300">
      {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
    </span>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b border-white/10">
      <div className="container-xl h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CSALogo className="w-8 h-8" />
          <span className="font-semibold tracking-wide text-white">CSA Tech Club</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#events" className="hover:text-white transition-colors">Events</a>
          <a href="#domain" className="hover:text-white transition-colors">Domain</a>
          <a href="#join" className="hover:text-white transition-colors">Join</a>
        </nav>
        <div className="flex items-center gap-4">
          <Clock />
          <a href="#join" className="inline-flex h-9 items-center rounded-md bg-orange-500 px-3 text-sm font-medium text-black hover:bg-orange-400 transition-colors">
            Join Us
          </a>
        </div>
      </div>
    </header>
  )
}


