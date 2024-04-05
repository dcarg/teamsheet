import type { IdsObject } from '../../players'

const getCrusadersPlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    allBlacks: allBlacksId,
    crusaders: crusadersId,
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
      key: "willJordan",
      title: "Will Jordan",
      firstname: "Will",
      lastname: "Jordan",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "leviAumua",
      title: "Levi Aumua",
      firstname: "Levi",
      lastname: "Aumua",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "davidHavili",
      title: "David Havili",
      firstname: "David",
      lastname: "Havili",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: crusadersId },
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
      key: "maccaSpringer",
      title: "Macca Springer",
      firstname: "Macca",
      lastname: "Springer",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "sevuReece",
      title: "Sevu Reece",
      firstname: "Sevu",
      lastname: "Reece",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "ethanBlackadder",
      title: "Ethan Blackadder",
      firstname: "Ethan",
      lastname: "Blackadder",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "rivezReihana",
      title: "Rivez Reihana",
      firstname: "Rivez",
      lastname: "Reihana",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "georgeBell",
      title: "George Bell",
      firstname: "George",
      lastname: "Bell",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "brodieMcAlister",
      title: "Brodie McAlister",
      firstname: "Brodie",
      lastname: "McAlister",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "scottBarrett",
      title: "Scott Barrett",
      firstname: "Scott",
      lastname: "Barrett",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
          { positionId: lockId },
        ],
      },
    },
    {
      key: "noahHotham",
      title: "Noah Hotham",
      firstname: "Noah",
      lastname: "Hotham",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "dallasMcLeod",
      title: "Dallas McLeod",
      firstname: "Dallas",
      lastname: "McLeod",
      teamMembers: {
        create: [
          { teamId: crusadersId },
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
      key: "codieTaylor",
      title: "Codie Taylor",
      firstname: "Codie",
      lastname: "Taylor",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "manasaMataele",
      title: "Manasa Mataele",
      firstname: "Manasa",
      lastname: "Mataele",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "heremaiaMurray",
      title: "Heremaia Murray",
      firstname: "Heremaia",
      lastname: "Murray",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "christianLio-Willie",
      title: "Christian Lio-Willie",
      firstname: "Christian",
      lastname: "Lio-Willie",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "tahaKemara",
      title: "Taha Kemara",
      firstname: "Taha",
      lastname: "Kemara",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "tomChristie",
      title: "Tom Christie",
      firstname: "Tom",
      lastname: "Christie",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "jamieHannah",
      title: "Jamie Hannah",
      firstname: "Jamie",
      lastname: "Hannah",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "chayFihaki",
      title: "Chay Fihaki",
      firstname: "Chay",
      lastname: "Fihaki",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "williHeinz",
      title: "Willi Heinz",
      firstname: "Willi",
      lastname: "Heinz",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "domGardiner",
      title: "Dom Gardiner",
      firstname: "Dom",
      lastname: "Gardiner",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "mitchellDrummond",
      title: "Mitchell Drummond",
      firstname: "Mitchell",
      lastname: "Drummond",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "cullenGrace",
      title: "Cullen Grace",
      firstname: "Cullen",
      lastname: "Grace",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "zachGallagher",
      title: "Zach Gallagher",
      firstname: "Zach",
      lastname: "Gallagher",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "quintenStrange",
      title: "Quinten Strange",
      firstname: "Quinten",
      lastname: "Strange",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "fergusBurke",
      title: "Fergus Burke",
      firstname: "Fergus",
      lastname: "Burke",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "andrewTurner",
      title: "Andrew Turner",
      firstname: "Andrew",
      lastname: "Turner",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "joneRova",
      title: "Jone Rova",
      firstname: "Jone",
      lastname: "Rova",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "leighHalfpenny",
      title: "Leigh Halfpenny",
      firstname: "Leigh",
      lastname: "Halfpenny",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "ryanCrotty",
      title: "Ryan Crotty",
      firstname: "Ryan",
      lastname: "Crotty",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "tahlorCahill",
      title: "Tahlor Cahill",
      firstname: "Tahlor",
      lastname: "Cahill",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "coreyKellow",
      title: "Corey Kellow",
      firstname: "Corey",
      lastname: "Kellow",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "georgeBower",
      title: "George Bower",
      firstname: "George",
      lastname: "Bower",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "finlayBrewis",
      title: "Finlay Brewis",
      firstname: "Finlay",
      lastname: "Brewis",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "owenFranks",
      title: "Owen Franks",
      firstname: "Owen",
      lastname: "Franks",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "ioaneMoananu",
      title: "Ioane Moananu",
      firstname: "Ioane",
      lastname: "Moananu",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "joeMoody",
      title: "Joe Moody",
      firstname: "Joe",
      lastname: "Moody",
      teamMembers: {
        create: [
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "fletcherNewell",
      title: "Fletcher Newell",
      firstname: "Fletcher",
      lastname: "Newell",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "tamaitiWilliams",
      title: "Tamaiti Williams",
      firstname: "Tamaiti",
      lastname: "Williams",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: crusadersId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
  ]

  return players
}

export default getCrusadersPlayers