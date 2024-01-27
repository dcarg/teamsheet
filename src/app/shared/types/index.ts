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

export type TeamSheetWithTeam = Prisma.TeamSheetGetPayload<
  {
    include: {
      team: true,
    },
  }
>