'use client'

import { useState } from 'react'

import { Competition, Team, TeamSheet } from '@prisma/client'

import TeamContext from '@contexts/teamContext'

import { filterPlayers } from '@functions/players'

import type { PlayerWithPositions } from '@types'

interface TeamContentProps {
  children: React.ReactNode,
  competition: Competition,
  players: PlayerWithPositions[],
  team: Team,
  teamSheet: TeamSheet | null,
}

const TeamContent = (props: TeamContentProps) => {
  const { children, competition, players, team, teamSheet } = props

  const [selectedPositions, setSelectedPositions] = useState<string[]>([])
  const [selectedTeamSheetLayoutId, setSelectedTeamSheetLayoutId] = useState<string>()
  const [showModal, setShowModal] = useState(false)

  const filteredPlayers = filterPlayers({ players, selectedPositions })

  const teamContextValue = {
    callbacks: {
      closeModal: () => setShowModal(false),
      openModal: () => setShowModal(true),
      setSelectedPositions,
      setSelectedTeamSheetLayoutId,
    },
    competition,
    filteredPlayers,
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