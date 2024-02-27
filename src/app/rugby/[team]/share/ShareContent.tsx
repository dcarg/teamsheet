'use client'

import { Team, TeamSheet } from '@prisma/client'

import TeamContext from '@contexts/teamContext'

import type { PlayerWithPositions } from '@types'

interface ShareContentProps {
  children: React.ReactNode,
  players: PlayerWithPositions[],
  team: Team,
  teamSheet: TeamSheet | null,
}

const ShareContent = (props: ShareContentProps) => {
  const { children, players, team, teamSheet } = props

  const teamContextValue = {
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