import type { IdsObject } from '../../players'

const getHurricanesPlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    allBlacks: allBlacksId,
    hurricanes: hurricanesId,
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

  const players =[
    {
      key: "camRoigard",
      title: "Cam Roigard",
      firstname: "Cam",
      lastname: "Roigard",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "kiniNaholo",
      title: "Kini Naholo",
      firstname: "Kini",
      lastname: "Naholo",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "asafoAumua",
      title: "Asafo Aumua",
      firstname: "Asafo",
      lastname: "Aumua",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "salesiRayasi",
      title: "Salesi Rayasi",
      firstname: "Salesi",
      lastname: "Rayasi",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "joshuaMoorby",
      title: "Joshua Moorby",
      firstname: "Joshua",
      lastname: "Moorby",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "jordieBarrett",
      title: "Jordie Barrett",
      firstname: "Jordie",
      lastname: "Barrett",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: hurricanesId },
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
      key: "billyProctor",
      title: "Billy Proctor",
      firstname: "Billy",
      lastname: "Proctor",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "xavierNumia",
      title: "Xavier Numia",
      firstname: "Xavier",
      lastname: "Numia",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "du'plessisKirifi",
      title: "Du'Plessis Kirifi",
      firstname: "Du'Plessis",
      lastname: "Kirifi",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "rubenLove",
      title: "Ruben Love",
      firstname: "Ruben",
      lastname: "Love",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
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
      key: "devanFlanders",
      title: "Devan Flanders",
      firstname: "Devan",
      lastname: "Flanders",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "aidanMorgan",
      title: "Aidan Morgan",
      firstname: "Aidan",
      lastname: "Morgan",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "braydenIose",
      title: "Brayden Iose",
      firstname: "Brayden",
      lastname: "Iose",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "calebDelany",
      title: "Caleb Delany",
      firstname: "Caleb",
      lastname: "Delany",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
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
      key: "peterLakai",
      title: "Peter Lakai",
      firstname: "Peter",
      lastname: "Lakai",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "brettCameron",
      title: "Brett Cameron",
      firstname: "Brett",
      lastname: "Cameron",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "bailynSullivan",
      title: "Bailyn Sullivan",
      firstname: "Bailyn",
      lastname: "Sullivan",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "harryGodfrey",
      title: "Harry Godfrey",
      firstname: "Harry",
      lastname: "Godfrey",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
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
      key: "jamesTucker",
      title: "James Tucker",
      firstname: "James",
      lastname: "Tucker",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "tkHowden",
      title: "TK Howden",
      firstname: "TK",
      lastname: "Howden",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "peterUmaga-Jensen",
      title: "Peter Umaga-Jensen",
      firstname: "Peter",
      lastname: "Umaga-Jensen",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "danielSinkinson",
      title: "Daniel Sinkinson",
      firstname: "Daniel",
      lastname: "Sinkinson",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "isaiaWalker-Leawere",
      title: "Isaia Walker-Leawere",
      firstname: "Isaia",
      lastname: "Walker-Leawere",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "rileyHiggins",
      title: "Riley Higgins",
      firstname: "Riley",
      lastname: "Higgins",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "justinSangster",
      title: "Justin Sangster",
      firstname: "Justin",
      lastname: "Sangster",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "benGrant",
      title: "Ben Grant",
      firstname: "Ben",
      lastname: "Grant",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "bradShields",
      title: "Brad Shields",
      firstname: "Brad",
      lastname: "Shields",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "joshTaula",
      title: "Josh Taula",
      firstname: "Josh",
      lastname: "Taula",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "richardJudd",
      title: "Richard Judd",
      firstname: "Richard",
      lastname: "Judd",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "tjPerenara",
      title: "TJ Perenara",
      firstname: "TJ",
      lastname: "Perenara",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "ngatunganePunivai",
      title: "Ngatungane Punivai",
      firstname: "Ngatungane",
      lastname: "Punivai",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "jacobDevery",
      title: "Jacob Devery",
      firstname: "Jacob",
      lastname: "Devery",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "sialeLauaki",
      title: "Siale Lauaki",
      firstname: "Siale",
      lastname: "Lauaki",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "tyrelLomax",
      title: "Tyrel Lomax",
      firstname: "Tyrel",
      lastname: "Lomax",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "tevitaMafileo",
      title: "Tevita Mafileo",
      firstname: "Tevita",
      lastname: "Mafileo",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "jamesO'Reilly",
      title: "James O'Reilly",
      firstname: "James",
      lastname: "O'Reilly",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "pouriRakete-Stones",
      title: "Pouri Rakete-Stones",
      firstname: "Pouri",
      lastname: "Rakete-Stones",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "pasilioTosi",
      title: "Pasilio Tosi",
      firstname: "Pasilio",
      lastname: "Tosi",
      teamMembers: {
        create: [
          { teamId: hurricanesId },
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

export default getHurricanesPlayers