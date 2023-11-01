import type { PrismaClient, Sport } from '@prisma/client'

const seedTeams = (prisma: PrismaClient, sports: Sport[]) => {
  const teams = [
    {
      key: 'australia',
      sportId: sports.find(sport => sport.key === 'rugby')!.id,
      title: 'Wallabies',
    },
  ]

  const records = teams.map(async team => (
    await prisma.team.upsert({
      where: { key: team.key },
      create: team,
      update: team,
    })
  ))

  return records
}

export default seedTeams