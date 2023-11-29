'use client'

import { useState } from 'react'

import { Prisma, Team } from '@prisma/client'

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
}

const TeamContent = (props: TeamContentProps) => {
  const { children, players, team } = props

  const [selectedPosition, setSelectedPosition] = useState('')
  const [selectedTeamSheetLayoutId, setSelectedTeamSheetLayoutId] = useState<number>()
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
    selectedTeamSheetLayoutId,
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