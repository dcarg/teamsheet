import { players } from './rugby/players'

import type { PrismaClient, Position, Team } from '@prisma/client'

const getTeamPlayers = (teamKey: keyof typeof players) => {
  return players[teamKey] || []
}

const getPlayerPosition = (positionKey: keyof typeof players, positions: Position[]) => {
  return positions[positionKey] || {}
}

const seedPlayers = (prisma: PrismaClient, positions: Position[], teams: Team[]) => {
  const players = teams.map(team => {
    const { id: teamId, key: teamKey } = team
  
    const teamPlayersArray = getTeamPlayers(teamKey as keyof typeof players)

    return teamPlayersArray.map((teamPlayer) => {
      const { position: positionKey } = teamPlayer

      // Need to update this to map through player.positions array and get all positions
      const position = getPlayerPosition(positionKey as keyof typeof positions, positions)
      const { id: positionId } = position

      return {
        ...teamPlayer,
        teamMembers: {
          create: {
            teamId,
          }
        },
        playerPositions: {
          create: {
            positionId,
          }
        },
      }
    })
  })

  const records = players.map(async player => (
    await prisma.player.upsert({
      where: { key: player.key },
      create: player,
      update: {},
    })
  ))

  return records
}

export default seedPlayers