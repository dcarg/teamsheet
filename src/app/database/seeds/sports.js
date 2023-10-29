import { sql } from '@vercel/postgres'

export const createSportsTable = async () => {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
      CREATE TABLE IF NOT EXISTS sports (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(255) NOT NULL UNIQUE,
        key VARCHAR(255) NOT NULL UNIQUE,
      );
    `
    console.log("Created sports table")
  } catch (error) {
    console.error('Error creating sports table:', error)
    throw error
  }
}

const sports = [
  {
    id: 1,
    title: 'Rugby',
    key: 'rugby',
  },
]

export const seedSports = async () => {
  try {
    await Promise.all(
      sports.map(async sport => (
        sql`
          INSERT INTO sports (id, title, key)
          VALUES (${sport.id}, ${sport.title}, ${sport.key})
          ON CONFLICT (id) DO NOTHING;
        `
      ))
    )
  } catch (error) {
    console.log('Error seeding sports', error)
    throw error
  }
}