import type { IdsObject } from '../../players'

const getChiefsPlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    allBlacks: allBlacksId,
    chiefs: chiefsId,
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
      key: "samisoniTaukei'aho",
      title: "Samisoni Taukei'aho",
      firstname: "Samisoni",
      lastname: "Taukei'aho",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "emoniNarawa",
      title: "Emoni Narawa",
      firstname: "Emoni",
      lastname: "Narawa",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "damianMcKenzie",
      title: "Damian McKenzie",
      firstname: "Damian",
      lastname: "McKenzie",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: chiefsId },
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
      key: "shaunStevenson",
      title: "Shaun Stevenson",
      firstname: "Shaun",
      lastname: "Stevenson",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "eteneNanai-Seturo",
      title: "Etene Nanai-Seturo",
      firstname: "Etene",
      lastname: "Nanai-Seturo",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "cortezRatima",
      title: "Cortez Ratima",
      firstname: "Cortez",
      lastname: "Ratima",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "tupouVaa'i",
      title: "Tupou Vaa'i",
      firstname: "Tupou",
      lastname: "Vaa'i",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: chiefsId },
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
      key: "quinnTupaea",
      title: "Quinn Tupaea",
      firstname: "Quinn",
      lastname: "Tupaea",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: chiefsId },
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
      key: "antonLienert-Brown",
      title: "Anton Lienert-Brown",
      firstname: "Anton",
      lastname: "Lienert-Brown",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "samipeniFinau",
      title: "Samipeni Finau",
      firstname: "Samipeni",
      lastname: "Finau",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "xavierRoe",
      title: "Xavier Roe",
      firstname: "Xavier",
      lastname: "Roe",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "lukeJacobson",
      title: "Luke Jacobson",
      firstname: "Luke",
      lastname: "Jacobson",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "danielRona",
      title: "Daniel Rona",
      firstname: "Daniel",
      lastname: "Rona",
      teamMembers: {
        create: [
          { teamId: chiefsId },
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
      key: "joshIoane",
      title: "Josh Ioane",
      firstname: "Josh",
      lastname: "Ioane",
      teamMembers: {
        create: [
          { teamId: chiefsId },
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
      key: "simonParker",
      title: "Simon Parker",
      firstname: "Simon",
      lastname: "Parker",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "ramekaPoihipi",
      title: "Rameka Poihipi",
      firstname: "Rameka",
      lastname: "Poihipi",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "naitoaAh Kuoi",
      title: "Naitoa Ah Kuoi",
      firstname: "Naitoa",
      lastname: "Ah Kuoi",
      teamMembers: {
        create: [
          { teamId: chiefsId },
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
      key: "liamCoombes-Fabling",
      title: "Liam Coombes-Fabling",
      firstname: "Liam",
      lastname: "Coombes-Fabling",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "kaylumBoshier",
      title: "Kaylum Boshier",
      firstname: "Kaylum",
      lastname: "Boshier",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "gideonWrampling",
      title: "Gideon Wrampling",
      firstname: "Gideon",
      lastname: "Wrampling",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "manaakiSelby-Rickit",
      title: "Manaaki Selby-Rickit",
      firstname: "Manaaki",
      lastname: "Selby-Rickit",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "te toiroaTahuriorangi",
      title: "Te Toiroa Tahuriorangi",
      firstname: "Te Toiroa",
      lastname: "Tahuriorangi",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "peniasiMalimali",
      title: "Peniasi Malimali",
      firstname: "Peniasi",
      lastname: "Malimali",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "joshLord",
      title: "Josh Lord",
      firstname: "Josh",
      lastname: "Lord",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "jimmyTupou",
      title: "Jimmy Tupou",
      firstname: "Jimmy",
      lastname: "Tupou",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "kalebTrask",
      title: "Kaleb Trask",
      firstname: "Kaleb",
      lastname: "Trask",
      teamMembers: {
        create: [
          { teamId: chiefsId },
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
      key: "malachiWrampling-Alec",
      title: "Malachi Wrampling-Alec",
      firstname: "Malachi",
      lastname: "Wrampling-Alec",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "tomFlorence",
      title: "Tom Florence",
      firstname: "Tom",
      lastname: "Florence",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "wallaceSititi",
      title: "Wallace Sititi",
      firstname: "Wallace",
      lastname: "Sititi",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "sioneAhio",
      title: "Sione Ahio",
      firstname: "Sione",
      lastname: "Ahio",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "georgeDyer",
      title: "George Dyer",
      firstname: "George",
      lastname: "Dyer",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "kauvakaKaivelata",
      title: "Kauvaka Kaivelata",
      firstname: "Kauvaka",
      lastname: "Kaivelata",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "ollieNorris",
      title: "Ollie Norris",
      firstname: "Ollie",
      lastname: "Norris",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "reubenO'Neill",
      title: "Reuben O'Neill",
      firstname: "Reuben",
      lastname: "O'Neill",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "jaredProffit",
      title: "Jared Proffit",
      firstname: "Jared",
      lastname: "Proffit",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "aidanRoss",
      title: "Aidan Ross",
      firstname: "Aidan",
      lastname: "Ross",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "bradleySlater",
      title: "Bradley Slater",
      firstname: "Bradley",
      lastname: "Slater",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "tyroneThompson",
      title: "Tyrone Thompson",
      firstname: "Tyrone",
      lastname: "Thompson",
      teamMembers: {
        create: [
          { teamId: chiefsId },
        ]
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

export default getChiefsPlayers