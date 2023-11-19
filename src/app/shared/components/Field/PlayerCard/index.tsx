import type { Dispatch, SetStateAction } from "react"

interface PlayerCardProps {
  callbacks: {
    setSelectedPosition: Dispatch<SetStateAction<string>>
  },
  className: string,
  position: string,
}

const PlayerCard = (props: PlayerCardProps) => {
  const {
    callbacks: {
      setSelectedPosition,
    },
    className,
    position,
  } = props

  return (
    <div className={className}>
      <div
        className="box-border h-32 w-32 border-2"
        onClick={() => setSelectedPosition(position)}
      >
        PlayerCard for {position}
      </div>
    </div>
  )
}

export default PlayerCard