import { PrismaClient } from '@prisma/client'

import seedCompetitions from './seeds/competitions'
import seedPlayers from './seeds/players'
import seedPositions from './seeds/positions'
import seedSports from './seeds/sports'
import seedTeams from './seeds/teams'

const prisma = new PrismaClient()

// Each seeds returns the records created so they can be used in future seeds
const seed = async () => {
  const sports = await Promise.all(seedSports(prisma))
  console.log('Seeded sports')

  const positions = await Promise.all(seedPositions(prisma, sports))
  console.log('Seeded positions')

  const competitions = await Promise.all(seedCompetitions(prisma, sports))
  console.log('Seeded competitions')

  const teams = await Promise.all(seedTeams(prisma, competitions))
  console.log('Seeded teams')

  const players = await Promise.all(seedPlayers(prisma, positions, teams))
  console.log('Seeded players')
}

console.log('Seeding...')
seed()
console.log('Seeding Complete.')