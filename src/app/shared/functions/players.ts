import type { PlayerWithPositions } from '@types'

export const getPlayerTitle = (player: PlayerWithPositions) => {
  if (!player.id) return null

  const { firstname, lastname } = player || {}

  const firstNameInitial = firstname.slice(0,1)?.toUpperCase()

  return `${firstNameInitial}. ${lastname}`
}

type FilterPlayersParams = {
  players: PlayerWithPositions[],
  selectedPositions: string[],
}

export const filterPlayers = (params: FilterPlayersParams) => {
  const { players, selectedPositions } = params || {}

  let filteredPlayerList = players

  if (!selectedPositions.length) return filteredPlayerList

  filteredPlayerList = players.filter(player => {
    const { playerPositions } = player

    return playerPositions.some(({ position }) => selectedPositions.includes(position.key))
  })

  return filteredPlayerList
}

type SortSelectedPlayersParams = {
  filteredPlayers: PlayerWithPositions[],
  selectedPlayerIds: number[],
}

export const sortSelectedPlayers = (params: SortSelectedPlayersParams) => {
  const { filteredPlayers, selectedPlayerIds } = params || {}

  const selectedPlayers = filteredPlayers.filter(player => selectedPlayerIds.includes(player.id))
  const unselectedPlayers = filteredPlayers.filter(player => !selectedPlayerIds.includes(player.id))

  // Display Selected Players first in results
  const sortedPlayers = [...selectedPlayers, ...unselectedPlayers]

  return sortedPlayers
}