import type { IdsObject } from '../../players'

const getAllBlacksPlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    allBlacks: allBlacksId,
  } = teamIds

  const {
    backrow: backrowId,
    flyhalf: flyhalfId,
    lock: lockId,
    outsideBack: outsideBackId,
    scrumhalf: scrumhalfId,
  } = positionIds

  // Only seed players who are in the All Blacks but no other team
  const players = [
    {
      key: "beaudenBarrett",
      title: "Beauden Barrett",
      firstname: "Beauden",
      lastname: "Barrett",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
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
      key: "richieMounga",
      title: "Richie Mounga",
      firstname: "Richie",
      lastname: "Mounga",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
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
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
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
        ],
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
        ],
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
        ],
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
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "leicesterFaingaanuku",
      title: "Leicester Fainga'anuku",
      firstname: "Leicester",
      lastname: "Fainga'anuku",
      teamMembers: {
        create: [
          { teamId: allBlacksId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
  ]

  return players
}

export default getAllBlacksPlayers