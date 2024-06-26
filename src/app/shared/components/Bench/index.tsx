'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import teamSheetLayoutData from '@functions/teamSheet'

import type { PlayerWithPositions } from '@types'

import BenchSeat from './BenchSeat'

interface BenchProps {
  nonInteractive?: boolean,
}

const Bench = (props: BenchProps) => {
  const { nonInteractive } = props

  const teamContextValue = useContext(TeamContext)
  const {
    teamSheet,
    team,
  } = teamContextValue

  const { key: teamKey } = team

  const data = teamSheet?.data as Partial<{ [key: string]: PlayerWithPositions }> | null

  const { bench, fantasyBench } = teamSheetLayoutData

  const benchData = teamKey == "fantasy" ? fantasyBench : bench

  return (
    <div className="m-auto mt-2 border">
      {benchData.map(({ positions, teamSheetLayoutId }) => {
        const player = data ? data[teamSheetLayoutId] : undefined

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