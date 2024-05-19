import type { PlayerWithPositions } from '@types'

import RugbyJersey from '@components/RugbyJersey'

interface NonInteractiveBenchSeatProps {
  number: string,
  player?: PlayerWithPositions,
  primaryColor: string,
  secondaryColor: string,
}

const NonInteractiveBenchSeat = (props: NonInteractiveBenchSeatProps) => {
  const { number, player, primaryColor, secondaryColor } = props

  if (!player) return null

  const { playerPositions } = player || {}
  const playerPositionTitles = playerPositions?.map(playerPosition => playerPosition.position.title)

  const playerTitle = `${player.firstname}. ${player.lastname}`

  return (
    <div
      style={{
        borderBottom: '1px solid',
        borderLeft: '1px solid',
        borderRight: '1px solid',
        display: 'flex',
        padding: '4px',
        borderColor: 'rgb(75 85 99)', // borderColor must come after borders, do not sort
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <RugbyJersey primaryColor={primaryColor} secondaryColor={secondaryColor} />

        <div
          style={{
            bottom: '14px',
            color: 'white',
            fontFamily: 'Futura Bold',
            fontWeight: 'bold',
            left: '8px',
            position: 'absolute',
          }}
        >
          {number}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Futura Bold',
          fontWeight: 'bold',
          justifyContent: 'center',
          paddingLeft: '16px'
        }}
      >
        {playerTitle}

        <div
          style={{
            color: 'rgb(75 85 99)',
            fontFamily: 'Futura',
            fontSize: '14px',
            marginTop: 4,
          }}
        >
          {playerPositionTitles?.join( ', ')}
        </div>
      </div>
    </div>
  )
}

export default NonInteractiveBenchSeat