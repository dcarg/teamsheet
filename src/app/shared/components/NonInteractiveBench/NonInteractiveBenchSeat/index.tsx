import type { Player } from '@prisma/client'

interface NonInteractiveBenchSeatProps {
  player?: Player,
}

const NonInteractiveBenchSeat = (props: NonInteractiveBenchSeatProps) => {
  const { player } = props

  if (!player) return null

  // #e5e7eb

  return (
    <div
      style={{
        borderBottom: '1px solid',
        borderLeft: '1px solid',
        padding: '16px',
        width: '600px'
      }}
    >
      {player?.lastname}
    </div>
  )
}

export default NonInteractiveBenchSeat