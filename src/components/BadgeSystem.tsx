import { Star, Zap, Target, Crown } from 'lucide-react'

interface Badge {
  id: string
  name: string
  icon: React.ReactNode
  unlocked: boolean
  description: string
}

const badges: Badge[] = [
  { id: '1', name: 'First Victory', icon: <Star size={32} />, unlocked: true, description: 'Win first match' },
  { id: '2', name: 'Speed Demon', icon: <Zap size={32} />, unlocked: true, description: 'Complete 5 daily drills' },
  { id: '3', name: 'Opening Master', icon: <Target size={32} />, unlocked: false, description: 'Master 5 openings' },
  { id: '4', name: 'Legendary', icon: <Crown size={32} />, unlocked: false, description: 'Reach Level 50' },
]

export default function BadgeSystem() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-heading font-bold text-neon-cyan">Achievements</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-lg bg-neon-darkblue/30 border border-neon-cyan/20">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`card-neon text-center transition
              ${
                badge.unlocked
                  ? 'opacity-100 hover:scale-110'
                  : 'opacity-50 grayscale hover:opacity-75'
              }`}
          >
            <div className="flex justify-center mb-3 ${badge.unlocked ? 'text-neon-cyan' : 'text-muted-foreground'}">
              {badge.icon}
            </div>
            <p className="badge-name font-semibold text-sm text-center transition">
              {badge.name}
            </p>
            <p className="badge-desc text-xs text-muted-foreground mt-2 text-center">
              {badge.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
