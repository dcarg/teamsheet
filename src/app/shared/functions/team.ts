import type { Team } from '@prisma/client'

export const generateUrls = (team?: Team) => ({
  teamDetailsUrl: `/admin/teams/${team?.id}`,
  teamPlayersUrl: `/admin/teams/${team?.id}/players`,
  teamsIndexUrl: '/admin/teams',
})