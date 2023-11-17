import type { Dispatch, SetStateAction } from "react"

interface SeatProps {
  callbacks: {
    setSelectedPosition: Dispatch<SetStateAction<string>>
  },
  position: string,
}

const Seat = (props: SeatProps) => {
  const {
    callbacks: {
      setSelectedPosition,
    },
    position,
  } = props

  return (
    <div
      className="border h-10"
      onClick={() => setSelectedPosition(position)}
    >
      Blank Seat for {position}
    </div>
  )
}

export default Seat