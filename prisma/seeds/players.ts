import { players } from './rugby/players'

import type { PrismaClient, Position, Team } from '@prisma/client'

const getTeamPlayers = (teamKey: keyof typeof players) => {
  return players[teamKey] || []
}

const getPlayerPosition = (positionKey: string, positions: Position[]): Position => {
  return positions.find(position => position.key === positionKey)!
}

const seedPlayers = (prisma: PrismaClient, positions: Position[], teams: Team[]) => {
  const playerRecords = teams.flatMap(team => {
    const { id: teamId, key: teamKey } = team
  
    const teamPlayersArray = getTeamPlayers(teamKey as keyof typeof players)

    return teamPlayersArray.map((teamPlayer) => {
      const {
        key,
        firstname,
        lastname,
        title,
        positions: positionsKeyArray,
      } = teamPlayer

      const playerPositionIds = positionsKeyArray.map((positionKey) => {
        const position = getPlayerPosition(positionKey, positions)
        const { id: positionId } = position
        
        return positionId
      })

      const playerPositionSeeds = playerPositionIds.map(id => {
        return { positionId: id }
      })

      return {
        key,
        firstname,
        lastname,
        title,
        teamMembers: {
          create: {
            teamId,
          }
        },
        playerPositions: {
          create: playerPositionSeeds,
        },
      }
    })
  })

  const records = playerRecords.map(async player => (
    await prisma.player.upsert({
      where: { key: player.key },
      create: player,
      update: player,
    })
  ))

  return records
}

export default seedPlayers