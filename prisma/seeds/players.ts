import type { PrismaClient, Position, Team } from '@prisma/client'

import getPlayers from './rugby/players'

const seedPlayers = (prisma: PrismaClient, positions: Position[], teams: Team[]) => {
  const players = getPlayers(positions, teams)

  const records = players.map(async player => (
    await prisma.player.upsert({
      where: { key: player.key },
      create: player,
      update: {},
    })
  ))

  return records
}

export default seedPlayers