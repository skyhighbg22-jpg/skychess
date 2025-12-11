import { Trophy, Medal } from 'lucide-react'

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
    <div className="leaderboard">
      <div className="leaderboard-header">
        <Trophy className="trophy-icon" size={32} />
        <h3>Global Leaderboard</h3>
      </div>
      <div className="leaderboard-list">
        {topPlayers.map((player) => (
          <div key={player.rank} className={`leaderboard-entry ${player.rank <= 3 ? 'top-player' : ''}`}>
            <div className="rank-badge">
              {player.rank === 1 && <Trophy size={20} className="gold" />}
              {player.rank === 2 && <Medal size={20} className="silver" />}
              {player.rank === 3 && <Medal size={20} className="bronze" />}
              {player.rank > 3 && <span>{player.rank}</span>}
            </div>
            <div className="player-info">
              <p className="player-name">{player.name}</p>
              <p className="player-level">Level {player.level}</p>
            </div>
            <div className="player-xp">{player.xp.toLocaleString()} XP</div>
          </div>
        ))}
      </div>
    </div>
  )
}
