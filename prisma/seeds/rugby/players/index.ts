import type { Team, Position } from '@prisma/client'

import { allBlacksPlayers } from './allBlacks/index'
import { wallabiesPlayers } from './wallabies/index'

import { blues as bluesPlayers } from './blues/index'
import { brumbies as brumbiesPlayers } from './brumbies/index'
import { chiefs as chiefsPlayers } from './chiefs/index'
import { crusaders as crusadersPlayers } from './crusaders/index'
import { drua as druaPlayers } from './drua/index'
import { force as forcePlayers } from './force/index'
import { highlanders as highlandersPlayers } from './highlanders/index'
import { hurricanes as hurricanesPlayers } from './hurricanes/index'
import { moana as moanaPlayers } from './moana/index'
import { rebels as rebelsPlayers } from './rebels/index'
import { reds as redsPlayers } from './reds/index'
import { waratahs as waratahsPlayers } from './waratahs/index'

export const players = {
  blues: bluesPlayers,
  brumbies: brumbiesPlayers,
  chiefs: chiefsPlayers,
  crusaders: crusadersPlayers,
  drua: druaPlayers,
  force: forcePlayers,
  highlanders: highlandersPlayers,
  hurricanes: hurricanesPlayers,
  moana: moanaPlayers,
  rebels: rebelsPlayers,
  reds: redsPlayers,
  waratahs: waratahsPlayers,
  allBlacks: allBlacksPlayers,
  wallabies: wallabiesPlayers,
}

const getPlayers = (positions: Position[], teams: Team[]) => {
  // Super Rugby Teams
  const bluesId = teams.find(team => team.key === 'blues')!.id
  const brumbiesId = teams.find(team => team.key === 'brumbies')!.id
  const chiefsId = teams.find(team => team.key === 'chiefs')!.id
  const crusadersId = teams.find(team => team.key === 'crusaders')!.id
  const druaId = teams.find(team => team.key === 'drua')!.id
  const forceId = teams.find(team => team.key === 'force')!.id
  const highlandersId = teams.find(team => team.key === 'highlanders')!.id
  const hurricanesId = teams.find(team => team.key === 'hurricanes')!.id
  const moanaId = teams.find(team => team.key === 'moana')!.id
  const rebelsId = teams.find(team => team.key === 'rebels')!.id
  const redsId = teams.find(team => team.key === 'reds')!.id
  const waratahsId = teams.find(team => team.key === 'waratahs')!.id

  // International Teams
  const allBlacksId = teams.find(team => team.key === 'allBlacks')!.id
  const wallabiesId = teams.find(team => team.key === 'wallabies')!.id

  // Positions
  const propId = positions.find(position => position.key === 'prop')!.id
  const hookerId = positions.find(position => position.key === 'hooker')!.id
  const lockId = positions.find(position => position.key === 'lock')!.id
  const backrowId = positions.find(position => position.key === 'backrow')!.id
  const scrumhalfId = positions.find(position => position.key === 'scrumhalf')!.id
  const flyhalfId = positions.find(position => position.key === 'flyhalf')!.id
  const centreId = positions.find(position => position.key === 'centre')!.id
  const outsideBackId = positions.find(position => position.key === 'outsideBack')!.id

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
    },
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
      key: "fletcherNewell",
      title: "Fletcher Newell",
      firstname: "Fletcher",
      lastname: "Newell",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: crusadersId },
        ]
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
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
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
        ]
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
      key: "sevuReece",
      title: "Sevu Reece",
      firstname: "Sevu",
      lastname: "Reece",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: crusadersId },
        ]
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
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
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
        ]
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
      key: "willJordan",
      title: "Will Jordan",
      firstname: "Will",
      lastname: "Jordan",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: crusadersId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "ethanDeGroot",
      title: "Ethan de Groot",
      firstname: "Ethan",
      lastname: "de Groot",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: highlandersId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
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
      key: "asafoAumua",
      title: "Asafo Aumua",
      firstname: "Asafo",
      lastname: "Aumua",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: hurricanesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "camRoigard",
      title: "Cam Roigard",
      firstname: "Cam",
      lastname: "Roigard",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
          { teamId: hurricanesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "beaudenBarrett",
      title: "Beauden Barrett",
      firstname: "Beauden",
      lastname: "Barrett",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
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
      key: "richieMounga",
      title: "Richie Mounga",
      firstname: "Richie",
      lastname: "Mounga",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
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
      key: "aaronSmith",
      title: "Aaron Smith",
      firstname: "Aaron",
      lastname: "Smith",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
        ]
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
          { teamId: allBlacksId },
          { teamId: hurricanesId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
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
        ]
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "ardieSavea",
      title: "Ardie Savea",
      firstname: "Ardie",
      lastname: "Savea",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "shannonFrizell",
      title: "Shannon Frizell",
      firstname: "Shannon",
      lastname: "Frizell",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "samCane",
      title: "Sam Cane",
      firstname: "Sam",
      lastname: "Cane",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "brodieRetallick",
      title: "Brodie Retallick",
      firstname: "Brodie",
      lastname: "Retallick",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "leicesterFainga'anuku",
      title: "Leicester Fainga'anuku",
      firstname: "Leicester",
      lastname: "Fainga'anuku",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
        ]
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    }
  ]

  return players
}

export default getPlayers