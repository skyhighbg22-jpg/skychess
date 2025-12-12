import { Trophy, Medal, Flame } from 'lucide-react'

interface Player {
  rank: number
  name: string
  xp: number
  level: number
}

const topPlayers: Player[] = [
  { rank: 1, name: 'ChessMaster2024', xp: 15420, level: 45 },
  { rank: 2, name: 'OpeningGuru', xp: 14320, level: 42 },
  { rank: 3, name: 'TacticalMind', xp: 13250, level: 40 },
  { rank: 4, name: 'YouUsername', xp: 9820, level: 32 },
  { rank: 5, name: 'ChessNinja', xp: 8950, level: 30 },
]

export default function Leaderboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="text-neon-yellow" size={32} />
        <h3 className="text-2xl font-heading font-bold text-neon-cyan">Global Leaderboard</h3>
      </div>
      <div className="space-y-3 rounded-lg bg-neon-darkblue/30 border border-neon-cyan/20 p-4">
        {topPlayers.map((player) => (
          <div
            key={player.rank}
            className={`flex items-center gap-4 p-4 rounded-lg transition hover:border-neon-cyan/50 ${
              player.rank <= 3
                ? 'bg-gradient-to-r from-neon-cyan/10 to-neon-blue/10 border border-neon-cyan/30 shadow-lg shadow-neon-cyan/20'
                : 'bg-neon-darkblue/50 border border-neon-cyan/10'
            }`}
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-neon-purple/30 border border-neon-cyan/20">
              {player.rank === 1 && <Trophy className="text-neon-yellow" size={24} />}
              {player.rank === 2 && <Medal className="text-neon-silver" size={24} />}
              {player.rank === 3 && <Medal className="text-neon-orange" size={24} />}
              {player.rank > 3 && <span className="font-bold text-neon-cyan font-heading text-sm">{player.rank}</span>}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-neon-cyan text-lg">{player.name}</p>
              <p className="text-sm text-muted-foreground">Level {player.level}</p>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="text-neon-orange" size={18} />
              <span className="font-bold text-neon-green font-heading text-lg">{player.xp.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
