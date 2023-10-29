import { createSportsTable, seedSports } from './sports.js'

const seed = async () => {
  await createSportsTable()
  await seedSports()
}

console.log('Seeding...')
seed()