import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black via-neon-darkblue/30 to-transparent backdrop-blur-sm border-b border-neon-cyan/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-neon-cyan font-heading">⚡ SkyChess</div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-neon-cyan transition">Courses</a>
          <a href="#" className="text-muted-foreground hover:text-neon-green transition">Features</a>
          <a href="#" className="text-muted-foreground hover:text-neon-blue transition">Pricing</a>
          <a href="#" className="text-muted-foreground hover:text-neon-purple transition">About</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 rounded-lg border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition">
            Sign In
          </button>
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold hover:shadow-lg hover:shadow-neon-cyan/50 transition">
            Get Started
          </button>
        </div>
        
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-black border-t border-neon-cyan/20 py-4">
          <a href="#" className="block px-6 py-2 text-muted-foreground hover:text-neon-cyan">Courses</a>
          <a href="#" className="block px-6 py-2 text-muted-foreground hover:text-neon-cyan">Features</a>
          <a href="#" className="block px-6 py-2 text-muted-foreground hover:text-neon-cyan">Pricing</a>
        </div>
      )}
    </nav>
  );
}
