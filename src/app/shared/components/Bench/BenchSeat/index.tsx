'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import PlayerListItem from '@components/PlayerListItem'

import type { PlayerWithPositions } from '@types'

interface BenchSeatProps {
  nonInteractive?: boolean,
  player?: PlayerWithPositions,
  positions: string[],
  teamSheetLayoutId: string,
}

const BenchSeat = (props: BenchSeatProps) => {
  const { nonInteractive, player, positions, teamSheetLayoutId } = props

  const teamContextValue = useContext(TeamContext)
  const { callbacks, competition, team } = teamContextValue
  const {
    openModal,
    setSelectedPositions,
    setSelectedTeamSheetLayoutId,
  } = callbacks || {}

  return (
    <PlayerListItem
      competition={competition}
      nonInteractive={nonInteractive}
      onClick={nonInteractive ? undefined : () => {
        setSelectedPositions!(positions)
        setSelectedTeamSheetLayoutId!(teamSheetLayoutId)
        openModal!()
      }}
      player={player}
      team={team}
      teamSheetLayoutId={teamSheetLayoutId}
    />
  )
}

export default BenchSeat