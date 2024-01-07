import type { Player, TeamSheet } from '@prisma/client'

import NonInteractivePlayerIcon from './NonInteractivePlayerIcon'

const teamSheetLayoutData = {
  field: [
    { teamSheetLayoutId: '1', style: { top: '120px', left: '140px' } },
    { teamSheetLayoutId: '2', style: { top: '120px', left: '300px' } },
    { teamSheetLayoutId: '3', style: { top: '120px', left: '480px' } },
    { teamSheetLayoutId: '4', style: { top: '190px', left: '210px' } },
    { teamSheetLayoutId: '5', style: { top: '190px', left: '390px' } },
    { teamSheetLayoutId: '6', style: { top: '250px', left: '140px' } },
    { teamSheetLayoutId: '8', style: { top: '280px', left: '300px' } },
    { teamSheetLayoutId: '7', style: { top: '250px', left: '480px' } },
    { teamSheetLayoutId: '9', style: { top: '350px', left: '180px' } },
    { teamSheetLayoutId: '10', style: { top: '380px', left: '300px' } },
    { teamSheetLayoutId: '11', style: { top: '520px', left: '100px' } },
    { teamSheetLayoutId: '12', style: { top: '450px', left: '210px' } },
    { teamSheetLayoutId: '13', style: { top: '450px', left: '390px' } },
    { teamSheetLayoutId: '14', style: { top: '520px', left: '510px' } },
    { teamSheetLayoutId: '15', style: { top: '560px', left: '300px' } },
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
        height="750"
        src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/rugby_field.svg`}
        width="700"
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