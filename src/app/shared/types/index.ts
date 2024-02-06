import type { Prisma } from '@prisma/client'

export type PlayerWithPositions = Prisma.PlayerGetPayload<
  {
    include: {
      playerPositions: {
        include: {
          position: true,
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