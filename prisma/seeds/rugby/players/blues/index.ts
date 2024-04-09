import type { IdsObject } from '../../players'

const getBluesPlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    allBlacks: allBlacksId,
    blues: bluesId,
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
      key: "markTelea",
      title: "Mark Telea",
      firstname: "Mark",
      lastname: "Telea",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "hoskinsSotutu",
      title: "Hoskins Sotutu",
      firstname: "Hoskins",
      lastname: "Sotutu",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "stephenPerofeta",
      title: "Stephen Perofeta",
      firstname: "Stephen",
      lastname: "Perofeta",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: bluesId },
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
      key: "calebClarke",
      title: "Caleb Clarke",
      firstname: "Caleb",
      lastname: "Clarke",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "rickyRiccitelli",
      title: "Ricky Riccitelli",
      firstname: "Ricky",
      lastname: "Riccitelli",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "riekoIoane",
      title: "Rieko Ioane",
      firstname: "Rieko",
      lastname: "Ioane",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "coreyEvans",
      title: "Corey Evans",
      firstname: "Corey",
      lastname: "Evans",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "daltonPapali'i",
      title: "Dalton Papali'i",
      firstname: "Dalton",
      lastname: "Papali'i",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "finlayChristie",
      title: "Finlay Christie",
      firstname: "Finlay",
      lastname: "Christie",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "harryPlummer",
      title: "Harry Plummer",
      firstname: "Harry",
      lastname: "Plummer",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "zarnSullivan",
      title: "Zarn Sullivan",
      firstname: "Zarn",
      lastname: "Sullivan",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "bryceHeem",
      title: "Bryce Heem",
      firstname: "Bryce",
      lastname: "Heem",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "cameronSuafoa",
      title: "Cameron Suafoa",
      firstname: "Cameron",
      lastname: "Suafoa",
      teamMembers: {
        create: [
          { teamId: bluesId },
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
      key: "antonSegner",
      title: "Anton Segner",
      firstname: "Anton",
      lastname: "Segner",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "adrianChoat",
      title: "Adrian Choat",
      firstname: "Adrian",
      lastname: "Choat",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "ajLam",
      title: "AJ Lam",
      firstname: "AJ",
      lastname: "Lam",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "akiraIoane",
      title: "Akira Ioane",
      firstname: "Akira",
      lastname: "Ioane",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "samDarry",
      title: "Sam Darry",
      firstname: "Sam",
      lastname: "Darry",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "taufaFunaki",
      title: "Taufa Funaki",
      firstname: "Taufa",
      lastname: "Funaki",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "samNock",
      title: "Sam Nock",
      firstname: "Sam",
      lastname: "Nock",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "laghlanMcWhannell",
      title: "Laghlan McWhannell",
      firstname: "Laghlan",
      lastname: "McWhannell",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "calebTangitau",
      title: "Caleb Tangitau",
      firstname: "Caleb",
      lastname: "Tangitau",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "robRush",
      title: "Rob Rush",
      firstname: "Rob",
      lastname: "Rush",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "coleForbes",
      title: "Cole Forbes",
      firstname: "Cole",
      lastname: "Forbes",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "jamesThompson",
      title: "James Thompson",
      firstname: "James",
      lastname: "Thompson",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "joshBeehre",
      title: "Josh Beehre",
      firstname: "Josh",
      lastname: "Beehre",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "kadeBanks",
      title: "Kade Banks",
      firstname: "Kade",
      lastname: "Banks",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "lucasCashmore",
      title: "Lucas Cashmore",
      firstname: "Lucas",
      lastname: "Cashmore",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "meihanaGrindlay",
      title: "Meihana Grindlay",
      firstname: "Meihana",
      lastname: "Grindlay",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "kurtEklund",
      title: "Kurt Eklund",
      firstname: "Kurt",
      lastname: "Eklund",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "joshFusitua",
      title: "Josh Fusitua",
      firstname: "Josh",
      lastname: "Fusitua",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "jordanLay",
      title: "Jordan Lay",
      firstname: "Jordan",
      lastname: "Lay",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "marcelRenata",
      title: "Marcel Renata",
      firstname: "Marcel",
      lastname: "Renata",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "pjSheck",
      title: "PJ Sheck",
      firstname: "PJ",
      lastname: "Sheck",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "angusTa'avao",
      title: "Angus Ta'avao",
      firstname: "Angus",
      lastname: "Ta'avao",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "ofaTu'ungafasi",
      title: "Ofa Tu'ungafasi",
      firstname: "Ofa",
      lastname: "Tu'ungafasi",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "soaneVikena",
      title: "Soane Vikena",
      firstname: "Soane",
      lastname: "Vikena",
      teamMembers: {
        create: [
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "patrickTuipulotu",
      title: "Patrick Tuipulotu",
      firstname: "Patrick",
      lastname: "Tuipulotu",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: bluesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    }
  ]

  return players
}

export default getBluesPlayers