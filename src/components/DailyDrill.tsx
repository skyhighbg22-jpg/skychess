import { Calendar, Flame, Award } from 'lucide-react'

interface DailyDrillProps {
  streak: number
  lastCompleted: string
  totalCompleted: number
}

export default function DailyDrill({ streak, lastCompleted, _totalCompleted }: DailyDrillProps) {
  return (
    <div className="space-y-6 p-6 rounded-lg bg-gradient-to-br from-neon-darkblue/40 to-neon-purple/20 border border-neon-cyan/20">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="text-neon-cyan" size={28} />
        <h3 className="text-2xl font-heading font-bold text-neon-cyan">Daily Chess Drill</h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 rounded-lg bg-neon-darkblue/50 border border-neon-cyan/10 hover:border-neon-cyan/30 transition">
          <Flame className="text-neon-orange animate-pulse" size={36} />
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Current Streak</p>
            <p className="text-2xl font-bold text-neon-cyan font-heading">{streak} days</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-lg bg-neon-darkblue/50 border border-neon-cyan/10 hover:border-neon-cyan/30 transition">
          <Award className="text-neon-green" size={36} />
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Completed Today</p>
            <p className="text-2xl font-bold text-neon-green font-heading">1/1 challenge</p>
          </div>
        </div>
      </div>

      <button className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold font-heading hover:shadow-lg hover:shadow-neon-cyan/50 transition transform hover:scale-105">
        Start Today's Challenge
      </button>
      <p className="text-sm text-muted-foreground text-center">Last completed: {lastCompleted}</p>
    </div>
  )
}
