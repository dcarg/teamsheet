import type { Player, TeamSheet } from '@prisma/client'

const teamSheetLayoutData = {
  bench: [
    { teamSheetLayoutId: '16' },
    { teamSheetLayoutId: '17' },
    { teamSheetLayoutId: '18' },
  ]
}

interface NonInteractiveBench {
  players: Player[],
  teamSheet: TeamSheet,
}

const NonInteractiveBench = (props: NonInteractiveBench) => {
  const { players, teamSheet } = props

  const data = teamSheet.data as Partial<{ [key: string]: number }>

  // OG image is 630px height
  // we have 8 slots

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {teamSheetLayoutData.bench.map(({ teamSheetLayoutId }) => {
        const playerId = data ? data[teamSheetLayoutId] : null
        const player = players.find(player => player.id === playerId)

        return <div key={teamSheetLayoutId}>{player?.lastname}</div>
      })}
    </div>
  )
}

export default NonInteractiveBench