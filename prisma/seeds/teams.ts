import { rugbyTeams } from './teams/sport/rugby'

import type { PrismaClient } from '@prisma/client'

const seedTeams = (prisma: PrismaClient) => {
  const teams = Object.values(rugbyTeams).map(competitionTeamsArray => {
    // [ { key: 'wallabies' } ]
    return competitionTeamsArray.map(ct => ct)
   
  })

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