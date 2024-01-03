import { Player } from '@prisma/client'

interface NonInteractivePlayerIcon {
  number: string,
  player?: Player,
  style: { [key: string]: string },
}

const NonInteractivePlayerIcon = (props: NonInteractivePlayerIcon) => {
  const { number, player, style } = props

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
        color: 'white',
        position: 'relative',
        bottom: '35px',
        // fontSize: 16,
        // fontStyle: 'normal',
        // fontWeight: 'bold',
      }}>
        {number}
      </div>

      {player?.lastname}
    </div>
  )
}

export default NonInteractivePlayerIcon