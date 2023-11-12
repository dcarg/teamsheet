'use client'

import { useState } from 'react'

import { Prisma } from '@prisma/client'

import Seat from './Seat'

const benchData = [
  { key: 1, position: 'hooker' },
  { key: 2, position: 'prop' },
  { key: 3, position: 'prop' },
  { key: 4, position: null },
  { key: 5, position: null },
  { key: 6, position: null },
  { key: 7, position: null },
  { key: 8, position: null },
]

type PlayerWithIncludes = Prisma.PlayerGetPayload<
  {
    include: {
      playerPositions: {
        include: {
          position: true
        }
      }
    }
  }
>

interface BenchProps {
  players: PlayerWithIncludes[]
}

const Bench = (props: BenchProps) => {
  const { players } = props

  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)

  let filteredPlayerList = players
  if (selectedPosition === 'hooker' || selectedPosition === 'prop'){
    filteredPlayerList = players.filter(player => {
      const { playerPositions } = player
      return playerPositions.some(({ position }) => position.key === selectedPosition)
    })
  }

  return (
    <div>
      <div>Bench</div>

      <div>
        {benchData.map(({ key, position }) => (
          <Seat
            callbacks={{ setSelectedPosition }}
            key={key}
            position={position}
          />
        ))}
      </div>

      <ul>
        {filteredPlayerList.map(player =>(
          <li key={player.id}>{player.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Bench