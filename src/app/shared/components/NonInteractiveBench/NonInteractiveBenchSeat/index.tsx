import type { PlayerWithPositions } from '@types'

interface NonInteractiveBenchSeatProps {
  number: string,
  player?: PlayerWithPositions,
}

const NonInteractiveBenchSeat = (props: NonInteractiveBenchSeatProps) => {
  const { number, player } = props

  if (!player) return null

  const { playerPositions } = player || {}
  const playerPositionTitles = playerPositions?.map(playerPosition => playerPosition.position.title)

  const playerTitle = `${player.firstname[0]}. ${player.lastname}`

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
        <img src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/wallaby_jersey.svg`} width="35" />

        <div style={{
          bottom: '14px',
          color: 'white',
          fontFamily: 'Futura Bold',
          fontWeight: 'bold',
          left: '8px',
          position: 'absolute',
        }}>
          {number}
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Futura Bold',
        fontWeight: 'bold',
        justifyContent: 'center',
        paddingLeft: '16px'
      }}>
        {playerTitle}

        <div
          style={{
            color: 'rgb(75 85 99)',
            fontFamily: 'Futura',
            fontSize: '14px',
            marginTop: 4,
          }}>
          {playerPositionTitles?.join( ', ')}
        </div>
      </div>
    </div>
  )
}

export default NonInteractiveBenchSeat