import { competitionTeams } from './teams/rugby'

import type { Competition, PrismaClient } from '@prisma/client'

import type { CompetitionTeamModel } from './teams/rugby'

const getCompetitionTeamsArray = (competitionKey: string) => {
  return competitionTeams[competitionKey as keyof typeof competitionTeams] || []
}

const seedTeams = (prisma: PrismaClient, competitions: Competition[]) => {

  const teams = competitions.map(competition => {
    const { id: competitionId, key: competitionKey } = competition
    console.log('competitionKey', competitionKey)

    const competitionTeamsArray = getCompetitionTeamsArray(competitionKey)
    console.log('competitionTeamsArray', competitionTeamsArray)

    return competitionTeamsArray.map((competitionTeam: CompetitionTeamModel) => {
      console.log('competitionTeam', competitionTeam)
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
  console.log('teams', teams)

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