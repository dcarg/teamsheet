import type { Competition } from '@prisma/client'

import getFantasyTeams from './fantasy'
import getInternationalTeams from './international'
import getRugbyChampionshipTeams from './rugbyChampionship'
import getSuperRugbyTeams from './superRugby'

export type IdsObject = { [key: string]: number }

const getTeams = (competitions: Competition[]) => {
  const competitionIds = competitions.reduce<IdsObject>((acc, competition) => {
    acc[competition.key] = competition.id
    return acc
  }, {})

   const teams = [
    ...getFantasyTeams(competitionIds),
    ...getInternationalTeams(competitionIds),
    ...getRugbyChampionshipTeams(competitionIds),
    ...getSuperRugbyTeams(competitionIds),
  ]

  return teams
}

export default getTeams