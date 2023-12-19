'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import PlayerListItem from '@components/PlayerListItem'

import type { PlayerWithPositions } from '@types'

interface BenchSeatProps {
  player?: PlayerWithPositions,
  position: string,
  teamSheetLayoutId: string,
}

const BenchSeat = (props: BenchSeatProps) => {
  const { player, position, teamSheetLayoutId } = props

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      openModal,
      setSelectedPosition,
      setSelectedTeamSheetLayoutId,
    },
  } = teamContextValue

  return (
    <PlayerListItem
      onClick={() => {
        setSelectedPosition(position)
        setSelectedTeamSheetLayoutId(teamSheetLayoutId)
        openModal()
      }}
      player={player}
      teamSheetLayoutId={teamSheetLayoutId}
    />
  )
}

export default BenchSeat