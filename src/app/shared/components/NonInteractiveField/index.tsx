// NonInteractiveField is a version of Field with the interactivity removed
// This exists to be used as an open graph image

import type { Player, TeamSheet } from '@prisma/client'

import NonInteractivePlayerIcon from './NonInteractivePlayerIcon'

const teamSheetLayoutData = {
  field: [
    { teamSheetLayoutId: '1', style: { top: '20px', left: '20px' } }, // absolute positoning CSS properties
    { teamSheetLayoutId: '2', style: { top: '20px', left: '100px' } },
    // { teamSheetLayoutId: '3', position: 'prop', positionTitle: 'Prop', className: 'col-span-2' },
    // { teamSheetLayoutId: '4', position: 'lock', positionTitle: 'Lock', className: 'col-start-2 col-span-2' },
    // { teamSheetLayoutId: '5', position: 'lock', positionTitle: 'Lock', className: 'col-span-2' },
    // { teamSheetLayoutId: '6', position: 'backrow', positionTitle: 'Backrow', className: 'col-start-0 col-span-2' },
    // { teamSheetLayoutId: '7', position: 'backrow', positionTitle: 'Backrow', className: 'col-span-2' },
    // { teamSheetLayoutId: '8', position: 'backrow', positionTitle: 'Backrow', className: 'col-span-2' },
    // { teamSheetLayoutId: '9', position: 'scrumhalf', positionTitle: 'Scrumhalf', className: 'col-start-1 col-span-2' },
    // { teamSheetLayoutId: '10', position: 'flyhalf', positionTitle: 'Flyhalf', className: 'col-start-3 col-span-2' },
    // { teamSheetLayoutId: '12', position: 'centre', positionTitle: 'Centre', className: 'col-start-2 col-span-2' },
    // { teamSheetLayoutId: '13', position: 'centre', positionTitle: 'Centre', className: 'col-span-2' },
    // { teamSheetLayoutId: '11', position: 'outsideBack', positionTitle: 'Outside', className: 'col-start-1 col-span-2' },
    // { teamSheetLayoutId: '14', position: 'outsideBack', positionTitle: 'Outside', className: 'col-start-5 col-span-2' },
    // { teamSheetLayoutId: '15', position: 'outsideBack', positionTitle: 'Outside', className: 'col-start-3 col-span-2' },
  ]
}

interface NonInteractiveFieldProps {
  players: Player[],
  teamSheet: TeamSheet,
}

const NonInteractiveField = (props: NonInteractiveFieldProps) => {
  const { players, teamSheet } = props

  const data = teamSheet.data as Partial<{ [key: string]: number }>

  return (
    <div
      style={{
        backgroundImage: "url('http://localhost:3000/rugby_field.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        position: 'relative',
        height: 630,
        width: 600,
      }}
    >
      {/* Loop through teamSheetLayoutData.field and render the player at the right spot */}
      {teamSheetLayoutData.field.map(({ style, teamSheetLayoutId }) => {
        const playerId = data ? data[teamSheetLayoutId] : null
        const player = players.find(player => player.id === playerId)

        return <NonInteractivePlayerIcon key={teamSheetLayoutId} player={player} style={style} />
      })}
    </div>
  )
}

export default NonInteractiveField