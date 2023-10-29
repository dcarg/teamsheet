import seedSports from './sports.js'

const seed = async () => {
  await seedSports()
}

console.log('Seeding...')
seed()