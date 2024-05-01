'use client'

import { Competition, Team, TeamSheet } from '@prisma/client'

import TeamContext from '@contexts/teamContext'

import type { PlayerWithPositions } from '@types'

interface ShareContentProps {
  children: React.ReactNode,
  competition: Competition,
  players: PlayerWithPositions[],
  team: Team,
  teamSheet: TeamSheet | null,
}

const ShareContent = (props: ShareContentProps) => {
  const { children, competition, players, team, teamSheet } = props

  const teamContextValue = {
    competition,
    players,
    team,
    teamSheet,
  }

  return (
    <TeamContext.Provider value={teamContextValue}>
      {children}
    </TeamContext.Provider>
  )
}

export default ShareContent