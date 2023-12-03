'use client'

import { useState } from 'react'

import { Prisma, Team, TeamSheet } from '@prisma/client'

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
  team: Team,
  teamSheet: TeamSheet | null,
}

const TeamContent = (props: TeamContentProps) => {
  const { children, players, team, teamSheet } = props

  const [selectedPosition, setSelectedPosition] = useState('')
  const [selectedTeamSheetLayoutId, setSelectedTeamSheetLayoutId] = useState<string>()
  const [showModal, setShowModal] = useState(false)

  const filteredPlayers = filterPlayers({ players, selectedPosition })

  const teamContextValue = {
    callbacks: {
      closeModal: () => setShowModal(false),
      openModal: () => setShowModal(true),
      setSelectedPosition,
      setSelectedTeamSheetLayoutId,
    },
    filteredPlayers,
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