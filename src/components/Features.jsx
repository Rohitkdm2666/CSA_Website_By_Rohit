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
            <h3 className="text-lg font-medium mb-1 text-white">{f.title}</h3>
            <p className="text-white/70 text-sm">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


