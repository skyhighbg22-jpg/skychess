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
    <div className="badge-system">
      <h3>Achievements</h3>
      <div className="badge-grid">
        {badges.map((badge) => (
          <div key={badge.id} className={`badge-item ${badge.unlocked ? 'unlocked' : 'locked'}`}>
            <div className="badge-icon">{badge.icon}</div>
            <p className="badge-name">{badge.name}</p>
            <p className="badge-desc">{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
