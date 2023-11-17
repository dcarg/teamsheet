import type { PrismaClient, Position, Team } from '@prisma/client'

const seedPlayers = (prisma: PrismaClient, positions: Position[], teams: Team[]) => {
  const teamId = teams.find(team => team.key === 'wallabies')!.id

  // rugby positon ids for initial seeds
  const propId = positions.find(p => p.key === 'prop')!.id
  const hookerId = positions.find(p => p.key === 'hooker')!.id
  const lockId = positions.find(p => p.key === 'lock')!.id
  const backRowId = positions.find(p => p.key === 'backrow')!.id
  const scrumhalfId = positions.find(p => p.key === 'scrumhalf')!.id
  const flyhalfId = positions.find(p => p.key === 'flyhalf')!.id
  const centreId = positions.find(p => p.key === 'centre')!.id
  const outsideBackId = positions.find(p => p.key === 'outsideBack')!.id

  const players = [
    {
      key: 'andrewKellaway',
      title: 'Andrew Kellaway',
      firstname: 'Andrew',
      lastname: 'Kellaway',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: [
          { positionId: centreId },
          { positionId: outsideBackId },
        ],
      },
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
      },
      playerPositions: {
        create: {
          positionId: propId,
        }
      },
    },
    {
      key: 'benDonaldson',
      title: 'Ben Donaldson',
      firstname: 'Ben',
      lastname: 'Donaldson',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
          { positionId: outsideBackId },
        ]
      },
    },
    {
      key: 'blakeSchoupp',
      title: 'Blake Schoupp',
      firstname: 'Blake',
      lastname: 'Schoupp',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: propId,
        }
      },
    },
    {
      key: 'carterGordon',
      title: 'Carter Gordon',
      firstname: 'Carter',
      lastname: 'Gordon',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: flyhalfId,
        }
      },
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
      },
      playerPositions: {
        create: {
          positionId: hookerId,
        }
      },
    },
    {
      key: 'fraserMcreight',
      title: 'Fraser McReight',
      firstname: 'Fraser',
      lastname: 'McReight',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: backRowId,
        }
      },
    },
    {
      key: 'issakFinesLeleiwasa',
      title: 'Issak Fines-Leleiwasa',
      firstname: 'Issak',
      lastname: 'Fines-Leleiwasa',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: scrumhalfId,
        }
      },
    },
    {
      key: 'izaiaPerese',
      title: 'Izaia Perese',
      firstname: 'Izaia',
      lastname: 'Perese',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: [
          { positionId: centreId },
          { positionId: outsideBackId },
        ]
      },
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
      },
      playerPositions: {
        create: {
          positionId: propId,
        }
      },
    },
    {
      key: 'jordanPetaia',
      title: 'Jordan Petaia',
      firstname: 'Jordan',
      lastname: 'Petaia',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: [
          { positionId: centreId },
          { positionId: outsideBackId },
        ]
      },
    },
    {
      key: 'jordanUelese',
      title: 'Jordan Uelese',
      firstname: 'Jordan',
      lastname: 'Uelese',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: hookerId,
        }
      },
    },
    {
      key: 'joshKemeny',
      title: 'Josh Kemeny',
      firstname: 'Josh',
      lastname: 'Kemeny',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: backRowId,
        }
      },
    },
    {
      key: 'lalakaiFoketi',
      title: 'Lalakai Foketi',
      firstname: 'Lalakai',
      lastname: 'Foketi',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: centreId,
        }
      },
    },
    {
      key: 'langiGleeson',
      title: 'Langi Gleeson',
      firstname: 'Langi',
      lastname: 'Gleeson',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: backRowId,
        }
      },
    },
    {
      key: 'marikaKoroibete',
      title: 'Marika Koroibete',
      firstname: 'Marika',
      lastname: 'Koroibete',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: outsideBackId,
        }
      },
    },
    {
      key: 'markNawaqanitawase',
      title: 'Mark Nawaqanitawase',
      firstname: 'Mark',
      lastname: 'Nawaqanitawase',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: outsideBackId,
        }
      },
    },
    {
      key: 'mattFaessler',
      title: 'Matt Faessler',
      firstname: 'Matt',
      lastname: 'Faessler',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: hookerId,
        }
      },
    },
    {
      key: 'mattPhilip',
      title: 'Matt Philip',
      firstname: 'Matt',
      lastname: 'Philip',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: lockId,
        }
      },
    },
    {
      key: 'maxJorgensen',
      title: 'Max Jorgensen',
      firstname: 'Max',
      lastname: 'Jorgensen',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: outsideBackId,
        }
      },
    },
    {
      key: 'nicWhite',
      title: 'Nic White',
      firstname: 'Nic',
      lastname: 'White',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: scrumhalfId,
        }
      },
    },
    {
      key: 'nickFrost',
      title: 'Nick Frost',
      firstname: 'Nick',
      lastname: 'Frost',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: lockId,
        }
      },
    },
    {
      key: 'poneFaamausili',
      title: "Pone Fa'amausili",
      firstname: 'Pone',
      lastname: "Fa'amausili",
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: propId,
        }
      },
    },
    {
      key: 'richieArnold',
      title: 'Richie Arnold',
      firstname: 'Richie',
      lastname: 'Arnold',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: lockId,
        }
      },
    },
    {
      key: 'robLeota',
      title: 'Rob Leota',
      firstname: 'Rob',
      lastname: 'Leota',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: [
          { positionId: lockId },
          { positionId: backRowId },
        ]
      },
    },
    {
      key: 'robValetini',
      title: 'Rob Valetini',
      firstname: 'Rob',
      lastname: 'Valetini',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: backRowId,
        }
      },
    },
    {
      key: 'samuKerevi',
      title: 'Samu Kerevi',
      firstname: 'Samu',
      lastname: 'Kerevi',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: centreId,
        }
      },
    },
    {
      key: 'suliasiVunivalu',
      title: 'Suliasi Vunivalu',
      firstname: 'Suliasi',
      lastname: 'Vunivalu',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: outsideBackId,
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
      },
      playerPositions: {
        create: {
          positionId: propId,
        }
      },
    },
    {
      key: 'tateMcdermott',
      title: 'Tate McDermott',
      firstname: 'Tate',
      lastname: 'McDermott',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: scrumhalfId,
        }
      },
    },
    {
      key: 'tomHooper',
      title: 'Tom Hooper',
      firstname: 'Tom',
      lastname: 'Hooper',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: [
          { positionId: lockId },
          { positionId: backRowId },
        ]
      },
    },
    {
      key: 'willSkelton',
      title: 'Will Skelton',
      firstname: 'Will',
      lastname: 'Skelton',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: lockId,
        },
      },
    },
    {
      key: 'zaneNonggorr',
      title: 'Zane Nonggorr',
      firstname: 'Zane',
      lastname: 'Nonggorr',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: propId,
        },
      },
    },
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
      playerPositions: {
        create: {
          positionId: backRowId,
        }
      },
    },
  ]

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