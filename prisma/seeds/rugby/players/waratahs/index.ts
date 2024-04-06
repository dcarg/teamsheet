import type { IdsObject } from '../../players'

const getWaratahsPlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    wallabies: wallabiesId,
    waratahs: waratahsId,
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
      key: "angusBell",
      title: "Angus Bell",
      firstname: "Angus",
      lastname: "Bell",
      teamMembers: {
        create: [
          { teamId: wallabiesId },
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "davidPorecki",
      title: "David Porecki",
      firstname: "David",
      lastname: "Porecki",
      teamMembers: {
        create: [
          { teamId: wallabiesId },
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "markNawaqanitawase",
      title: "Mark Nawaqanitawase",
      firstname: "Mark",
      lastname: "Nawaqanitawase",
      teamMembers: {
        create: [
          { teamId: wallabiesId },
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "harryJohnson-Holmes",
      title: "Harry Johnson-Holmes",
      firstname: "Harry",
      lastname: "Johnson-Holmes",
      teamMembers: {
        create: [
          { teamId: wallabiesId },
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "langiGleeson",
      title: "Langi Gleeson",
      firstname: "Langi",
      lastname: "Gleeson",
      teamMembers: {
        create: [
          { teamId: wallabiesId },
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "dylanPietsch",
      title: "Dylan Pietsch",
      firstname: "Dylan",
      lastname: "Pietsch",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "maxJorgensen",
      title: "Max Jorgensen",
      firstname: "Max",
      lastname: "Jorgensen",
      teamMembers: {
        create: [
          { teamId: wallabiesId },
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "jedHolloway",
      title: "Jed Holloway",
      firstname: "Jed",
      lastname: "Holloway",
      teamMembers: {
        create: [
          { teamId: wallabiesId },
          { teamId: waratahsId },
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
      key: "izaiaPerese",
      title: "Izaia Perese",
      firstname: "Izaia",
      lastname: "Perese",
      teamMembers: {
        create: [
          { teamId: wallabiesId },
          { teamId: waratahsId },
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
      key: "jakeGordon",
      title: "Jake Gordon",
      firstname: "Jake",
      lastname: "Gordon",
      teamMembers: {
        create: [
          { teamId: wallabiesId },
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "milesAmatosero",
      title: "Miles Amatosero",
      firstname: "Miles",
      lastname: "Amatosero",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "lalakaiFoketi",
      title: "Lalakai Foketi",
      firstname: "Lalakai",
      lastname: "Foketi",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "taneEdmed",
      title: "Tane Edmed",
      firstname: "Tane",
      lastname: "Edmed",
      teamMembers: {
        create: [
          { teamId: waratahsId },
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
      key: "charlieGamble",
      title: "Charlie Gamble",
      firstname: "Charlie",
      lastname: "Gamble",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "hughSinclair",
      title: "Hugh Sinclair",
      firstname: "Hugh",
      lastname: "Sinclair",
      teamMembers: {
        create: [
          { teamId: waratahsId },
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
      key: "nedHanigan",
      title: "Ned Hanigan",
      firstname: "Ned",
      lastname: "Hanigan",
      teamMembers: {
        create: [
          { teamId: waratahsId },
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
      key: "joeyWalton",
      title: "Joey Walton",
      firstname: "Joey",
      lastname: "Walton",
      teamMembers: {
        create: [
          { teamId: waratahsId },
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
      key: "moseseTuipulotu",
      title: "Mosese Tuipulotu",
      firstname: "Mosese",
      lastname: "Tuipulotu",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "lachlanSwinton",
      title: "Lachlan Swinton",
      firstname: "Lachlan",
      lastname: "Swinton",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "teddyWilson",
      title: "Teddy Wilson",
      firstname: "Teddy",
      lastname: "Wilson",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "jackBowen",
      title: "Jack Bowen",
      firstname: "Jack",
      lastname: "Bowen",
      teamMembers: {
        create: [
          { teamId: waratahsId },
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
      key: "fergusLee-Warner",
      title: "Fergus Lee-Warner",
      firstname: "Fergus",
      lastname: "Lee-Warner",
      teamMembers: {
        create: [
          { teamId: waratahsId },
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
      key: "jackGrant",
      title: "Jack Grant",
      firstname: "Jack",
      lastname: "Grant",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
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
          { teamId: waratahsId },
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
      key: "mesuKunavula",
      title: "Mesu Kunavula",
      firstname: "Mesu",
      lastname: "Kunavula",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "nedSlack-Smith",
      title: "Ned Slack-Smith",
      firstname: "Ned",
      lastname: "Slack-Smith",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "vuateKarawalevu",
      title: "Vuate Karawalevu",
      firstname: "Vuate",
      lastname: "Karawalevu",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "willHarrison",
      title: "Will Harrison",
      firstname: "Will",
      lastname: "Harrison",
      teamMembers: {
        create: [
          { teamId: waratahsId },
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
      key: "danielBotha",
      title: "Daniel Botha",
      firstname: "Daniel",
      lastname: "Botha",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "theoFourie",
      title: "Theo Fourie",
      firstname: "Theo",
      lastname: "Fourie",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "archerHolz",
      title: "Archer Holz",
      firstname: "Archer",
      lastname: "Holz",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "tomLambert",
      title: "Tom Lambert",
      firstname: "Tom",
      lastname: "Lambert",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "tomRoss",
      title: "Tom Ross",
      firstname: "Tom",
      lastname: "Ross",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "haydenThompson-Stringer",
      title: "Hayden Thompson-Stringer",
      firstname: "Hayden",
      lastname: "Thompson-Stringer",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "maheVailanu",
      title: "Mahe Vailanu",
      firstname: "Mahe",
      lastname: "Vailanu",
      teamMembers: {
        create: [
          { teamId: waratahsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
  ]

  return players
}

export default getWaratahsPlayers
