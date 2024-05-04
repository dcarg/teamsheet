'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import teamSheetLayoutData, { fantasyBench } from '@functions/teamSheet'

import type { PlayerWithPositions } from '@types'

import BenchSeat from './BenchSeat'

interface BenchProps {
  nonInteractive?: boolean,
  teamKey: string,
}

const Bench = (props: BenchProps) => {
  const { nonInteractive, teamKey } = props

  const teamContextValue = useContext(TeamContext)
  const {
    teamSheet,
  } = teamContextValue

  const data = teamSheet?.data as Partial<{ [key: string]: PlayerWithPositions }> | null

  const { bench } = teamSheetLayoutData

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