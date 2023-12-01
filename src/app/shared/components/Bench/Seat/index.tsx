'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

interface SeatProps {
  position: string,
  teamSheetLayoutId: number,
}

const Seat = (props: SeatProps) => {
  const { position, teamSheetLayoutId } = props

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      openModal,
      setSelectedPosition,
      setSelectedTeamSheetLayoutId,
    },
  } = teamContextValue

  return (
    <div
      className="border cursor-pointer h-10 hover:bg-cyan-50 hover:border-cyan-300"
      onClick={() => {
        setSelectedPosition(position)
        setSelectedTeamSheetLayoutId(teamSheetLayoutId)
        openModal()
      }}
    >
      Blank Seat for {position || 'any'}
    </div>
  )
}

export default Seat