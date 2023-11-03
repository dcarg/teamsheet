import type { PrismaClient } from '@prisma/client'

const seedSports = (prisma: PrismaClient) => {
  const sports = [
    {
      key: 'rugby',
      title: 'Rugby',
    },
  ]

  const records = sports.map(async sport => (
    await prisma.sport.upsert({
      where: { key: sport.key },
      create: sport,
      update: sport,
    })
  ))

  return records
}

export default seedSports