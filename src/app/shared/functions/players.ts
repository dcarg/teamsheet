import type { Team } from '@prisma/client'

import prisma from '@db/prismaSingleton'

import type { PlayerWithPositions } from '@types'

export const getPlayerTitle = (player: PlayerWithPositions) => {
  if (!player.id) return ''

  const { firstname, lastname } = player

  const firstNameInitial = firstname[0].toUpperCase()

  return `${firstNameInitial}. ${lastname}`
}

type FilterPlayersParams = {
  players: PlayerWithPositions[],
  selectedPositions: string[],
}

export const filterPlayers = (params: FilterPlayersParams) => {
  const { players, selectedPositions } = params || {}

  let filteredPlayerList = players

  if (!selectedPositions.length) return filteredPlayerList

  filteredPlayerList = players.filter(player => {
    const { playerPositions } = player

    return playerPositions.some(({ position }) => selectedPositions.includes(position.key))
  })

  return filteredPlayerList
}

type SortSelectedPlayersParams = {
  filteredPlayers: PlayerWithPositions[],
  selectedPlayerIds: number[],
}

export const sortSelectedPlayers = (params: SortSelectedPlayersParams) => {
  const { filteredPlayers, selectedPlayerIds } = params || {}

  const selectedPlayers = filteredPlayers.filter(player => selectedPlayerIds.includes(player.id))
  const unselectedPlayers = filteredPlayers.filter(player => !selectedPlayerIds.includes(player.id))

  // Display Selected Players first in results
  const sortedPlayers = [...selectedPlayers, ...unselectedPlayers]

  return sortedPlayers
}

export const getPlayers = async (competitionId: number, teamKey: string) => {
  if (!competitionId || !teamKey) return []

  if (teamKey === "fantasy"){
    return await prisma.player.findMany({
      where: {
        teamMembers: {
          some: {
            team: {
              competitionTeams: {
                some: {
                  competitionId,
                },
              },
            },
          },
        },
      },
      include: {
        playerPositions: {
          include: {
            position: true,
          },
        },
        teamMembers: {
          include: {
            team: {
              include: {
                competitionTeams: true,
              },
            },
          },
        },
      },
      orderBy: { firstname: 'asc' },
    })
  }

  return await prisma.player.findMany({
    where: {
      teamMembers: {
        some: {
          team: {
            key: teamKey,
          },
        },
      },
    },
    include: {
      playerPositions: {
        include: {
          position: true,
        },
      },
    },
    orderBy: { firstname: 'asc' },
  })
}

export const findPlayerTeamForCompetition = (competitionId: number, player?: PlayerWithPositions): Team | null => {
  if (!player) return null

  const { teamMembers } = player
  const teams = teamMembers.map(teamMember => teamMember.team)

  const competitionTeams = teams.flatMap(team => team.competitionTeams)

  let teamId = null
  for (const competitionTeam of competitionTeams) {
    if (competitionTeam.competitionId === competitionId) {
      teamId = competitionTeam.teamId
      break
    }
  }

  return teams.find(team => team.id === teamId)!
}