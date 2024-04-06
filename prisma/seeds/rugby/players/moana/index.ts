import type { IdsObject } from '../../players'

const getMoanaPlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    moana: moanaId,
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
      key: "solomoneFunaki",
      title: "Solomone Funaki",
      firstname: "Solomone",
      lastname: "Funaki",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "lotuInisi",
      title: "Lotu Inisi",
      firstname: "Lotu",
      lastname: "Inisi",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "neriaFomai",
      title: "Neria Fomai",
      firstname: "Neria",
      lastname: "Fomai",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "dannyToala",
      title: "Danny Toala",
      firstname: "Danny",
      lastname: "Toala",
      teamMembers: {
        create: [
          { teamId: moanaId },
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
      key: "williamHavili",
      title: "William Havili",
      firstname: "William",
      lastname: "Havili",
      teamMembers: {
        create: [
          { teamId: moanaId },
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
      key: "miracleFaiilagi",
      title: "Miracle Faiilagi",
      firstname: "Miracle",
      lastname: "Faiilagi",
      teamMembers: {
        create: [
          { teamId: moanaId },
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
      key: "christianLeali'ifano",
      title: "Christian Leali'ifano",
      firstname: "Christian",
      lastname: "Leali'ifano",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "samiuelaMoli",
      title: "Samiuela Moli",
      firstname: "Samiuela",
      lastname: "Moli",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "fineInisi",
      title: "Fine Inisi",
      firstname: "Fine",
      lastname: "Inisi",
      teamMembers: {
        create: [
          { teamId: moanaId },
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
      key: "julianSavea",
      title: "Julian Savea",
      firstname: "Julian",
      lastname: "Savea",
      teamMembers: {
        create: [
          { teamId: moanaId },
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
      key: "ereEnari",
      title: "Ere Enari",
      firstname: "Ere",
      lastname: "Enari",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "alamandaMotuga",
      title: "Alamanda Motuga",
      firstname: "Alamanda",
      lastname: "Motuga",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "sioneHavili",
      title: "Sione Havili",
      firstname: "Sione",
      lastname: "Havili",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "anzeloTuitavuki",
      title: "Anzelo Tuitavuki",
      firstname: "Anzelo",
      lastname: "Tuitavuki",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "henryTaefu",
      title: "Henry Taefu",
      firstname: "Henry",
      lastname: "Taefu",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "d'angeloLeuila",
      title: "D'Angelo Leuila",
      firstname: "D'Angelo",
      lastname: "Leuila",
      teamMembers: {
        create: [
          { teamId: moanaId },
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
      key: "jonathanTaumateine",
      title: "Jonathan Taumateine",
      firstname: "Jonathan",
      lastname: "Taumateine",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "pepesanaPatafilo",
      title: "Pepesana Patafilo",
      firstname: "Pepesana",
      lastname: "Patafilo",
      teamMembers: {
        create: [
          { teamId: moanaId },
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
      key: "lalomiloLalomilo",
      title: "Lalomilo Lalomilo",
      firstname: "Lalomilo",
      lastname: "Lalomilo",
      teamMembers: {
        create: [
          { teamId: moanaId },
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
      key: "samuelSlade",
      title: "Samuel Slade",
      firstname: "Samuel",
      lastname: "Slade",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "iriePapuni",
      title: "Irie Papuni",
      firstname: "Irie",
      lastname: "Papuni",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "nigelAh Wong",
      title: "Nigel Ah Wong",
      firstname: "Nigel",
      lastname: "Ah Wong",
      teamMembers: {
        create: [
          { teamId: moanaId },
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
      key: "ofaTauatevalu",
      title: "Ofa Tauatevalu",
      firstname: "Ofa",
      lastname: "Tauatevalu",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "olaTauelangi",
      title: "Ola Tauelangi",
      firstname: "Ola",
      lastname: "Tauelangi",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "otumakaMausia",
      title: "Otumaka Mausia",
      firstname: "Otumaka",
      lastname: "Mausia",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "semisiPaea",
      title: "Semisi Paea",
      firstname: "Semisi",
      lastname: "Paea",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "tomSavage",
      title: "Tom Savage",
      firstname: "Tom",
      lastname: "Savage",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "viliamiFine",
      title: "Viliami Fine",
      firstname: "Viliami",
      lastname: "Fine",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "suetenaAsomua",
      title: "Suetena Asomua",
      firstname: "Suetena",
      lastname: "Asomua",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "donaldBrighouse",
      title: "Donald Brighouse",
      firstname: "Donald",
      lastname: "Brighouse",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "aiseaHalo",
      title: "Aisea Halo",
      firstname: "Aisea",
      lastname: "Halo",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "sekopeKepu",
      title: "Sekope Kepu",
      firstname: "Sekope",
      lastname: "Kepu",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "satekiLatu",
      title: "Sateki Latu",
      firstname: "Sateki",
      lastname: "Latu",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "jamesLay",
      title: "James Lay",
      firstname: "James",
      lastname: "Lay",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "tomasiMaka",
      title: "Tomasi Maka",
      firstname: "Tomasi",
      lastname: "Maka",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "samaMalolo",
      title: "Sama Malolo",
      firstname: "Sama",
      lastname: "Malolo",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "viliamiNapa'a",
      title: "Viliami Napa'a",
      firstname: "Viliami",
      lastname: "Napa'a",
      teamMembers: {
        create: [
          { teamId: moanaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "abrahamPole",
      title: "Abraham Pole",
      firstname: "Abraham",
      lastname: "Pole",
      teamMembers: {
        create: [
          { teamId: moanaId },
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

export default getMoanaPlayers