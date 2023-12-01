'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

interface PlayerCardProps {
  className: string,
  position: string,
  teamSheetLayoutId: number,
}

const PlayerCard = (props: PlayerCardProps) => {
  const { className, position, teamSheetLayoutId } = props

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      openModal,
      setSelectedPosition,
      setSelectedTeamSheetLayoutId,
    },
  } = teamContextValue

  return (
    <div className={className}>
      <div
        className="box-border h-15 md:h-20 w-15 md:w-20 border-2 hover:border-cyan-300"
        onClick={() => {
          setSelectedPosition(position)
          setSelectedTeamSheetLayoutId(teamSheetLayoutId)
          openModal()
        }}
      >
        {position}
      </div>
    </div>
  )
}

export default PlayerCard