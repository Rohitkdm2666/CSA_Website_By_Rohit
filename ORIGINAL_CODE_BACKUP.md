# Original Code Before Theme Toggle Implementation

## 1. src/main.jsx (Original)
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## 2. src/index.css (Original)
```css
@import "tailwindcss";

@theme {
  --color-bg: 0 0 0;
  --color-fg: 255 255 255;
  --color-accent: 255 165 0;
  --color-red: 220 38 38;
}

:root {
  color-scheme: dark;
}

body {
  @apply bg-[rgb(var(--color-bg))] text-[rgb(var(--color-fg))] antialiased selection:bg-orange-500/20 selection:text-orange-100;
}

.container-xl {
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}

.gradient-grid {
  background-image: radial-gradient(circle at 20% 10%, rgba(255,165,0,.15), transparent 30%),
    radial-gradient(circle at 80% 30%, rgba(220,38,38,.12), transparent 35%),
    radial-gradient(circle at 50% 80%, rgba(255,165,0,.08), transparent 40%);
}
```

## 3. src/App.jsx (Original)
```jsx
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import LiveStrip from './components/LiveStrip'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-dvh gradient-grid">
      <Navbar />
      <main className="container-xl space-y-24 pt-16">
        <Hero />
        <LiveStrip />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
```

## 4. src/components/Navbar.jsx (Original)
```jsx
import { useEffect, useState } from 'react'

function Clock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="tabular-nums text-sm text-orange-300/80">
      {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
    </span>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <div className="container-xl h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-md bg-gradient-to-br from-orange-400 to-red-500" />
          <span className="font-semibold tracking-wide">CSA Tech Club</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#events" className="hover:text-white">Events</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#join" className="hover:text-white">Join</a>
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
```

## 5. src/components/Hero.jsx (Original)
```jsx
import { Suspense } from 'react'

function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -left-20 size-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 size-72 rounded-full bg-red-500/20 blur-3xl" />
    </div>
  )
}

function GlitchText({ children }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
        {children}
      </span>
      <span className="absolute inset-0 -z-0 translate-x-px text-orange-400/40 select-none" aria-hidden>
        {children}
      </span>
      <span className="absolute inset-0 -z-0 -translate-x-[2px] text-red-400/40 select-none" aria-hidden>
        {children}
      </span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-12 text-center">
      <BackgroundOrbs />
      <div className="container-xl">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="size-2 rounded-full bg-orange-400 animate-pulse" />
            Welcome to the future of our campus tech community
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
            <GlitchText>CSA Tech Club</GlitchText>
          </h1>
          <p className="mt-6 text-white/70">
            We explore AI, Web, Systems, and 3D—building real projects, shipping open source,
            and hosting talks with industry engineers. Join us to level up.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#join" className="inline-flex h-11 items-center rounded-md bg-orange-500 px-5 text-sm font-medium text-black hover:bg-orange-400 transition-colors">
              Become a member
            </a>
            <a href="#projects" className="inline-flex h-11 items-center rounded-md border border-white/15 bg-white/5 px-5 text-sm font-medium hover:bg-white/10">
              View projects
            </a>
          </div>
          <div className="mt-14 rounded-xl border border-white/10 bg-black/40 p-4">
            <Suspense fallback={<div className="h-48" />}>
              <div className="h-48 w-full grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-500/0 border border-orange-400/20" />
                <div className="rounded-lg bg-gradient-to-br from-red-500/10 to-red-500/0 border border-red-400/20" />
                <div className="rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-500/0 border border-orange-400/20" />
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
```

## 6. src/components/LiveStrip.jsx (Original)
```jsx
import { useEffect, useRef } from 'react'

export default function LiveStrip() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    let x = 0
    const tick = () => {
      x -= 0.5
      if (x <= -el.scrollWidth / 2) x = 0
      el.style.transform = `translateX(${x}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  const text = 'AI · Web · Systems · 3D · Open Source · Hackathons · '
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-black/40">
      <div className="container-xl py-3">
        <div className="relative whitespace-nowrap">
          <div ref={ref} className="inline-block will-change-transform">
            <span className="mx-4 text-sm text-white/70">{text.repeat(10)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## 7. src/components/Features.jsx (Original)
```jsx
const features = [
  {
    title: 'Weekly Labs',
    body: 'Hands-on sessions for AI, web, and systems. Bring your laptop.'
  },
  {
    title: 'Open Source',
    body: 'Contribute to public repos. Learn collaboration and code quality.'
  },
  {
    title: 'Guest Talks',
    body: 'Engineers from startups and big tech share real-world stories.'
  },
  {
    title: 'Hack Nights',
    body: 'Team up and build fast. Ship something fun every month.'
  },
]

export default function Features() {
  return (
    <section id="about" className="container-xl">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
            <h3 className="text-lg font-medium mb-1">{f.title}</h3>
            <p className="text-white/70 text-sm">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

## 8. src/components/Footer.jsx (Original)
```jsx
export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-xl py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div className="flex items-center gap-3">
          <div className="size-6 rounded bg-gradient-to-br from-orange-400 to-red-500" />
          <span>CSA Tech Club</span>
        </div>
        <p>© {new Date().getFullYear()} CSA. All rights reserved.</p>
      </div>
    </footer>
  )
}
```

## Files that didn't exist before theme toggle:
- `src/contexts/ThemeContext.jsx` (This was created for theme toggle)
- `src/components/ThemeToggle.jsx` (This was created for theme toggle)

## Key differences from current state:
1. No ThemeProvider wrapper in main.jsx
2. Simple CSS theme variables (no light/dark variants)
3. No theme toggle button in Navbar
4. Fixed dark theme styling throughout
5. No theme-aware CSS classes (no `dark:` prefixes)
6. `min-h-dvh` instead of `min-h-screen w-full` in App.jsx
