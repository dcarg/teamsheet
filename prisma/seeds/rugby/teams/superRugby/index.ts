import type { IdsObject } from '../../players'

const getSuperRugbyTeams = (competitionIds: IdsObject) => {
  const {
    superRugby: superRugbyId,
  } = competitionIds

  const superRugbyTeams = [
    {
      key: 'blues',
      title: 'Blues',
      primaryColor: '#205CB3',
      secondaryColor: '#0b1864',
      tertiaryColor: '#FFFFFF',
      competitionTeams: {
        create: [
          { competitionId: superRugbyId },
        ]
      }
    },
    {
      key: 'brumbies',
      title: 'Brumbies',
      primaryColor: '#002b54',
      secondaryColor: '#ffc222',
      tertiaryColor: '#FFFFFF',
      competitionTeams: {
        create: [
          { competitionId: superRugbyId },
        ]
      }
    },
    {
      key: 'chiefs',
      title: 'Chiefs',
      primaryColor: '#000000',
      secondaryColor: '#E1AC2D',
      tertiaryColor: '#B53931',
      competitionTeams: {
        create: [
          { competitionId: superRugbyId },
        ]
      }
    },
    {
      key: 'crusaders',
      title: 'Crusaders',
      primaryColor: '#E61D29',
      secondaryColor: '#000000',
      tertiaryColor: '#FFFFFF',
      competitionTeams: {
        create: [
          { competitionId: superRugbyId },
        ]
      }
    },
    {
      key: 'drua',
      title: 'Drua',
      primaryColor: '#151AB7',
      secondaryColor: '#FFFFFF',
      tertiaryColor: '',
      competitionTeams: {
        create: [
          { competitionId: superRugbyId },
        ]
      }
    },
    {
      key: 'force',
      title: 'Force',
      primaryColor: '#1E44CE',
      secondaryColor: '#FFFFFF',
      tertiaryColor: '',
      competitionTeams: {
        create: [
          { competitionId: superRugbyId },
        ]
      }
    },
    {
      key: 'highlanders',
      title: 'Highlanders',
      primaryColor: '#1F2C3F',
      secondaryColor: '#F2BD43',
      tertiaryColor: '#7f2852',
      competitionTeams: {
        create: [
          { competitionId: superRugbyId },
        ]
      }
    },
    {
      key: 'hurricanes',
      title: 'Hurricanes',
      primaryColor: '#FACA03',
      secondaryColor: '#000000',
      tertiaryColor: '',
      competitionTeams: {
        create: [
          { competitionId: superRugbyId },
        ]
      }
    },
    {
      key: 'moana',
      title: 'Moana Pasifika',
      primaryColor: '#09124B',
      secondaryColor: '#36A9B7',
      tertiaryColor: '',
      competitionTeams: {
        create: [
          { competitionId: superRugbyId },
        ]
      }
    },
    {
      key: 'rebels',
      title: 'Rebels',
      primaryColor: '#060662',
      secondaryColor: '#8D0D4F',
      tertiaryColor: '',
      competitionTeams: {
        create: [
          { competitionId: superRugbyId },
        ]
      }
    },
    {
      key: 'reds',
      title: 'Reds',
      primaryColor: '#5E0224',
      secondaryColor: '#FFFFFF',
      tertiaryColor: '',
      competitionTeams: {
        create: [
          { competitionId: superRugbyId },
        ]
      }
    },
    {
      key: 'waratahs',
      title: 'Waratahs',
      primaryColor: '#43B3E6',
      secondaryColor: '#FFFFFF',
      tertiaryColor: '#A92A38',
      competitionTeams: {
        create: [
          { competitionId: superRugbyId },
        ]
      }
    },
  ]

  return superRugbyTeams
}

export default getSuperRugbyTeams
