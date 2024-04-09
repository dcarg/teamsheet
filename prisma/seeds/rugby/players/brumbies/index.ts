import type { IdsObject } from '../../players'

const getBrumbiesPlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    brumbies: brumbiesId,
    wallabies: wallbiesId
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
      key: "tomWright",
      title: "Tom Wright",
      firstname: "Tom",
      lastname: "Wright",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
          { teamId: wallbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "lachlanLonergan",
      title: "Lachlan Lonergan",
      firstname: "Lachlan",
      lastname: "Lonergan",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
          { teamId: wallbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "robValetini",
      title: "Rob Valetini",
      firstname: "Rob",
      lastname: "Valetini",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
          { teamId: wallbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "coreyToole",
      title: "Corey Toole",
      firstname: "Corey",
      lastname: "Toole",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "ryanLonergan",
      title: "Ryan Lonergan",
      firstname: "Ryan",
      lastname: "Lonergan",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "andyMuirhead",
      title: "Andy Muirhead",
      firstname: "Andy",
      lastname: "Muirhead",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "jamesSlipper",
      title: "James Slipper",
      firstname: "James",
      lastname: "Slipper",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
          { teamId: wallbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "lenIkitau",
      title: "Len Ikitau",
      firstname: "Len",
      lastname: "Ikitau",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
          { teamId: wallbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "tomHooper",
      title: "Tom Hooper",
      firstname: "Tom",
      lastname: "Hooper",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
          { teamId: wallbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
          { positionId: lockId },
        ],
      },
    },
    {
      key: "connalMcInerney",
      title: "Connal McInerney",
      firstname: "Connal",
      lastname: "McInerney",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "nickFrost",
      title: "Nick Frost",
      firstname: "Nick",
      lastname: "Frost",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
          { teamId: wallbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "noahLolesio",
      title: "Noah Lolesio",
      firstname: "Noah",
      lastname: "Lolesio",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
          { teamId: wallbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "tamatiTua",
      title: "Tamati Tua",
      firstname: "Tamati",
      lastname: "Tua",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "ollieSapsford",
      title: "Ollie Sapsford",
      firstname: "Ollie",
      lastname: "Sapsford",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "benO'Donnell",
      title: "Ben O'Donnell",
      firstname: "Ben",
      lastname: "O'Donnell",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "lukeReimer",
      title: "Luke Reimer",
      firstname: "Luke",
      lastname: "Reimer",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "jackDebreczeni",
      title: "Jack Debreczeni",
      firstname: "Jack",
      lastname: "Debreczeni",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "roryScott",
      title: "Rory Scott",
      firstname: "Rory",
      lastname: "Scott",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "cadeyrnNeville",
      title: "Cadeyrn Neville",
      firstname: "Cadeyrn",
      lastname: "Neville",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "jahromeBrown",
      title: "Jahrome Brown",
      firstname: "Jahrome",
      lastname: "Brown",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "charlieCale",
      title: "Charlie Cale",
      firstname: "Charlie",
      lastname: "Cale",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
          { positionId: lockId },
        ],
      },
    },
    {
      key: "darcySwain",
      title: "Darcy Swain",
      firstname: "Darcy",
      lastname: "Swain",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "harrisonGoddard",
      title: "Harrison Goddard",
      firstname: "Harrison",
      lastname: "Goddard",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "hudsonCreighton",
      title: "Hudson Creighton",
      firstname: "Hudson",
      lastname: "Creighton",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "austinAnderson",
      title: "Austin Anderson",
      firstname: "Austin",
      lastname: "Anderson",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "declanMeredith",
      title: "Declan Meredith",
      firstname: "Declan",
      lastname: "Meredith",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "edKennedy",
      title: "Ed Kennedy",
      firstname: "Ed",
      lastname: "Kennedy",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "klaytonThorn",
      title: "Klayton Thorn",
      firstname: "Klayton",
      lastname: "Thorn",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "lachlanShaw",
      title: "Lachlan Shaw",
      firstname: "Lachlan",
      lastname: "Shaw",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "allanAlaalatoa",
      title: "Allan Alaalatoa",
      firstname: "Allan",
      lastname: "Alaalatoa",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
          { teamId: wallbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "fredKaihea",
      title: "Fred Kaihea",
      firstname: "Fred",
      lastname: "Kaihea",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "sefoKautai",
      title: "Sefo Kautai",
      firstname: "Sefo",
      lastname: "Kautai",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "billyPollard",
      title: "Billy Pollard",
      firstname: "Billy",
      lastname: "Pollard",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "blakeSchoupp",
      title: "Blake Schoupp",
      firstname: "Blake",
      lastname: "Schoupp",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
          { teamId: wallbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "rhysVan Nek",
      title: "Rhys Van Nek",
      firstname: "Rhys",
      lastname: "Van Nek",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "harryVella",
      title: "Harry Vella",
      firstname: "Harry",
      lastname: "Vella",
      teamMembers: {
        create: [
          { teamId: brumbiesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    }
  ]

  return players
}

export default getBrumbiesPlayers