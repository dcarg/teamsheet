interface SeatProps {
  position: string | null
}

const Seat = (props: SeatProps) => {
  const { position } = props

  return (
    <div className="border h-10">Blank Seat for {position}</div>
  )
}

export default Seat