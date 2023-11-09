import type { PrismaClient, Position, Sport, Team } from '@prisma/client'

const seedPlayers = (prisma: PrismaClient, positions: Position[], sports: Sport[], teams: Team[]) => {
  const sportId = sports.find(sport => sport.key === 'rugby')!.id // rugby
  const teamId = teams.find(team => (team.key === 'australia') && (team.sportId === sportId))!.id // wallabies

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
        create: {
          positionId: positions.find(p => p.key === 'outsideBack')!.id,
        }
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
          positionId: positions.find(p => p.key === 'prop')!.id,
        }
      },
    },
    {
      key: 'bendDonaldson',
      title: 'Ben Donaldson',
      firstname: 'Ben',
      lastname: 'Donaldson',
      teamMembers: {
        create: {
          teamId,
        }
      },
      playerPositions: {
        create: {
          positionId: positions.find(p => p.key === 'flyhalf')!.id,
        }
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
          positionId: positions.find(p => p.key === 'prop')!.id,
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
          positionId: positions.find(p => p.key === 'flyhalf')!.id,
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
          positionId: positions.find(p => p.key === 'hooker')!.id,
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
          positionId: positions.find(p => p.key === 'backrow')!.id,
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
          positionId: positions.find(p => p.key === 'scrumhalf')!.id,
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
        create: {
          positionId: positions.find(p => p.key === 'centre')!.id,
        }
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
          positionId: positions.find(p => p.key === 'prop')!.id,
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
        create: {
          positionId: positions.find(p => p.key === 'centre')!.id,
        }
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
          positionId: positions.find(p => p.key === 'hooker')!.id,
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
          positionId: positions.find(p => p.key === 'backrow')!.id,
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
          positionId: positions.find(p => p.key === 'centre')!.id,
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
          positionId: positions.find(p => p.key === 'backrow')!.id,
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
          positionId: positions.find(p => p.key === 'outsideBack')!.id,
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
          positionId: positions.find(p => p.key === 'outsideBack')!.id,
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
          positionId: positions.find(p => p.key === 'hooker')!.id,
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
          positionId: positions.find(p => p.key === 'lock')!.id,
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
          positionId: positions.find(p => p.key === 'outsideBack')!.id,
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
          positionId: positions.find(p => p.key === 'scrumhalf')!.id,
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
          positionId: positions.find(p => p.key === 'lock')!.id,
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
          positionId: positions.find(p => p.key === 'prop')!.id,
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
          positionId: positions.find(p => p.key === 'lock')!.id,
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
        create: {
          positionId: positions.find(p => p.key === 'backrow')!.id,
        }
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
          positionId: positions.find(p => p.key === 'backrow')!.id,
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
          positionId: positions.find(p => p.key === 'centre')!.id,
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
          positionId: positions.find(p => p.key === 'outsideBack')!.id,
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
          positionId: positions.find(p => p.key === 'prop')!.id,
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
          positionId: positions.find(p => p.key === 'scrumhalf')!.id,
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
        create: {
          positionId: positions.find(p => p.key === 'lock')!.id,
        },
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
          positionId: positions.find(p => p.key === 'lock')!.id,
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
          positionId: positions.find(p => p.key === 'prop')!.id,
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
          positionId: positions.find(p => p.key === 'backrow')!.id,
        }
      },
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