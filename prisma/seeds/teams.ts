import { competitionTeams } from './rugby/teams'

import type { Competition, PrismaClient } from '@prisma/client'

const getCompetitionTeamsArray = (competitionKey: keyof typeof competitionTeams) => {
  return competitionTeams[competitionKey] || []
}

const seedTeams = (prisma: PrismaClient, competitions: Competition[]) => {
  const teams = competitions.flatMap(competition => {
    const { id: competitionId, key: competitionKey } = competition

    const competitionTeamsArray = getCompetitionTeamsArray(competitionKey as keyof typeof competitionTeams)

    return competitionTeamsArray.map((competitionTeam) => {
      return {
        ...competitionTeam,
        competitionTeams: {
          create: [
            { competitionId }
          ]
        }
      }
    })
  })

  const records = teams.map(async team => (
    await prisma.team.upsert({
      where: { key: team.key },
      create: team,
      update: {},
    })
  ))

  return records
}

export default seedTeams