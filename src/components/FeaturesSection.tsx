export default function FeaturesSection() {
  const features = [
    { icon: '⚡', title: 'AI-Powered Analysis', description: 'Real-time AI feedback on your moves' },
    { icon: '🎯', title: 'Spaced Repetition', description: 'Scientifically proven learning method' },
    { icon: '📊', title: 'Progress Tracking', description: 'Track your improvement with analytics' },
    { icon: '🏆', title: 'Gamification', description: 'Earn badges and compete on leaderboards' },
    { icon: '🧠', title: 'Interactive Lessons', description: 'Learn through engaging interactive content' },
    { icon: '🚀', title: 'Adaptive Difficulty', description: 'Content adjusts to your skill level' },
  ];
  
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-neon-green">Why SkyChess?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 border border-neon-purple/30 rounded-lg hover:border-neon-purple transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-neon-purple mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
