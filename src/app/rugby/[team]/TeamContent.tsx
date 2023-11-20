'use client'

import { useState } from 'react'

import { Prisma } from '@prisma/client'

import TeamContext from '@contexts/teamContext'

import { filterPlayers } from '@functions/players'

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

const filteredPlayers = filterPlayers({ players, selectedPosition })
  
  const teamContextValue = {
    callbacks: {
      closeModal: () => setShowModal(false),
      openModal: () => setShowModal(true),
      setSelectedPosition,
    },
    filteredPlayers,
    showModal,
  }

  return (
    <TeamContext.Provider value={teamContextValue}>
      {children}
    </TeamContext.Provider>
  )
}

export default TeamContent