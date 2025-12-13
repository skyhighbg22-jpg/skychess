export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex">
        <div className="w-64 border-r border-neon-cyan/20 p-6">
          <div className="text-neon-cyan font-bold mb-8">⚡ SkyChess</div>
          <nav className="space-y-4">
            <a href="#" className="block text-muted-foreground hover:text-neon-cyan">Dashboard</a>
            <a href="#" className="block text-muted-foreground hover:text-neon-cyan">Courses</a>
            <a href="#" className="block text-muted-foreground hover:text-neon-cyan">Progress</a>
            <a href="#" className="block text-muted-foreground hover:text-neon-cyan">Settings</a>
          </nav>
        </div>
        <div className="flex-1 p-8">{children}</div>
      </div>
    </div>
  );
}
