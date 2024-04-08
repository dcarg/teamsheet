import type { IdsObject } from '../../players'

const getHighlandersPlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    allBlacks: allBlacksId,
    highlanders: highlandersId,
  } = teamIds

  const {
    backrow: backrowId,
    centre: centreId,
    flyhalf: flyhalfId,
    hooker: hookerId,
    lock: lockId,
    outsideBack: outsideBackId,
    prop: propId,
    scrumhalf: scrumhalfId,
  } = positionIds

  const players = [
    {
      key: "timociTavatavanawai",
      title: "Timoci Tavatavanawai",
      firstname: "Timoci",
      lastname: "Tavatavanawai",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "billyHarmon",
      title: "Billy Harmon",
      firstname: "Billy",
      lastname: "Harmon",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "jonaNareki",
      title: "Jona Nareki",
      firstname: "Jona",
      lastname: "Nareki",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "hughRenton",
      title: "Hugh Renton",
      firstname: "Hugh",
      lastname: "Renton",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "folauFakatava",
      title: "Folau Fakatava",
      firstname: "Folau",
      lastname: "Fakatava",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "samGilbert",
      title: "Sam Gilbert",
      firstname: "Sam",
      lastname: "Gilbert",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
          { positionId: flyhalfId },
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "jacobRatumaitavuki-Kneepkens",
      title: "Jacob Ratumaitavuki-Kneepkens",
      firstname: "Jacob",
      lastname: "Ratumaitavuki-Kneepkens",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "tanieluTele'a",
      title: "Tanielu Tele'a",
      firstname: "Tanielu",
      lastname: "Tele'a",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "ethanDe Groot",
      title: "Ethan de Groot",
      firstname: "Ethan",
      lastname: "De Groot",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "nikoraBroughton",
      title: "Nikora Broughton",
      firstname: "Nikora",
      lastname: "Broughton",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "jonahLowe",
      title: "Jonah Lowe",
      firstname: "Jonah",
      lastname: "Lowe",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "seanWithy",
      title: "Sean Withy",
      firstname: "Sean",
      lastname: "Withy",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "ajayFaleafaga",
      title: "Ajay Faleafaga",
      firstname: "Ajay",
      lastname: "Faleafaga",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "connorGarden-Bachop",
      title: "Connor Garden-Bachop",
      firstname: "Connor",
      lastname: "Garden-Bachop",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "mattWhaanga",
      title: "Matt Whaanga",
      firstname: "Matt",
      lastname: "Whaanga",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "joshTimu",
      title: "Josh Timu",
      firstname: "Josh",
      lastname: "Timu",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "martinBogado",
      title: "Martin Bogado",
      firstname: "Martin",
      lastname: "Bogado",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "pari pariParkinson",
      title: "Pari Pari Parkinson",
      firstname: "Pari Pari",
      lastname: "Parkinson",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "maxHicks",
      title: "Max Hicks",
      firstname: "Max",
      lastname: "Hicks",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "cameronMillar",
      title: "Cameron Millar",
      firstname: "Cameron",
      lastname: "Millar",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "jamesArscott",
      title: "James Arscott",
      firstname: "James",
      lastname: "Arscott",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "willTucker",
      title: "Will Tucker",
      firstname: "Will",
      lastname: "Tucker",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "mitchellDunshea",
      title: "Mitchell Dunshea",
      firstname: "Mitchell",
      lastname: "Dunshea",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "fabianHolland",
      title: "Fabian Holland",
      firstname: "Fabian",
      lastname: "Holland",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "nathanHastie",
      title: "Nathan Hastie",
      firstname: "Nathan",
      lastname: "Hastie",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "jakeTe Hiwi",
      title: "Jake Te Hiwi",
      firstname: "Jake",
      lastname: "Te Hiwi",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "haydenMichaels",
      title: "Hayden Michaels",
      firstname: "Hayden",
      lastname: "Michaels",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "oliverHaig",
      title: "Oliver Haig",
      firstname: "Oliver",
      lastname: "Haig",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "rhysPatchell",
      title: "Rhys Patchell",
      firstname: "Rhys",
      lastname: "Patchell",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "tomSanders",
      title: "Tom Sanders",
      firstname: "Tom",
      lastname: "Sanders",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "jermaineAinsley",
      title: "Jermaine Ainsley",
      firstname: "Jermaine",
      lastname: "Ainsley",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "henryBell",
      title: "Henry Bell",
      firstname: "Henry",
      lastname: "Bell",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "lucaInch",
      title: "Luca Inch",
      firstname: "Luca",
      lastname: "Inch",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "rickyJackson",
      title: "Ricky Jackson",
      firstname: "Ricky",
      lastname: "Jackson",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "aydenJohnstone",
      title: "Ayden Johnstone",
      firstname: "Ayden",
      lastname: "Johnstone",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "danLienert-Brown",
      title: "Dan Lienert-Brown",
      firstname: "Dan",
      lastname: "Lienert-Brown",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "saulaMau",
      title: "Saula Mau",
      firstname: "Saula",
      lastname: "Mau",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "jackTaylor",
      title: "Jack Taylor",
      firstname: "Jack",
      lastname: "Taylor",
      teamMembers: {
        create: [
          { teamId: highlandersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    }
  ]

  return players
}

export default getHighlandersPlayers