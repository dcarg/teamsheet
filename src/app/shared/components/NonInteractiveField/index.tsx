import type { Player, TeamSheet } from '@prisma/client'

import NonInteractivePlayerIcon from './NonInteractivePlayerIcon'

const teamSheetLayoutData = {
  field: [
    { teamSheetLayoutId: '1', style: { top: '70px', left: '140px' } },
    { teamSheetLayoutId: '2', style: { top: '70px', left: '360px' } },
    { teamSheetLayoutId: '3', style: { top: '70px', left: '580px' } },
    { teamSheetLayoutId: '4', style: { top: '150px', left: '250px' } },
    { teamSheetLayoutId: '5', style: { top: '150px', left: '470px' } },
    { teamSheetLayoutId: '6', style: { top: '230px', left: '140px' } },
    { teamSheetLayoutId: '7', style: { top: '230px', left: '360px' } },
    { teamSheetLayoutId: '8', style: { top: '230px', left: '580px' } },
    { teamSheetLayoutId: '9', style: { top: '330px', left: '140px' } },
    { teamSheetLayoutId: '10', style: { top: '330px', left: '360px' } },
    { teamSheetLayoutId: '11', style: { top: '430px', left: '140px' } },
    { teamSheetLayoutId: '12', style: { top: '390px', left: '250px' } },
    { teamSheetLayoutId: '13', style: { top: '390px', left: '470px' } },
    { teamSheetLayoutId: '14', style: { top: '440px', left: '580px' } },
    { teamSheetLayoutId: '15', style: { top: '490px', left: '360px' } },
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