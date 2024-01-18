import type { PrismaClient, Sport } from '@prisma/client'

const seedCompetitions = (prisma: PrismaClient, sports: Sport[]) => {
  const rugbyId = sports.find(sport => sport.key === 'rugby')!.id

  const competitions = [
    {
      key: 'international',
      sportId: rugbyId,
      title: 'International',
    },
    {
      key: 'superRugby',
      sportId: rugbyId,
      title: 'Super Rugby',
    },
    {
      key: 'rugbyChampionship',
      sportId: rugbyId,
      title: 'The Rugby Championship',
    },
  ]

  const records = competitions.map(async competition => (
    await prisma.competition.upsert({
      where: { key: competition.key },
      create: competition,
      update: {},
    })
  ))

  return records
}

export default seedCompetitions