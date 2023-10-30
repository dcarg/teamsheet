import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const sports = [
  {
    title: 'Rugby',
    key: 'rugby',
  },
]

const seedSports = async () => {
  sports.forEach(async sport => {
    const record = await prisma.sport.upsert({
      where: { key: sport.key },
      create: sport,
      update: sport,
    })

    return record
  })

  console.log('Sports seeded')
}

export default seedSports