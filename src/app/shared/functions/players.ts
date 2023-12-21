import type { PlayerWithPositions } from '@types'

type FilterPlayersParams = {
  players: PlayerWithPositions[],
  selectedPosition: string,
  selectedTeamSheetLayoutId: string,
}

export const filterPlayers = (params: FilterPlayersParams) => {
  const { players, selectedPosition, selectedTeamSheetLayoutId } = params || {}

  let filteredPlayerList = players

  if (selectedPosition){
    filteredPlayerList = players.filter(player => {
      const { playerPositions } = player

      return playerPositions.some(({ position }) => position.key === selectedPosition)
    })
    return filteredPlayerList
  }

  // If No Selected Position (i.e. Bench 19-23)
  // Filter players by selectedTeamSheetLayoutId below:
  filteredPlayerList = players.filter(player => {
    const { playerPositions } = player

    let filterPositions: String[] = []

    switch (selectedTeamSheetLayoutId) {
      case ('19' || '20'):
        filterPositions = ['lock', 'backrow']

        return playerPositions.some(({ position }) => filterPositions.includes(position.key))
      case ('21' || '22' || '23'):
        filterPositions = ['lock', 'backrow', 'scrumhalf', 'flyhalf', 'centre', 'outside_back']

        return playerPositions.some(({ position }) => filterPositions.includes(position.key))
      default:
        return player
    }
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