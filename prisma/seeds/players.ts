import { players } from './rugby/players'

import type { PrismaClient, Position, Team } from '@prisma/client'

const getTeamPlayers = (teamKey: keyof typeof players) => {
  return players[teamKey] || []
}

const getPlayerPosition = (positionKey: string, positions: Position[]): Position => {
  return positions.find(position => position.key === positionKey)!
}

const getPlayerTeam = (teamKey: string, teams: Team[]): Team => {
  return teams.find(team => team.key === teamKey)!
}

const seedPlayers = (prisma: PrismaClient, positions: Position[], teams: Team[]) => {
  const playerRecords = teams.flatMap(team => {
    const { key: teamKey } = team
  
    const teamPlayersArray = getTeamPlayers(teamKey as keyof typeof players)

    return teamPlayersArray.map((teamPlayer) => {
      const {
        key,
        firstname,
        lastname,
        title,
        positions: positionKeysArray,
        teams: teamKeysArray,
      } = teamPlayer

      const playerPositionIds = positionKeysArray.map((positionKey) => {
        const position = getPlayerPosition(positionKey, positions)
        const { id: positionId } = position
        
        return positionId
      })

      const playerPositionSeeds = playerPositionIds.map(id => {
        return { positionId: id }
      })

      const playerTeamIds = teamKeysArray.map((teamKey) => {
        const team = getPlayerTeam(teamKey, teams)
        const { id: teamId } = team
        
        return teamId
      })

      const playerTeamSeeds = playerTeamIds.map(id => {
        return { teamId: id }
      })

      return {
        key,
        firstname,
        lastname,
        title,
        teamMembers: {
          create: playerTeamSeeds,
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
      update: {},
    })
  ))

  return records
}

export default seedPlayers