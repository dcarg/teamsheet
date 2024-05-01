import type { Prisma } from '@prisma/client'

export type PlayerWithPositions = Prisma.PlayerGetPayload<
  {
    include: {
      playerPositions: {
        include: {
          position: true,
        },
      },
      teamMembers: {
        include: {
          team: {
            include: {
              competitionTeams: true,
            },
          },
        },
      },
    },
  }
>

export type TeamSheetWithRelations = Prisma.TeamSheetGetPayload<
  {
    include: {
      team: {
        include: {
          competitionTeams: {
            include: {
              competition: {
                include: {
                  sport: true,
                },
              },
            },
          },
        },
      },
    },
  }
>

export type TeamSheetWithCompetitionSportAndTeam = Prisma.TeamSheetGetPayload<
  {
    include: {
      competition: {
        include: { sport: true },
      },
      team: true,
    },
  }
>