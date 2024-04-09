import type { IdsObject } from '../../players'

const getDruaPlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    drua: druaId,
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
      key: "tevitaIkanivere",
      title: "Tevita Ikanivere",
      firstname: "Tevita",
      lastname: "Ikanivere",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "iosefoMasi",
      title: "Iosefo Masi",
      firstname: "Iosefo",
      lastname: "Masi",
      teamMembers: {
        create: [
          { teamId: druaId },
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
      key: "selestinoRavutaumada",
      title: "Selestino Ravutaumada",
      firstname: "Selestino",
      lastname: "Ravutaumada",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "frankLomani",
      title: "Frank Lomani",
      firstname: "Frank",
      lastname: "Lomani",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "apisalomeVota",
      title: "Apisalome Vota",
      firstname: "Apisalome",
      lastname: "Vota",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "kitioneSalawa",
      title: "Kitione Salawa",
      firstname: "Kitione",
      lastname: "Salawa",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "viliveMiramira",
      title: "Vilive Miramira",
      firstname: "Vilive",
      lastname: "Miramira",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "tanielaRakuro",
      title: "Taniela Rakuro",
      firstname: "Taniela",
      lastname: "Rakuro",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "haereitiHetet",
      title: "Haereiti Hetet",
      firstname: "Haereiti",
      lastname: "Hetet",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "ilaisaDroasese",
      title: "Ilaisa Droasese",
      firstname: "Ilaisa",
      lastname: "Droasese",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "eliaCanakaivata",
      title: "Elia Canakaivata",
      firstname: "Elia",
      lastname: "Canakaivata",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "meliDerenalagi",
      title: "Meli Derenalagi",
      firstname: "Meli",
      lastname: "Derenalagi",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "peniMatawalu",
      title: "Peni Matawalu",
      firstname: "Peni",
      lastname: "Matawalu",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "isoaNasilasila",
      title: "Isoa Nasilasila",
      firstname: "Isoa",
      lastname: "Nasilasila",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "calebMuntz",
      title: "Caleb Muntz",
      firstname: "Caleb",
      lastname: "Muntz",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "kemuValetini",
      title: "Kemu Valetini",
      firstname: "Kemu",
      lastname: "Valetini",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "te ahiwaruCirikidaveta",
      title: "Te Ahiwaru Cirikidaveta",
      firstname: "Te Ahiwaru",
      lastname: "Cirikidaveta",
      teamMembers: {
        create: [
          { teamId: druaId },
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
      key: "michaelNaitokani",
      title: "Michael Naitokani",
      firstname: "Michael",
      lastname: "Naitokani",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "ratuRotuisolia",
      title: "Ratu Rotuisolia",
      firstname: "Ratu",
      lastname: "Rotuisolia",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "tuidrakiSamusamuvodre",
      title: "Tuidraki Samusamuvodre",
      firstname: "Tuidraki",
      lastname: "Samusamuvodre",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "philipBaselala",
      title: "Philip Baselala",
      firstname: "Philip",
      lastname: "Baselala",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "epeliMomo",
      title: "Epeli Momo",
      firstname: "Epeli",
      lastname: "Momo",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "epeliWaqaicece",
      title: "Epeli Waqaicece",
      firstname: "Epeli",
      lastname: "Waqaicece",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "etoniaWaqa",
      title: "Etonia Waqa",
      firstname: "Etonia",
      lastname: "Waqa",
      teamMembers: {
        create: [
          { teamId: druaId },
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
      key: "isaiahRavula",
      title: "Isaiah Ravula",
      firstname: "Isaiah",
      lastname: "Ravula",
      teamMembers: {
        create: [
          { teamId: druaId },
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
      key: "isikeliRabitu",
      title: "Isikeli Rabitu",
      firstname: "Isikeli",
      lastname: "Rabitu",
      teamMembers: {
        create: [
          { teamId: druaId },
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
      key: "motikiaiMurray",
      title: "Motikiai Murray",
      firstname: "Motikiai",
      lastname: "Murray",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "sailosiVukalokalo",
      title: "Sailosi Vukalokalo",
      firstname: "Sailosi",
      lastname: "Vukalokalo",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "simioneKuruvoli",
      title: "Simione Kuruvoli",
      firstname: "Simione",
      lastname: "Kuruvoli",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "mesakeDoge",
      title: "Mesake Doge",
      firstname: "Mesake",
      lastname: "Doge",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "mesulameDolokoto",
      title: "Mesulame Dolokoto",
      firstname: "Mesulame",
      lastname: "Dolokoto",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "joneKoroiduadua",
      title: "Jone Koroiduadua",
      firstname: "Jone",
      lastname: "Koroiduadua",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "livaiNatave",
      title: "Livai Natave",
      firstname: "Livai",
      lastname: "Natave",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "samuelaTawake",
      title: "Samuela Tawake",
      firstname: "Samuela",
      lastname: "Tawake",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "zurielTogiatama",
      title: "Zuriel Togiatama",
      firstname: "Zuriel",
      lastname: "Togiatama",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "meliTuni",
      title: "Meli Tuni",
      firstname: "Meli",
      lastname: "Tuni",
      teamMembers: {
        create: [
          { teamId: druaId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "emosiTuqiri",
      title: "Emosi Tuqiri",
      firstname: "Emosi",
      lastname: "Tuqiri",
      teamMembers: {
        create: [
          { teamId: druaId },
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

export default getDruaPlayers