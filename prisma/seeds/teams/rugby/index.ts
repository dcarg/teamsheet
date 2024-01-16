import { internationalTeams } from "./competition/international"
import { superRugbyTeams } from "./competition/superRugby"

export type CompetitionTeamModel = {
  key: string,
  title: string,
  primaryColor: string,
  secondaryColor: string,
  tertiaryColor: string,
}

export const competitionTeams = {
  international: internationalTeams,
  superRugby: superRugbyTeams,
}