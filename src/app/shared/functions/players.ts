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

  filteredPlayerList = players.filter(player => {
    const { playerPositions } = player

    let filterPositions = ['lock', 'backrow', 'scrumhalf', 'flyhalf', 'centre', 'outside_back']

    switch (selectedTeamSheetLayoutId) {
      case ('19' || '20'):
        filterPositions = ['lock', 'backrow']

        return playerPositions.some(({ position }) => filterPositions.includes(position.key))
      case ('21' || '22' || '23'):

        return playerPositions.some(({ position }) => filterPositions.includes(position.key))
      default:
        return playerPositions.some(({ position }) => filterPositions.includes(position.key))
    }
  })

  return filteredPlayerList
}
