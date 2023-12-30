import { Player } from '@prisma/client'

interface NonInteractivePlayerIcon {
  player?: Player,
  style: { [key: string]: string },
}

const NonInteractivePlayerIcon = (props: NonInteractivePlayerIcon) => {
  const { player, style } = props

  return (
    <div
      style={{
        alignItems: 'center',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        height: '80px',
        justifyContent: 'flex-end',
        width: '80px',
        ...style,
      }}
    >
      <img src="http://localhost:3000/wallaby_jersey.svg" width="35" />

      {player?.lastname}
    </div>
  )
}

export default NonInteractivePlayerIcon