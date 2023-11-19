'use client'

import { useState } from 'react'

import { Prisma } from '@prisma/client'

import Seat from './Seat'

const benchData = [
  { key: 16, position: 'hooker' },
  { key: 17, position: 'prop' },
  { key: 18, position: 'prop' },
  { key: 19, position: '' },
  { key: 20, position: '' },
  { key: 21, position: '' },
  { key: 22, position: '' },
  { key: 23, position: '' },
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