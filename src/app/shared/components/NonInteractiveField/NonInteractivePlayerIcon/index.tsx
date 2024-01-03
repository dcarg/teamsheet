import { Player } from '@prisma/client'

interface NonInteractivePlayerIcon {
  number: string,
  player?: Player,
  style: { [key: string]: string },
}

const NonInteractivePlayerIcon = (props: NonInteractivePlayerIcon) => {
  const { number, player, style } = props

  if (!player) return null

  const playerTitle = `${player.firstname[0]}. ${player.lastname}`

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '80px',
        justifyContent: 'flex-end',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '80px',
        ...style,
      }}
    >
      <img src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/wallaby_jersey.svg`} width="35" />

      <div style={{
        bottom: '30px',
        color: 'white',
        fontFamily: 'Futura Bold',
        fontWeight: 'bold',
        position: 'relative',
      }}>
        {number}
      </div>

      <div style={{ fontFamily: 'Futura Bold', fontWeight: 'bold' }}>
        {playerTitle}
      </div>
    </div>
  )
}

export default NonInteractivePlayerIcon