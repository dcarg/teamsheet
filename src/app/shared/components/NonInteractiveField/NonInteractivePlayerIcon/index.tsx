import { Player } from '@prisma/client'

import RugbyJersey from '@components/RugbyJersey'

interface NonInteractivePlayerIcon {
  number: string,
  player?: Player,
  primaryColor: string,
  secondaryColor: string,
  style: { [key: string]: string },
}

const NonInteractivePlayerIcon = (props: NonInteractivePlayerIcon) => {
  const { number, player, primaryColor, secondaryColor, style } = props

  if (!player) return null

  const playerTitle = `${player.firstname[0]}. ${player.lastname}`

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '60px',
        justifyContent: 'flex-end',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '80px',
        ...style,
      }}
    >
      <RugbyJersey primaryColor={primaryColor} secondaryColor={secondaryColor} />

      <div
        style={{
          bottom: '30px',
          color: 'white',
          fontFamily: 'Futura Bold',
          fontWeight: 'bold',
          position: 'relative',
        }}
      >
        {number}
      </div>

      <div style={{ fontFamily: 'Futura Bold', fontWeight: 'bold' }}>
        {playerTitle}
      </div>
    </div>
  )
}

export default NonInteractivePlayerIcon