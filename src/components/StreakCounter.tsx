import { Flame } from 'lucide-react'

interface StreakCounterProps {
  currentStreak: number
  longestStreak: number
  daysThisMonth: number
}

export default function StreakCounter({ currentStreak, longestStreak, daysThisMonth }: StreakCounterProps) {
  return (
    <div className="streak-counter">
      <h3>Your Streaks</h3>
      <div className="streak-grid">
        <div className="streak-item active-streak">
          <Flame className="streak-flame" size={40} />
          <div className="streak-info">
            <p className="streak-number">{currentStreak}</p>
            <p className="streak-label">Current Streak</p>
          </div>
        </div>
        <div className="streak-item">
          <Flame className="streak-flame" size={40} />
          <div className="streak-info">
            <p className="streak-number">{longestStreak}</p>
            <p className="streak-label">Longest Streak</p>
          </div>
        </div>
        <div className="streak-item">
          <p className="streak-number">{daysThisMonth}</p>
          <p className="streak-label">Days This Month</p>
        </div>
      </div>
    </div>
  )
}
