import type { Position, Team } from '@prisma/client'

// import { allBlacksPlayers } from './allBlacks/index'
// import { wallabiesPlayers } from './wallabies/index'

import getBluesPlayers from './blues'
import getBrumbiesPlayers from './brumbies'
import getChiefsPlayers from './chiefs'
import getCrusadersPlayers from './crusaders'
import getDruaPlayers from './drua'
import getForcePlayers from './force'
import getHighlandersPlayers from './highlanders'
import getHurricanesPlayers from './hurricanes'
import getMoanaPlayers from './moana'
import getRebelsPlayers from './rebels'
import getRedsPlayers from './reds'
import getWaratahsPlayers from './waratahs/index'

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
    ...getForcePlayers(positionIds, teamIds),
    ...getHighlandersPlayers(positionIds, teamIds),
    ...getHurricanesPlayers(positionIds, teamIds),
    ...getMoanaPlayers(positionIds, teamIds),
    ...getRebelsPlayers(positionIds, teamIds),
    ...getRedsPlayers(positionIds, teamIds),
    ...getWaratahsPlayers(positionIds, teamIds),
  ]

  return players
}

export default getPlayers