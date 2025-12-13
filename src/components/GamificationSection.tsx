export default function GamificationSection() {
  const gamifications = [
    { icon: '🌟', label: 'Badges', value: '50+ Achievements' },
    { icon: '🔥', label: 'Streaks', value: 'Daily Challenges' },
    { icon: '📊', label: 'XP System', value: 'Track Progress' },
    { icon: '🏆', label: 'Leaderboards', value: 'Compete Globally' },
  ];
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-neon-green">Gamification</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {gamifications.map((g, i) => (
            <div key={i} className="p-6 text-center border border-neon-green/30 rounded-lg hover:border-neon-green transition">
              <div className="text-4xl mb-4">{g.icon}</div>
              <h3 className="font-bold text-neon-green mb-2">{g.label}</h3>
              <p className="text-muted-foreground">{g.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
