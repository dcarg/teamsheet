import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

import { Prisma, Team } from '@prisma/client'

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

// can this just be a generic object?
// { [key: string]: any }
type TeamContext = {
  callbacks: {
    closeModal: () => void,
    openModal: () => void,
    setSelectedPosition: Dispatch<SetStateAction<string>>,
    setSelectedTeamSheetLayoutId: Dispatch<SetStateAction<number | undefined>>,
  },
  filteredPlayerList: PlayerWithIncludes[],
  selectedTeamSheetLayoutId?: number,
  showModal: boolean,
  team: Team,
}

const defaultTeamContextValue = {
  callbacks: {
    closeModal: () => null,
    openModal: () => null,
    setSelectedPosition: () => null,
    setSelectedTeamSheetLayoutId: () => null,
  },
  filteredPlayerList: [],
  selectedTeamSheetLayoutId: null,
  showModal: false,
  team: {},
}

const TeamContext = createContext<TeamContext>(defaultTeamContextValue)

export default TeamContext