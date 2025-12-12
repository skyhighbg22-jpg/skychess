import { Flame } from 'lucide-react'

interface StreakCounterProps {
  currentStreak: number
  longestStreak: number
  daysThisMonth: number
}

export default function StreakCounter({ currentStreak, longestStreak, daysThisMonth }: StreakCounterProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-heading font-bold text-neon-cyan">Your Streaks</h3>
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        <div className="p-4 rounded-lg bg-gradient-to-br from-neon-orange/20 to-neon-red/10 border border-neon-orange/30 text-center card-neon hover:scale-105 transition">
          <div className="flex justify-center mb-3">
            <Flame className="text-neon-orange animate-pulse" size={40} />
          </div>
          <p className="text-3xl font-bold text-neon-orange font-heading">{currentStreak}</p>
          <p className="text-sm text-muted-foreground mt-2">Current Streak</p>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-neon-yellow/20 to-neon-orange/10 border border-neon-yellow/30 text-center card-neon hover:scale-105 transition">
          <div className="flex justify-center mb-3">
            <Flame className="text-neon-yellow" size={40} />
          </div>
          <p className="text-3xl font-bold text-neon-yellow font-heading">{longestStreak}</p>
          <p className="text-sm text-muted-foreground mt-2">Longest Streak</p>
        </div>

        <div className="p-4 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-blue/10 border border-neon-cyan/30 text-center card-neon hover:scale-105 transition">
          <p className="text-3xl font-bold text-neon-cyan font-heading">{daysThisMonth}</p>
          <p className="text-sm text-muted-foreground mt-2">Days This Month</p>
        </div>
      </div>
    </div>
  )
}
