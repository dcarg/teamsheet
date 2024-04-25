import type { IdsObject } from '../../players'

const getFantasyTeams = (competitionIds: IdsObject) => {
  // Seed the fantasy team AND
  // Add a fantasy competition team for each competition
  const competitionIdsArray = Object.values(competitionIds)

  const fantasyTeams = [
    {
      key: 'fantasy',
      title: 'Fantasy',
      primaryColor: '#808080',
      secondaryColor: '#7393B3',
      tertiaryColor: '#FFFFFF',
      competitionTeams: {
        create: competitionIdsArray.map(competitionId => ({ competitionId }))
      },
    },
  ]

  return fantasyTeams
}

export default getFantasyTeams
