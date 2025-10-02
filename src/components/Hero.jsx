import { Suspense } from 'react'
import InteractiveCSALogo from './InteractiveCSALogo'

function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -left-20 size-72 rounded-full bg-orange-500/15 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 size-72 rounded-full bg-orange-400/10 blur-3xl" />
    </div>
  )
}

function GlitchText({ children }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
        {children}
      </span>
      <span className="absolute inset-0 -z-0 translate-x-px text-orange-500/40 select-none" aria-hidden>
        {children}
      </span>
      <span className="absolute inset-0 -z-0 -translate-x-[2px] text-orange-600/30 select-none" aria-hidden>
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
            <span className="size-2 rounded-full bg-orange-500 animate-pulse" />
            Welcome to the future of our campus tech community
          </p>
          
          <div className="mb-6">
            <InteractiveCSALogo className="w-32 h-32 mx-auto mb-4" />
          </div>
          
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
            <a href="#projects" className="inline-flex h-11 items-center rounded-md border border-white/15 bg-white/5 px-5 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              View projects
            </a>
          </div>
          <div className="mt-14 rounded-xl border border-white/10 bg-black/40 p-4">
            <Suspense fallback={<div className="h-48" />}>
              <div className="h-48 w-full grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-gradient-to-br from-orange-500/15 to-orange-500/0 border border-orange-400/30" />
                <div className="rounded-lg bg-gradient-to-br from-orange-600/15 to-orange-600/0 border border-orange-500/30" />
                <div className="rounded-lg bg-gradient-to-br from-orange-400/15 to-orange-400/0 border border-orange-300/30" />
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}


