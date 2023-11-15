import type { PrismaClient, Sport } from '@prisma/client'

const seedTeams = (prisma: PrismaClient, sports: Sport[]) => {
  const rugbyId = sports.find(sport => sport.key === 'rugby')!.id

  const teams = [
    {
      key: 'wallabies',
      sportId: rugbyId,
      title: 'Wallabies',
    },
  ]

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