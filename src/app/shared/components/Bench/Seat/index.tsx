'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

interface SeatProps {
  position: string,
}

const Seat = (props: SeatProps) => {
  const { position } = props

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      openModal,
      setSelectedPosition,
    },
  } = teamContextValue

  return (
    <div
      className="border cursor-pointer h-10 hover:bg-cyan-50 hover:border-cyan-300"
      onClick={() => {
        setSelectedPosition(position)
        openModal()
      }}
    >
      Blank Seat for {position}
    </div>
  )
}

export default Seat