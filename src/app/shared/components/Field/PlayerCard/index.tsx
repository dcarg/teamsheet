'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import type { PlayerWithPositions } from '@types'

interface PlayerCardProps {
  className: string,
  player?: PlayerWithPositions,
  position: string,
  teamSheetLayoutId: string,
}

const PlayerCard = (props: PlayerCardProps) => {
  const { className, player, position, teamSheetLayoutId } = props

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
        className="box-border cursor-pointer md:h-20 md:w-20 border-2 hover:border-cyan-300"
        onClick={() => {
          setSelectedPosition(position)
          setSelectedTeamSheetLayoutId(teamSheetLayoutId)
          openModal()
        }}
      >
        {player?.title || position}
      </div>
    </div>
  )
}

export default PlayerCard