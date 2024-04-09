import type { IdsObject } from '../../players'

const getRedsPlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    reds: redsId,
    wallabies: wallabiesId,
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
      key: "mattFaessler",
      title: "Matt Faessler",
      firstname: "Matt",
      lastname: "Faessler",
      teamMembers: {
        create: [
          { teamId: redsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "harryWilson",
      title: "Harry Wilson",
      firstname: "Harry",
      lastname: "Wilson",
      teamMembers: {
        create: [
          { teamId: redsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "jordanPetaia",
      title: "Jordan Petaia",
      firstname: "Jordan",
      lastname: "Petaia",
      teamMembers: {
        create: [
          { teamId: redsId },
          { teamId: wallabiesId },
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
      key: "tateMcDermott",
      title: "Tate McDermott",
      firstname: "Tate",
      lastname: "McDermott",
      teamMembers: {
        create: [
          { teamId: redsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "fraserMcReight",
      title: "Fraser McReight",
      firstname: "Fraser",
      lastname: "McReight",
      teamMembers: {
        create: [
          { teamId: redsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "liamWright",
      title: "Liam Wright",
      firstname: "Liam",
      lastname: "Wright",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "joshFlook",
      title: "Josh Flook",
      firstname: "Josh",
      lastname: "Flook",
      teamMembers: {
        create: [
          { teamId: redsId },
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
      key: "jockCampbell",
      title: "Jock Campbell",
      firstname: "Jock",
      lastname: "Campbell",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "suliasiVunivalu",
      title: "Suliasi Vunivalu",
      firstname: "Suliasi",
      lastname: "Vunivalu",
      teamMembers: {
        create: [
          { teamId: redsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "jamesO'Connor",
      title: "James O'Connor",
      firstname: "James",
      lastname: "O'Connor",
      teamMembers: {
        create: [
          { teamId: redsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "harryMcLaughlin-Phillips",
      title: "Harry McLaughlin-Phillips",
      firstname: "Harry",
      lastname: "McLaughlin-Phillips",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "hunterPaisami",
      title: "Hunter Paisami",
      firstname: "Hunter",
      lastname: "Paisami",
      teamMembers: {
        create: [
          { teamId: redsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "lawsonCreighton",
      title: "Lawson Creighton",
      firstname: "Lawson",
      lastname: "Creighton",
      teamMembers: {
        create: [
          { teamId: redsId },
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
      key: "tomLynagh",
      title: "Tom Lynagh",
      firstname: "Tom",
      lastname: "Lynagh",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "isaacHenry",
      title: "Isaac Henry",
      firstname: "Isaac",
      lastname: "Henry",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "kalaniThomas",
      title: "Kalani Thomas",
      firstname: "Kalani",
      lastname: "Thomas",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "ryanSmith",
      title: "Ryan Smith",
      firstname: "Ryan",
      lastname: "Smith",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "seruUru",
      title: "Seru Uru",
      firstname: "Seru",
      lastname: "Uru",
      teamMembers: {
        create: [
          { teamId: redsId },
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
      key: "connorVest",
      title: "Connor Vest",
      firstname: "Connor",
      lastname: "Vest",
      teamMembers: {
        create: [
          { teamId: redsId },
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
      key: "macGrealy",
      title: "Mac Grealy",
      firstname: "Mac",
      lastname: "Grealy",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "tajAnnan",
      title: "Taj Annan",
      firstname: "Taj",
      lastname: "Annan",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "connorAnderson",
      title: "Connor Anderson",
      firstname: "Connor",
      lastname: "Anderson",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "cormacDaly",
      title: "Cormac Daly",
      firstname: "Cormac",
      lastname: "Daly",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "floydAubrey",
      title: "Floyd Aubrey",
      firstname: "Floyd",
      lastname: "Aubrey",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "frankieGoldsbrough",
      title: "Frankie Goldsbrough",
      firstname: "Frankie",
      lastname: "Goldsbrough",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "joeBrial",
      title: "Joe Brial",
      firstname: "Joe",
      lastname: "Brial",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "johnBryant",
      title: "John Bryant",
      firstname: "John",
      lastname: "Bryant",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "louisWerchon",
      title: "Louis Werchon",
      firstname: "Louis",
      lastname: "Werchon",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "taineRoiri",
      title: "Taine Roiri",
      firstname: "Taine",
      lastname: "Roiri",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "timRyan",
      title: "Tim Ryan",
      firstname: "Tim",
      lastname: "Ryan",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "angusBlyth",
      title: "Angus Blyth",
      firstname: "Angus",
      lastname: "Blyth",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "richieAsiata",
      title: "Richie Asiata",
      firstname: "Richie",
      lastname: "Asiata",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "georgeBlake",
      title: "George Blake",
      firstname: "George",
      lastname: "Blake",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "maxCraig",
      title: "Max Craig",
      firstname: "Max",
      lastname: "Craig",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "massimoDe Lutiis",
      title: "Massimo De Lutiis",
      firstname: "Massimo",
      lastname: "De Lutiis",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "sefFa'agase",
      title: "Sef Fa'agase",
      firstname: "Sef",
      lastname: "Fa'agase",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "alexHodgman",
      title: "Alex Hodgman",
      firstname: "Alex",
      lastname: "Hodgman",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "joshNasser",
      title: "Josh Nasser",
      firstname: "Josh",
      lastname: "Nasser",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "zaneNonggorr",
      title: "Zane Nonggorr",
      firstname: "Zane",
      lastname: "Nonggorr",
      teamMembers: {
        create: [
          { teamId: redsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "peniRavai",
      title: "Peni Ravai",
      firstname: "Peni",
      lastname: "Ravai",
      teamMembers: {
        create: [
          { teamId: redsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "jeffToomaga-Allen",
      title: "Jeff Toomaga-Allen",
      firstname: "Jeff",
      lastname: "Toomaga-Allen",
      teamMembers: {
        create: [
          { teamId: redsId },
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

export default getRedsPlayers