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