'use client'

import { useState } from 'react'

import { Prisma } from '@prisma/client'

import TeamContext from '@contexts/teamContext'

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

interface TeamContentProps {
  children: React.ReactNode,
  players: PlayerWithIncludes[],
}

const TeamContent = (props: TeamContentProps) => {
  const { children, players } = props

  const [selectedPosition, setSelectedPosition] = useState('')
  const [showModal, setShowModal] = useState(false)

  const teamContextValue = {
    callbacks: {
      closeModal: () => setShowModal(false),
      openModal: () => setShowModal(true),
      setSelectedPosition,
    },
    showModal,
  }

  console.log(selectedPosition, 'selectedPosition')

  let filteredPlayerList = players
  if (selectedPosition === 'hooker' || selectedPosition === 'prop'){
    filteredPlayerList = players.filter(player => {
      const { playerPositions } = player
      return playerPositions.some(({ position }) => position.key === selectedPosition)
    })
  }
  console.log(filteredPlayerList)

  return (
    <TeamContext.Provider value={teamContextValue}>
      {children}
    </TeamContext.Provider>
  )
}

export default TeamContent