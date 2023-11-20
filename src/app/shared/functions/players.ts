import { Prisma } from '@prisma/client'

type PlayerWithIncludes = Prisma.PlayerGetPayload<
  {
    include: {
      playerPositions: {
        include: {
          position: true
        }
      }
    }
  }
>

type FilterPlayersParams = {
  players: PlayerWithIncludes[],
  selectedPosition: string,
}

export const filterPlayers = (params: FilterPlayersParams) => {
  const { players, selectedPosition } = params || {}

  let filteredPlayerList = players

  if (selectedPosition){
    filteredPlayerList = players.filter(player => {
      const { playerPositions } = player

      return playerPositions.some(({ position }) => position.key === selectedPosition)
    })
  }

  return filteredPlayerList
}
