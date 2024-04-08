import type { IdsObject } from '../../players'

const getForcePlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    force: forceId,
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
      key: "carloTizzano",
      title: "Carlo Tizzano",
      firstname: "Carlo",
      lastname: "Tizzano",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "willHarris",
      title: "Will Harris",
      firstname: "Will",
      lastname: "Harris",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "samSpink",
      title: "Sam Spink",
      firstname: "Sam",
      lastname: "Spink",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "jeremyWilliams",
      title: "Jeremy Williams",
      firstname: "Jeremy",
      lastname: "Williams",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "harryPotter",
      title: "Harry Potter",
      firstname: "Harry",
      lastname: "Potter",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "santiagoMedrano",
      title: "Santiago Medrano",
      firstname: "Santiago",
      lastname: "Medrano",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "issakFines-Leleiwasa",
      title: "Issak Fines-Leleiwasa",
      firstname: "Issak",
      lastname: "Fines-Leleiwasa",
      teamMembers: {
        create: [
          { teamId: forceId },
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
      key: "benDonaldson",
      title: "Ben Donaldson",
      firstname: "Ben",
      lastname: "Donaldson",
      teamMembers: {
        create: [
          { teamId: forceId },
          { teamId: wallabiesId },
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
      key: "chaseTiatia",
      title: "Chase Tiatia",
      firstname: "Chase",
      lastname: "Tiatia",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "hamishStewart",
      title: "Hamish Stewart",
      firstname: "Hamish",
      lastname: "Stewart",
      teamMembers: {
        create: [
          { teamId: forceId },
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
      key: "timAnstee",
      title: "Tim Anstee",
      firstname: "Tim",
      lastname: "Anstee",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "felixKalapu",
      title: "Felix Kalapu",
      firstname: "Felix",
      lastname: "Kalapu",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "bayleyKuenzle",
      title: "Bayley Kuenzle",
      firstname: "Bayley",
      lastname: "Kuenzle",
      teamMembers: {
        create: [
          { teamId: forceId },
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
      key: "michaelWells",
      title: "Michael Wells",
      firstname: "Michael",
      lastname: "Wells",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "maxBurey",
      title: "Max Burey",
      firstname: "Max",
      lastname: "Burey",
      teamMembers: {
        create: [
          { teamId: forceId },
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
      key: "nicWhite",
      title: "Nic White",
      firstname: "Nic",
      lastname: "White",
      teamMembers: {
        create: [
          { teamId: forceId },
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
      key: "ollieCallan",
      title: "Ollie Callan",
      firstname: "Ollie",
      lastname: "Callan",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "georgePoolman",
      title: "George Poolman",
      firstname: "George",
      lastname: "Poolman",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "ianPrior",
      title: "Ian Prior",
      firstname: "Ian",
      lastname: "Prior",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "jacksonPugh",
      title: "Jackson Pugh",
      firstname: "Jackson",
      lastname: "Pugh",
      teamMembers: {
        create: [
          { teamId: forceId },
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
      key: "lopetiFaifua",
      title: "Lopeti Faifua",
      firstname: "Lopeti",
      lastname: "Faifua",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "izackRodda",
      title: "Izack Rodda",
      firstname: "Izack",
      lastname: "Rodda",
      teamMembers: {
        create: [
          { teamId: forceId },
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
      key: "nikolaiFoliaki",
      title: "Nikolai Foliaki",
      firstname: "Nikolai",
      lastname: "Foliaki",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "campbellParata",
      title: "Campbell Parata",
      firstname: "Campbell",
      lastname: "Parata",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "henryO'Donnell",
      title: "Henry O'Donnell",
      firstname: "Henry",
      lastname: "O'Donnell",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "henryRobertson",
      title: "Henry Robertson",
      firstname: "Henry",
      lastname: "Robertson",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "ollieCummins",
      title: "Ollie Cummins",
      firstname: "Ollie",
      lastname: "Cummins",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "papillonSevele",
      title: "Papillon Sevele",
      firstname: "Papillon",
      lastname: "Sevele",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "reesjanPasitoa",
      title: "Reesjan Pasitoa",
      firstname: "Reesjan",
      lastname: "Pasitoa",
      teamMembers: {
        create: [
          { teamId: forceId },
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
      key: "siosifaAmone",
      title: "Siosifa Amone",
      firstname: "Siosifa",
      lastname: "Amone",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "charlieHancock",
      title: "Charlie Hancock",
      firstname: "Charlie",
      lastname: "Hancock",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "harryHoopert",
      title: "Harry Hoopert",
      firstname: "Harry",
      lastname: "Hoopert",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "tomHorton",
      title: "Tom Horton",
      firstname: "Tom",
      lastname: "Horton",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "feletiKaitu'u",
      title: "Feleti Kaitu'u",
      firstname: "Feleti",
      lastname: "Kaitu'u",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "atuMoli",
      title: "Atu Moli",
      firstname: "Atu",
      lastname: "Moli",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "marleyPearce",
      title: "Marley Pearce",
      firstname: "Marley",
      lastname: "Pearce",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "angusWagner",
      title: "Angus Wagner",
      firstname: "Angus",
      lastname: "Wagner",
      teamMembers: {
        create: [
          { teamId: forceId },
        ],
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

export default getForcePlayers