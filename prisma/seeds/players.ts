import type { PrismaClient, Sport, Team } from '@prisma/client'

const seedPlayers = (prisma: PrismaClient, sports: Sport[], teams: Team[]) => {
  const sportId = sports.find(sport => sport.key === 'rugby')!.id // rugby
  const teamId = teams.find(team => (team.key === 'australia') && (team.sportId === sportId))!.id // wallabies

  const players = [
    {
      key: 'michaelHooper',
      title: 'Michael Hooper',
      firstname: 'Michael',
      lastname: 'Hooper',
      teamMembers: {
        create: {
          teamId,
        }
      },
    },
    {
      key: 'tanielaTupou',
      title: 'Taniela Tupou',
      firstname: 'Taniela',
      lastname: 'Tupou',
      teamMembers: {
        create: {
          teamId,
        }
      }
    },
    {
      key: 'angusBell',
      title: 'Angus Bell',
      firstname: 'Angus',
      lastname: 'Bell',
      teamMembers: {
        create: {
          teamId,
        }
      }
    },
    {
      key: 'jamesSlipper',
      title: 'James Slipper',
      firstname: 'James',
      lastname: 'Slipper',
      teamMembers: {
        create: {
          teamId,
        }
      }
    },
    {
      key: 'davidPorecki',
      title: 'David Porecki',
      firstname: 'David',
      lastname: 'Porecki',
      teamMembers: {
        create: {
          teamId,
        }
      }
    },
  ]

  const records = players.map(async player => (
    await prisma.player.upsert({
      where: { key: player.key },
      create: player,
      update: player,
    })
  ))

  return records
}

export default seedPlayers