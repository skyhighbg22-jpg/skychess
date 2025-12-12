export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-neon-darkblue/50 to-black pt-20 pb-10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="black" /><rect width="100%" height="100%" fill="url(%23grid)" /></svg>')] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-heading font-bold tracking-tight">
            <span className="inline-block bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">Master Chess</span>
            <br />
            <span className="text-neon-green drop-shadow-lg">Openings with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionize your chess game with our <span className="text-neon-cyan font-semibold">AI-powered learning platform</span>. Master 100+ openings through interactive lessons, real-time feedback, and adaptive difficulty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold font-heading text-lg hover:shadow-2xl hover:shadow-neon-cyan/50 transition transform hover:scale-105">
              Start Learning Now
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-neon-cyan text-neon-cyan font-bold font-heading text-lg hover:bg-neon-cyan/10 transition">
              View Demo
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan font-heading">100+</div>
              <div className="text-sm text-muted-foreground">Chess Openings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-green font-heading">AI-Powered</div>
              <div className="text-sm text-muted-foreground">Personalized Learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-purple font-heading">Proven</div>
              <div className="text-sm text-muted-foreground">Results & Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
