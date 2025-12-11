interface XPDisplayProps {
  currentXP: number
  nextLevelXP: number
  level: number
}

export default function XPDisplay({ currentXP, nextLevelXP, level }: XPDisplayProps) {
  const progressPercent = (currentXP / nextLevelXP) * 100
  const xpRemaining = nextLevelXP - currentXP

  return (
    <div className="xp-display">
      <div className="level-badge">
        <p className="level-number">Level {level}</p>
      </div>
      
      <div className="xp-info">
        <div className="xp-header">
          <p className="current-xp">{currentXP.toLocaleString()} XP</p>
          <p className="next-level">{nextLevelXP.toLocaleString()} to next</p>
        </div>
        
        <div className="xp-progress-bar">
          <div className="xp-progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
        
        <p className="xp-remaining">{xpRemaining.toLocaleString()} XP to Level {level + 1}</p>
      </div>
    </div>
  )
}
