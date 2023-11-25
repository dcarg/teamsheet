'use client'

import { useState } from 'react'

import { Prisma, Team, TeamSheet } from '@prisma/client'

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
  teamSheet: TeamSheet | null,
}

const TeamContent = (props: TeamContentProps) => {
  const { children, players, team, teamSheet } = props

  const [selectedPosition, setSelectedPosition] = useState('')
  const [selectedTeamSheetLayoutId, setSelectedTeamSheetLayoutId] = useState<string>()
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
      setSelectedTeamSheetLayoutId,
    },
    filteredPlayerList,
    players,
    selectedTeamSheetLayoutId,
    showModal,
    team,
    teamSheet,
  }

  return (
    <TeamContext.Provider value={teamContextValue}>
      {children}
    </TeamContext.Provider>
  )
}

export default TeamContent