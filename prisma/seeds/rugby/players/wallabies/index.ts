import type { IdsObject } from '../../players'

const getWallabiesPlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    wallabies: wallabiesId,
  } = teamIds

  const {
    backrow: backrowId,
    centre: centreId,
    lock: lockId,
    outsideBack: outsideBackId,
  } = positionIds

    // Only seed players who are in the Wallabies but no other team
  const players = [
    {
      key: 'marikaKoroibete',
      title: 'Marika Koroibete',
      firstname: 'Marika',
      lastname: 'Koroibete',
      teamMembers: {
        create: [
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
      key: 'mattPhilip',
      title: 'Matt Philip',
      firstname: 'Matt',
      lastname: 'Philip',
      teamMembers: {
        create: [
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: 'richieArnold',
      title: 'Richie Arnold',
      firstname: 'Richie',
      lastname: 'Arnold',
      teamMembers: {
        create: [
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: 'samuKerevi',
      title: 'Samu Kerevi',
      firstname: 'Samu',
      lastname: 'Kerevi',
      teamMembers: {
        create: [
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
      key: 'willSkelton',
      title: 'Will Skelton',
      firstname: 'Will',
      lastname: 'Skelton',
      teamMembers: {
        create: [
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: 'michaelHooper',
      title: 'Michael Hooper',
      firstname: 'Michael',
      lastname: 'Hooper',
      teamMembers: {
        create: [
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
  ]

  return players
}

export default getWallabiesPlayers