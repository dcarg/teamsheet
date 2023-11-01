import { PrismaClient } from '@prisma/client'

import seedSports from './seeds/sports'
import seedTeams from './seeds/teams'

const prisma = new PrismaClient()

// Each seeds returns the records created so they can be used in future seeds
const seed = async () => {
  const sports = await Promise.all(seedSports(prisma))
  console.log('Seeded sports')
  
  const teams = await Promise.all(seedTeams(prisma, sports))
  console.log('Seeded teams')
}

console.log('Seeding...')
seed()