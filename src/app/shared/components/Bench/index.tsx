'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import Seat from './Seat'

const benchData = [
  { teamSheetLayoutId: '16', position: 'hooker' },
  { teamSheetLayoutId: '17', position: 'prop' },
  { teamSheetLayoutId: '18', position: 'prop' },
  { teamSheetLayoutId: '19', position: '' },
  { teamSheetLayoutId: '20', position: '' },
  { teamSheetLayoutId: '21', position: '' },
  { teamSheetLayoutId: '22', position: '' },
  { teamSheetLayoutId: '23', position: '' },
]

const Bench = () => {
  const teamContextValue = useContext(TeamContext)
  const {
    players,
    teamSheet,
  } = teamContextValue

  const data = teamSheet?.data as Partial<{ [key: string]: number }>

  return (
    <div>
      <div>Bench</div>

      <div>
        {benchData.map(({ position, teamSheetLayoutId }) => {
          const playerId = data[teamSheetLayoutId]
          const player = players.find(player => player.id === playerId)

          return (
            <Seat
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


export default Bench