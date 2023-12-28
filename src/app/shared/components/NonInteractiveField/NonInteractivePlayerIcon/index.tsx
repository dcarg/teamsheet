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
        border: '1px solid black',
        height: '100px',
        width: '100px',
        ...style,
      }}
    >
      {player?.lastname}
    </div>
  )
}

export default NonInteractivePlayerIcon