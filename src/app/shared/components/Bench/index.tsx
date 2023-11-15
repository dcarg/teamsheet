'use client'

import { useState } from 'react'

import { Prisma } from '@prisma/client'

import Seat from './Seat'

const benchData = [
  { key: 1, position: 'hooker' },
  { key: 2, position: 'prop' },
  { key: 3, position: 'prop' },
  { key: 4, position: '' },
  { key: 5, position: '' },
  { key: 6, position: '' },
  { key: 7, position: '' },
  { key: 8, position: '' },
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

  const [selectedPosition, setSelectedPosition] = useState('')

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
    </div>
  )
}

export default Bench