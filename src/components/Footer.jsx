import CSALogo from './CSALogo'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-xl py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div className="flex items-center gap-3">
          <CSALogo className="w-6 h-6" />
          <span className="text-white">CSA Tech Club</span>
        </div>
        <p className="text-white/60">© {new Date().getFullYear()} CSA. All rights reserved.</p>
      </div>
    </footer>
  )
}


