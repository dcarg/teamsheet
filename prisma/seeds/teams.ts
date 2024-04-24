import type { Competition, PrismaClient } from '@prisma/client'

import getTeams from './rugby/teams'

const seedTeams = (prisma: PrismaClient, competitions: Competition[]) => {
  const teams = getTeams(competitions)

  const records = teams.map(async team => (
    await prisma.team.upsert({
      where: { key: team.key },
      create: team,
      update: {},
    })
  ))

  return records
}

export default seedTeams