import { Calendar, Flame, Award } from 'lucide-react'

interface DailyDrillProps {
  streak: number
  lastCompleted: string
  totalCompleted: number
}

export default function DailyDrill({ streak, lastCompleted, totalCompleted }: DailyDrillProps) {
  return (
    <div className="daily-drill">
      <div className="drill-header">
        <Calendar size={24} />
        <h3>Daily Chess Drill</h3>
      </div>
      
      <div className="drill-content">
        <div className="drill-stat">
          <Flame className="flame-icon" size={32} />
          <div>
            <p className="stat-label">Current Streak</p>
            <p className="stat-value">{streak} days</p>
          </div>
        </div>
        
        <div className="drill-stat">
          <Award size={32} />
          <div>
            <p className="stat-label">Completed Today</p>
            <p className="stat-value">1/1 challenge</p>
          </div>
        </div>
      </div>
      
      <button className="drill-button">Start Today's Challenge</button>
      <p className="drill-info">Last completed: {lastCompleted}</p>
    </div>
  )
}
