import type { PrismaClient, Sport } from '@prisma/client'

const seedTeams = (prisma: PrismaClient, sports: Sport[]) => {
  const rugbyId = sports.find(sport => sport.key === 'rugby')!.id

  const teams = [
    {
      key: 'australia',
      sportId: rugbyId,
      title: 'Wallabies',
    },
  ]

  const records = teams.map(async team => (
    await prisma.team.upsert({
      where: { 
        key_sportId: { key: team.key, sportId: rugbyId }
      },
      create: team,
      update: team,
    })
  ))

  return records
}

export default seedTeams