export default function CSALogo({ className = "w-16 h-16", interactive = false }) {
  return (
    <div className={`${className} relative ${interactive ? 'cursor-pointer' : ''}`}>
      <img
        src="/logo.svg"
        alt="CSA Tech Club Logo"
        className="w-full h-full object-contain"
      />
    </div>
  )
}
