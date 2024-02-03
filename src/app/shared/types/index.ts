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

export type SimplePlayerRecord = {
  positions: string[],
  title: string,
}