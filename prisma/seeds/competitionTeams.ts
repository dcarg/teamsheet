import type { Competition, PrismaClient, Team } from '@prisma/client'

const seedCompetitionTeams = (prisma: PrismaClient, competitions: Competition[], teams: Team[]) => {
  const rugbyId = sports.find(sport => sport.key === 'rugby')!.id

  const competitionTeams = []

  const records = competitionTeams.map(async competitionTeam => (
    await prisma.competitionTeam.upsert({
      where: { key: competitionTeam.key },
      create: competitionTeam,
      update: {},
    })
  ))

  return records
}

export default seedCompetitionTeams