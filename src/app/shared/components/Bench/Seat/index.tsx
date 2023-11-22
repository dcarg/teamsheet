'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

interface SeatProps {
  position: string,
  teamsheetPlace: number,
}

const Seat = (props: SeatProps) => {
  const { position, teamsheetPlace } = props

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      openModal,
      setSelectedPosition,
      setSelectedTeamSheetPlace,
    },
  } = teamContextValue

  return (
    <div
      className="border cursor-pointer h-10 hover:bg-cyan-50 hover:border-cyan-300"
      onClick={() => {
        setSelectedPosition(position)
        setSelectedTeamSheetPlace(teamsheetPlace)
        openModal()
      }}
    >
      Blank Seat for {position || 'any'}
    </div>
  )
}

export default Seat