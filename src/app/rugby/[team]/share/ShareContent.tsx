'use client'

import { TeamSheet } from '@prisma/client'

import TeamContext from '@contexts/teamContext'

import type { PlayerWithPositions } from '@types'

interface ShareContentProps {
  children: React.ReactNode,
  players: PlayerWithPositions[],
  teamSheet: TeamSheet | null,
}

const ShareContent = (props: ShareContentProps) => {
  const { children, players, teamSheet } = props

  const teamContextValue = {
    players,
    teamSheet,
  }

  return (
    <TeamContext.Provider value={teamContextValue}>
      {children}
    </TeamContext.Provider>
  )
}

export default ShareContent