import { Zap } from 'lucide-react'

interface XPDisplayProps {
  currentXP: number
  nextLevelXP: number
  level: number
}

export default function XPDisplay({ currentXP, nextLevelXP, level }: XPDisplayProps) {
  const progressPercent = (currentXP / nextLevelXP) * 100
  const xpRemaining = nextLevelXP - currentXP

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Zap className="text-neon-yellow" size={28} />
          <h3 className="text-2xl font-heading font-bold text-neon-cyan">Experience Points</h3>
        </div>
        <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue border border-neon-cyan/30">
          <p className="text-sm font-semibold text-neon-cyan">Level {level}</p>
        </div>
      </div>

      <div className="space-y-4 p-6 rounded-lg bg-neon-darkblue/30 border border-neon-cyan/20">
        <div className="flex justify-between items-baseline">
          <p className="text-muted-foreground">Progress to Level {level + 1}</p>
          <p className="text-sm font-bold text-neon-green">{currentXP.toLocaleString()} / {nextLevelXP.toLocaleString()}</p>
        </div>

        <div className="w-full h-3 rounded-full bg-neon-darkblue border border-neon-cyan/20 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple transition-all duration-500 shadow-lg shadow-neon-cyan/50"
            style={{ width: `${Math.min(progressPercent, 100)}%` }}
          />
        </div>

        <div className="text-center">
          <p className="text-lg font-bold text-neon-orange font-heading">{xpRemaining.toLocaleString()} XP remaining</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg bg-neon-purple/20 border border-neon-purple/30 text-center">
          <p className="text-sm text-muted-foreground">Current XP</p>
          <p className="text-2xl font-bold text-neon-purple font-heading mt-2">{currentXP.toLocaleString()}</p>
        </div>
        <div className="p-4 rounded-lg bg-neon-cyan/20 border border-neon-cyan/30 text-center">
          <p className="text-sm text-muted-foreground">Next Level XP</p>
          <p className="text-2xl font-bold text-neon-cyan font-heading mt-2">{nextLevelXP.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}
