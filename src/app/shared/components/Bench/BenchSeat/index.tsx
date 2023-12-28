'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import PlayerListItem from '@components/PlayerListItem'

import type { PlayerWithPositions } from '@types'

interface BenchSeatProps {
  player?: PlayerWithPositions,
  positions: string[],
  teamSheetLayoutId: string,
}

const BenchSeat = (props: BenchSeatProps) => {
  const { player, positions, teamSheetLayoutId } = props

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      openModal,
      setSelectedPositions,
      setSelectedTeamSheetLayoutId,
    },
  } = teamContextValue

  return (
    <PlayerListItem
      onClick={() => {
        setSelectedPositions(positions)
        setSelectedTeamSheetLayoutId(teamSheetLayoutId)
        openModal()
      }}
      player={player}
      teamSheetLayoutId={teamSheetLayoutId}
    />
  )
}

export default BenchSeat