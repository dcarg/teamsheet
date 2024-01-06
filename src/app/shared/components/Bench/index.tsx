'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import teamSheetLayoutData from '@functions/teamSheet'

import BenchSeat from './BenchSeat'

interface BenchProps {
  nonInteractive?: boolean,
}

const Bench = (props: BenchProps) => {
  const { nonInteractive } = props

  const teamContextValue = useContext(TeamContext)
  const {
    players,
    teamSheet,
  } = teamContextValue

  const data = teamSheet?.data as Partial<{ [key: string]: number }> | null

  return (
    <div className="border-t">
      {teamSheetLayoutData.bench.map(({ positions, teamSheetLayoutId }) => {
        const playerId = data ? data[teamSheetLayoutId] : null
        const player = players.find(player => player.id === playerId)

        return (
          <BenchSeat
            key={teamSheetLayoutId}
            nonInteractive={nonInteractive}
            player={player}
            positions={positions}
            teamSheetLayoutId={teamSheetLayoutId}
          />
        )
      })}
    </div>
  )
}


export default Bench