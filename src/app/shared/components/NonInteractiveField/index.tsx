import type { Player, TeamSheet } from '@prisma/client'

import NonInteractivePlayerIcon from './NonInteractivePlayerIcon'

const teamSheetLayoutData = {
  field: [
    { teamSheetLayoutId: '1', style: { top: '95px', left: '190px' } },
    { teamSheetLayoutId: '2', style: { top: '100px', left: '350px' } },
    { teamSheetLayoutId: '3', style: { top: '95px', left: '530px' } },
    { teamSheetLayoutId: '4', style: { top: '160px', left: '260px' } },
    { teamSheetLayoutId: '5', style: { top: '160px', left: '440px' } },
    { teamSheetLayoutId: '6', style: { top: '220px', left: '190px' } },
    { teamSheetLayoutId: '8', style: { top: '240px', left: '350px' } },
    { teamSheetLayoutId: '7', style: { top: '220px', left: '530px' } },
    { teamSheetLayoutId: '9', style: { top: '315px', left: '230px' } },
    { teamSheetLayoutId: '10', style: { top: '335px', left: '350px' } },
    { teamSheetLayoutId: '11', style: { top: '440px', left: '110px' } },
    { teamSheetLayoutId: '12', style: { top: '400px', left: '270px' } },
    { teamSheetLayoutId: '13', style: { top: '400px', left: '470px' } },
    { teamSheetLayoutId: '14', style: { top: '440px', left: '600px' } },
    { teamSheetLayoutId: '15', style: { top: '465px', left: '350px' } },
  ],
}

interface NonInteractiveFieldProps {
  players: Player[],
  teamSheet: TeamSheet,
}

const NonInteractiveField = (props: NonInteractiveFieldProps) => {
  const { players, teamSheet } = props

  const data = teamSheet.data as Partial<{ [key: string]: number }>

  return (
    <div style={{ display: 'flex' }}>
      <img
        height="630"
        src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/rugby_field.svg`}
        width="800"
      />

      <div style={{ display: 'flex', position: 'absolute' }}>
        {teamSheetLayoutData.field.map(({ style, teamSheetLayoutId }) => {
          const playerId = data ? data[teamSheetLayoutId] : null
          const player = players.find(player => player.id === playerId)

          return (
            <NonInteractivePlayerIcon
              key={teamSheetLayoutId}
              number={teamSheetLayoutId}
              player={player}
              style={style}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NonInteractiveField