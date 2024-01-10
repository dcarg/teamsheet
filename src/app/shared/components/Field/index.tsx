'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import teamSheetLayoutData from '@functions/teamSheet'

import PlayerCard from './PlayerCard'

interface FieldProps {
  nonInteractive?: boolean
}

const Field = (props: FieldProps) => {
  const { nonInteractive } = props

  const teamContextValue = useContext(TeamContext)
  const {
    players,
    teamSheet,
  } = teamContextValue

  const data = teamSheet?.data as Partial<{ [key: string]: number }> | null

  return (
    <div className="max-w-column min-h-[720px] bg-[url('/rugby_field.svg')] bg-no-repeat bg-cover bg-center bg-opacity-50 bg-origin-border aspect-auto">
      <div className="min-h-[720px] grid grid-cols-6 grid-rows-8 gap-2 px-12 place-items-center content-center m-auto">
        {teamSheetLayoutData.field.map(({ className, positions, positionTitle, teamSheetLayoutId }) => {
          const playerId = data ? data[teamSheetLayoutId] : null
          const player = players.find(player => player.id === playerId)

          return (
            <PlayerCard
              className={className}
              nonInteractive={nonInteractive}
              key={teamSheetLayoutId}
              player={player}
              positions={positions}
              positionTitle={positionTitle}
              teamSheetLayoutId={teamSheetLayoutId}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Field
