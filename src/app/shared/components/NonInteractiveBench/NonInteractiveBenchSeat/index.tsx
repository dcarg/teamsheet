import type { PlayerWithPositions } from '@types'

interface NonInteractiveBenchSeatProps {
  player?: PlayerWithPositions,
}

const NonInteractiveBenchSeat = (props: NonInteractiveBenchSeatProps) => {
  const { player } = props
  const { playerPositions } = player || {}

  const playerPositionTitles = playerPositions?.map(playerPosition => playerPosition.position.title)

  if (!player) return null

  // #e5e7eb

  return (
    <div
      style={{
        borderBottom: '1px solid',
        borderLeft: '1px solid',
        display: 'flex',
        padding: '8px',
        width: '600px'
      }}
    >
      <img src="http://localhost:3000/wallaby_jersey.svg" width="35" />

      <div style={{
        alignItems:'center',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '16px'
      }}>
        <div>
          {player?.lastname}
        </div>

        <div style={{ color: 'rgb(75 85 99)', fontSize: '14px', textAlign: 'left' }}>
          {playerPositionTitles?.join( ', ')}
        </div>
      </div>
    </div>
  )
}

export default NonInteractiveBenchSeat