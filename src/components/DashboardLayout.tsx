import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex bg-black">
      {/* Sidebar */}
      <aside className="w-64 border-r border-neon-cyan/20 bg-gradient-to-b from-black via-neon-darkblue/10 to-black sticky top-0 h-screen overflow-y-auto hidden md:flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-neon-cyan font-heading mb-8">⚡ SkyChess</h1>
          <nav className="space-y-4">
            <a href="#dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/30 hover:border-neon-cyan transition">
              <span className="text-xl">📊</span>
              <span>Dashboard</span>
            </a>
            <a href="#courses" className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-neon-cyan border border-transparent hover:border-neon-cyan/30 transition">
              <span className="text-xl">📚</span>
              <span>Courses</span>
            </a>
            <a href="#progress" className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-neon-cyan border border-transparent hover:border-neon-cyan/30 transition">
              <span className="text-xl">📈</span>
              <span>Progress</span>
            </a>
            <a href="#leaderboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-neon-cyan border border-transparent hover:border-neon-cyan/30 transition">
              <span className="text-xl">🏆</span>
              <span>Leaderboard</span>
            </a>
            <a href="#settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-neon-cyan border border-transparent hover:border-neon-cyan/30 transition">
              <span className="text-xl">⚙️</span>
              <span>Settings</span>
            </a>
          </nav>
        </div>
        <div className="mt-auto p-6 border-t border-neon-cyan/20">
          <div className="px-4 py-3 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20 text-center">
            <p className="text-sm text-neon-cyan font-bold mb-2">Pro Member</p>
            <button className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-black text-xs font-bold hover:shadow-lg hover:shadow-neon-cyan/50 transition">
              Upgrade
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="border-b border-neon-cyan/20 bg-black/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-neon-cyan font-heading">Dashboard</h2>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 rounded-lg border border-neon-cyan/30 text-neon-cyan text-sm hover:border-neon-cyan transition">
                Profile
              </button>
            </div>
          </div>
        </header>
        <div className="p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
