import type { Team, TeamSheet } from '@prisma/client'

import { findPlayerTeamForCompetition } from '@functions/players'

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
  team: Team,
  teamSheet: TeamSheet,
}

const NonInteractiveBench = (props: NonInteractiveBenchProps) => {
  const { team, teamSheet } = props
  const { competitionId } = teamSheet

  const data = teamSheet.data as Partial<{ [key: string]: PlayerWithPositions }>

  const { primaryColor, secondaryColor } = team

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '390px'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgb(14 116 144)',
          color: 'white',
          fontFamily: 'Futura Bold',
          fontSize: 'xx-large',
          fontWeight: 'bold',
          padding: '8px',
        }}
      >
        BENCH:
      </div>

      <div
        style={{
          borderTop: '1px solid',
          display: 'flex',
          flexDirection: 'column',
          width: '390px',
          borderColor: 'rgb(75 85 99)', // borderColor must come after borders, do not sort
        }}
      >
        {teamSheetLayoutData.bench.map(({ teamSheetLayoutId }) => {
          const player = data ? data[teamSheetLayoutId] : undefined

          const team = findPlayerTeamForCompetition(competitionId, player)
          const {
            primaryColor: playerTeamPrimaryColor,
            secondaryColor: playerTeamSecondaryColor,
          } = team || {}

          return (
            <NonInteractiveBenchSeat
              key={teamSheetLayoutId}
              number={teamSheetLayoutId}
              player={player}
              primaryColor={playerTeamPrimaryColor || primaryColor}
              secondaryColor={playerTeamSecondaryColor || secondaryColor}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NonInteractiveBench