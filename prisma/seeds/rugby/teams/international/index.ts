import fantasyTeam from '../fantasy'

import type { IdsObject } from '../../players'

const getInternationalTeams = (competitionIds: IdsObject) => {
  const {
    international: internationalId,
    rugbyChampionship: rugbyChampionshipId,
  } = competitionIds

  const internationalTeams = [
    fantasyTeam,
    {
      key: 'wallabies',
      title: 'Wallabies',
      primaryColor: '#F79710',
      secondaryColor: '#15534C',
      tertiaryColor: '',
      competitionTeams: {
        create: [
          { competitionId: internationalId },
          { competitionId: rugbyChampionshipId },
        ]
      }
    },
    {
      key: 'allBlacks',
      title: 'All Blacks',
      primaryColor: '#000000',
      secondaryColor: '#FFFFFF',
      tertiaryColor: '',
      competitionTeams: {
        create: [
          { competitionId: internationalId },
          { competitionId: rugbyChampionshipId },
        ]
      }
    }
  ]

  return internationalTeams
}

export default getInternationalTeams