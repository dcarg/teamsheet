'use client'

import { useState } from 'react'

import { Prisma, Team } from '@prisma/client'

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
  team: Team,
}

const TeamContent = (props: TeamContentProps) => {
  const { children, players, team } = props

  const [selectedPosition, setSelectedPosition] = useState('')
  const [selectedTeamSheetPlace, setSelectedTeamSheetPlace] = useState<number>()
  const [showModal, setShowModal] = useState(false)

  let filteredPlayerList = players
  if (selectedPosition === 'hooker' || selectedPosition === 'prop'){
    filteredPlayerList = players.filter(player => {
      const { playerPositions } = player
      return playerPositions.some(({ position }) => position.key === selectedPosition)
    })
  }

  const teamContextValue = {
    callbacks: {
      closeModal: () => setShowModal(false),
      openModal: () => setShowModal(true),
      setSelectedPosition,
      setSelectedTeamSheetPlace,
    },
    filteredPlayerList,
    selectedTeamSheetPlace,
    showModal,
    team,
  }

  return (
    <TeamContext.Provider value={teamContextValue}>
      {children}
    </TeamContext.Provider>
  )
}

export default TeamContent