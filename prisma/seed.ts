import { PrismaClient } from '@prisma/client'

import seedCompetitions from './seeds/competitions'
import seedCompetitionTeams from './seeds/competitionTeams'
import seedPlayers from './seeds/players'
import seedPositions from './seeds/positions'
import seedSports from './seeds/sports'
import seedTeams from './seeds/teams'

const prisma = new PrismaClient()

// Each seeds returns the records created so they can be used in future seeds
const seed = async () => {
  const sports = await Promise.all(seedSports(prisma))
  console.log('Seeded sports')

  const competitions = await Promise.all(seedCompetitions(prisma, sports))
  console.log('Seeded competitions')

  const positions = await Promise.all(seedPositions(prisma, sports))
  console.log('Seeded positions')

  const teams = await Promise.all(seedTeams(prisma))
  console.log('Seeded teams')

  const competitionTeams = await Promise.all(seedCompetitionTeams(prisma, competitions, teams))
  console.log('Seeded competition teams')

  const players = await Promise.all(seedPlayers(prisma, positions, teams))
  console.log('Seeded players')
}

console.log('Seeding...')
seed()