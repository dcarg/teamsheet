'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import teamSheetLayoutData from '@functions/teamSheet'

import BenchSeat from './BenchSeat'

const Bench = () => {
  const teamContextValue = useContext(TeamContext)
  const {
    players,
    teamSheet,
  } = teamContextValue

  const data = teamSheet?.data as Partial<{ [key: string]: number }> | null

  return (
    <>
      {teamSheetLayoutData.bench.map(({ position, teamSheetLayoutId }) => {
        const playerId = data ? data[teamSheetLayoutId] : null
        const player = players.find(player => player.id === playerId)

        return (
          <BenchSeat
            key={teamSheetLayoutId}
            player={player}
            position={position}
            teamSheetLayoutId={teamSheetLayoutId}
          />
        )
      })}
    </>
  )
}


export default Bench