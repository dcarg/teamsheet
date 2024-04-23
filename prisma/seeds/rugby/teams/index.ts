import type { Competition } from '@prisma/client'

import getInternationalTeams from './international'
import getRugbyChampionShipTeams from './rugbyChampionship'
import getSuperRugbyTeams from './superRugby'

export type IdsObject = { [key: string]: number }

const getTeams = (competitions: Competition[]) => {
  const competitionIds = competitions.reduce<IdsObject>((acc, competition) => {
    acc[competition.key] = competition.id
    return acc
  }, {})

   const teams = [
    ...getInternationalTeams(competitionIds),
    ...getRugbyChampionShipTeams(competitionIds),
    ...getSuperRugbyTeams(competitionIds),
  ]

  return teams
}

export default getTeams