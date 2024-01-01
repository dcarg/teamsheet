import type { TeamSheet } from '@prisma/client'

import type { PlayerWithPositions } from '@types'

import NonInteractiveBenchSeat from './NonInteractiveBenchSeat'

const teamSheetLayoutData = {
  bench: [
    { teamSheetLayoutId: '16' },
    { teamSheetLayoutId: '17' },
    { teamSheetLayoutId: '18' },
    { teamSheetLayoutId: '19' },
    { teamSheetLayoutId: '20' },
    { teamSheetLayoutId: '21' },
    { teamSheetLayoutId: '22' },
    { teamSheetLayoutId: '23' },
  ],
}

interface NonInteractiveBenchProps {
  players: PlayerWithPositions[],
  teamSheet: TeamSheet,
}

const NonInteractiveBench = (props: NonInteractiveBenchProps) => {
  const { players, teamSheet } = props

  const data = teamSheet.data as Partial<{ [key: string]: number }>

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {teamSheetLayoutData.bench.map(({ teamSheetLayoutId }) => {
        const playerId = data ? data[teamSheetLayoutId] : null
        const player = players.find(player => player.id === playerId)

        return <NonInteractiveBenchSeat key={teamSheetLayoutId} player={player} />
      })}
    </div>
  )
}

export default NonInteractiveBench