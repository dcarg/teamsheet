'use client'

import { useState } from 'react'

import { Player } from '@prisma/client'

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

interface BenchProps {
  players: Player[]
}

const Bench = (props: BenchProps) => {
  const { players } = props
  // the bench must be passed the list of players and positions
  // render a list of bench slots (list items)
  // the bench slot knows the position it must filter by, or any
  // hardcode the position for now, but this must be passed in for the Bench to be useable for multiple sports
  // when the bench slot is clicked, it opens a list of players for that position

  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)
  console.log(selectedPosition, 'selectedPosition')

  return (
    <div>
      <div>Bench</div>

      <div>
        {benchData.map(({ key, position }) => (
          <Seat
            key={key}
            position={position}
            // onClick={() => setSelectedPosition(position)}
          />
        ))}
      </div>

      {/* when there is a click which identifies which position to display a list of */}
      {/* show a  */}
    </div>
  )
}

export default Bench