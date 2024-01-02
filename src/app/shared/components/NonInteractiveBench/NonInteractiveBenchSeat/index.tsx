import type { PlayerWithPositions } from '@types'

interface NonInteractiveBenchSeatProps {
  number: string,
  player?: PlayerWithPositions,
}

const NonInteractiveBenchSeat = (props: NonInteractiveBenchSeatProps) => {
  const { number, player } = props
  const { playerPositions } = player || {}

  const playerPositionTitles = playerPositions?.map(playerPosition => playerPosition.position.title)

  if (!player) return null

  return (
    <div
      style={{
        borderBottom: '1px solid',
        borderLeft: '1px solid',
        borderColor: 'rgb(75 85 99)', // borderColor must come after borders, do not sort
        display: 'flex',
        padding: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <img src="http://localhost:3000/wallaby_jersey.svg" width="35" />

        <div style={{
          color: 'white',
          position: 'absolute',
          bottom: '14px',
          left: '8px',
          // fontSize: 16,
          // fontStyle: 'normal',
          // fontWeight: 'bold',
        }}>
          {number}
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '16px'
      }}>
          {player?.lastname}

        <div style={{ color: 'rgb(75 85 99)', fontSize: '14px' }}>
          {playerPositionTitles?.join( ', ')}
        </div>
      </div>
    </div>
  )
}

export default NonInteractiveBenchSeat