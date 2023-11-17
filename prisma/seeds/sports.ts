import type { PrismaClient } from '@prisma/client'

const seedSports = (prisma: PrismaClient) => {
  const sports = [
    {
      key: 'rugby',
      title: 'Rugby',
    },
    {
      key: 'football',
      title: 'Football',
    },
  ]

  const records = sports.map(async sport => (
    await prisma.sport.upsert({
      where: { key: sport.key },
      create: sport,
      update: {},
    })
  ))

  return records
}

export default seedSports