import type { IdsObject } from '../../players'

const getRebelsPlayers = (positionIds: IdsObject, teamIds: IdsObject) => {
  const {
    rebels: rebelsId,
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
      key: "carterGordon",
      title: "Carter Gordon",
      firstname: "Carter",
      lastname: "Gordon",
      teamMembers: {
        create: [
          { teamId: rebelsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "andrewKellaway",
      title: "Andrew Kellaway",
      firstname: "Andrew",
      lastname: "Kellaway",
      teamMembers: {
        create: [
          { teamId: rebelsId },
          { teamId: wallabiesId },
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
      key: "mattProctor",
      title: "Matt Proctor",
      firstname: "Matt",
      lastname: "Proctor",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "joshKemeny",
      title: "Josh Kemeny",
      firstname: "Josh",
      lastname: "Kemeny",
      teamMembers: {
        create: [
          { teamId: rebelsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "ryanLouwrens",
      title: "Ryan Louwrens",
      firstname: "Ryan",
      lastname: "Louwrens",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "alexMafi",
      title: "Alex Mafi",
      firstname: "Alex",
      lastname: "Mafi",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "filipoDaugunu",
      title: "Filipo Daugunu",
      firstname: "Filipo",
      lastname: "Daugunu",
      teamMembers: {
        create: [
          { teamId: rebelsId },
          { teamId: wallabiesId },
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
      key: "joshCanham",
      title: "Josh Canham",
      firstname: "Josh",
      lastname: "Canham",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "lachieAnderson",
      title: "Lachie Anderson",
      firstname: "Lachie",
      lastname: "Anderson",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "bradWilkin",
      title: "Brad Wilkin",
      firstname: "Brad",
      lastname: "Wilkin",
      teamMembers: {
        create: [
          { teamId: rebelsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "mattGibbon",
      title: "Matt Gibbon",
      firstname: "Matt",
      lastname: "Gibbon",
      teamMembers: {
        create: [
          { teamId: rebelsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "vaioliniEkuasi",
      title: "Vaiolini Ekuasi",
      firstname: "Vaiolini",
      lastname: "Ekuasi",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "joePincus",
      title: "Joe Pincus",
      firstname: "Joe",
      lastname: "Pincus",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "davidFeliuai",
      title: "David Feliuai",
      firstname: "David",
      lastname: "Feliuai",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "nickJooste",
      title: "Nick Jooste",
      firstname: "Nick",
      lastname: "Jooste",
      teamMembers: {
        create: [
          { teamId: rebelsId },
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
      key: "jakeStrachan",
      title: "Jake Strachan",
      firstname: "Jake",
      lastname: "Strachan",
      teamMembers: {
        create: [
          { teamId: rebelsId },
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
      key: "lukasRipley",
      title: "Lukas Ripley",
      firstname: "Lukas",
      lastname: "Ripley",
      teamMembers: {
        create: [
          { teamId: rebelsId },
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
      key: "angeloSmith",
      title: "Angelo Smith",
      firstname: "Angelo",
      lastname: "Smith",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: lockId },
        ],
      },
    },
    {
      key: "tuainaTaii Tualima",
      title: "Tuaina Taii Tualima",
      firstname: "Tuaina",
      lastname: "Taii Tualima",
      teamMembers: {
        create: [
          { teamId: rebelsId },
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
      key: "jamesTuttle",
      title: "James Tuttle",
      firstname: "James",
      lastname: "Tuttle",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "danielMaiava",
      title: "Daniel Maiava",
      firstname: "Daniel",
      lastname: "Maiava",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "darbyLancaster",
      title: "Darby Lancaster",
      firstname: "Darby",
      lastname: "Lancaster",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "davidVaihu",
      title: "David Vaihu",
      firstname: "David",
      lastname: "Vaihu",
      teamMembers: {
        create: [
          { teamId: rebelsId },
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
      key: "divadPalu",
      title: "Divad Palu",
      firstname: "Divad",
      lastname: "Palu",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "glenVaihu",
      title: "Glen Vaihu",
      firstname: "Glen",
      lastname: "Vaihu",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: outsideBackId },
        ],
      },
    },
    {
      key: "jackMaunder",
      title: "Jack Maunder",
      firstname: "Jack",
      lastname: "Maunder",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: scrumhalfId },
        ],
      },
    },
    {
      key: "lebronNaea",
      title: "Lebron Naea",
      firstname: "Lebron",
      lastname: "Naea",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: centreId },
        ],
      },
    },
    {
      key: "lukhanSalakaia-Loto",
      title: "Lukhan Salakaia-Loto",
      firstname: "Lukhan",
      lastname: "Salakaia-Loto",
      teamMembers: {
        create: [
          { teamId: rebelsId },
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
      key: "masonGordon",
      title: "Mason Gordon",
      firstname: "Mason",
      lastname: "Gordon",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: flyhalfId },
        ],
      },
    },
    {
      key: "robLeota",
      title: "Rob Leota",
      firstname: "Rob",
      lastname: "Leota",
      teamMembers: {
        create: [
          { teamId: rebelsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "zacHough",
      title: "Zac Hough",
      firstname: "Zac",
      lastname: "Hough",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: backrowId },
        ],
      },
    },
    {
      key: "isaacAedo Kailea",
      title: "Isaac Aedo Kailea",
      firstname: "Isaac",
      lastname: "Aedo Kailea",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "ethanDobbins",
      title: "Ethan Dobbins",
      firstname: "Ethan",
      lastname: "Dobbins",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: hookerId },
        ],
      },
    },
    {
      key: "cabousEloff",
      title: "Cabous Eloff",
      firstname: "Cabous",
      lastname: "Eloff",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "poneFa'amausili",
      title: "Pone Fa'amausili",
      firstname: "Pone",
      lastname: "Fa'amausili",
      teamMembers: {
        create: [
          { teamId: rebelsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "samTalakai",
      title: "Sam Talakai",
      firstname: "Sam",
      lastname: "Talakai",
      teamMembers: {
        create: [
          { teamId: rebelsId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "tanielaTupou",
      title: "Taniela Tupou",
      firstname: "Taniela",
      lastname: "Tupou",
      teamMembers: {
        create: [
          { teamId: rebelsId },
          { teamId: wallabiesId },
        ],
      },
      playerPositions: {
        create: [
          { positionId: propId },
        ],
      },
    },
    {
      key: "jordanUelese",
      title: "Jordan Uelese",
      firstname: "Jordan",
      lastname: "Uelese",
      teamMembers: {
        create: [
          { teamId: rebelsId },
          { teamId: wallabiesId },
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

export default getRebelsPlayers