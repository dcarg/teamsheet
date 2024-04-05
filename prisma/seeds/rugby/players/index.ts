import type { Position, Team } from '@prisma/client'

// import { allBlacksPlayers } from './allBlacks/index'
// import { wallabiesPlayers } from './wallabies/index'

import getBluesPlayers from './blues'
import getBrumbiesPlayers from './brumbies'
import getChiefsPlayers from './chiefs'
import getCrusadersPlayers from './crusaders'
import getDruaPlayers from './drua'

// import { force as forcePlayers } from './force/index'
// import { highlanders as highlandersPlayers } from './highlanders/index'
// import { hurricanes as hurricanesPlayers } from './hurricanes/index'
// import { moana as moanaPlayers } from './moana/index'
// import { rebels as rebelsPlayers } from './rebels/index'
// import { reds as redsPlayers } from './reds/index'
// import { waratahs as waratahsPlayers } from './waratahs/index'

export type IdsObject = { [key: string]: number }

const getPlayers = (positions: Position[], teams: Team[]) => {
  const positionIds = positions.reduce<IdsObject>((acc, position) => {
    acc[position.key] = position.id
    return acc
  }, {})

  const teamIds = teams.reduce<IdsObject>((acc, team) => {
    acc[team.key] = team.id
    return acc
  }, {})

  const players = [
    ...getBluesPlayers(positionIds, teamIds),
    ...getBrumbiesPlayers(positionIds, teamIds),
    ...getChiefsPlayers(positionIds, teamIds),
    ...getCrusadersPlayers(positionIds, teamIds),
    ...getDruaPlayers(positionIds, teamIds),
  ]

  return players
}

export default getPlayers