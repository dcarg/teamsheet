'use client'

import { useContext } from 'react'

import Image from 'next/image'

import TeamContext from '@contexts/teamContext'

import teamSheetLayoutData from '@functions/teamSheet'

import PlayerCard from './PlayerCard'

const Field = () => {
  const teamContextValue = useContext(TeamContext)
  const {
    players,
    teamSheet,
  } = teamContextValue

  const data = teamSheet?.data as Partial<{ [key: string]: number }> | null

  return (
    <div className="max-w-column w-full min-h-fit">
      <div className="absolute max-w-column w-full z-[-1]">
        <Image
          src="/rugby_field.svg"
          alt="Rugby Field"
          priority
          height={0}
          width={0}
          style={{
            height: 'auto',
            opacity: 0.5,
            width: '100%',
          }}
        />
      </div>

      <div
        className="grid grid-cols-10 grid-rows-8 gap-4 justify-items-center content-center"
        style={{
          height: '100%',
          paddingBottom: '40%',
          paddingTop: '40%',
          width: '100%',
        }}
      >
        {teamSheetLayoutData.field.map(({ className, position, teamSheetLayoutId }) => {
          const playerId = data ? data[teamSheetLayoutId] : null
          const player = players.find(player => player.id === playerId)

          return (
            <PlayerCard
              className={className}
              key={teamSheetLayoutId}
              player={player}
              position={position}
              teamSheetLayoutId={teamSheetLayoutId}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Field
