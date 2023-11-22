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

type TeamContext = {
  callbacks: {
    closeModal: () => void,
    openModal: () => void,
    setSelectedPosition: Dispatch<SetStateAction<string>>,
    setSelectedTeamSheetPlace: Dispatch<SetStateAction<number | undefined>>,
  },
  filteredPlayerList: PlayerWithIncludes[],
  selectedTeamSheetPlace?: number,
  showModal: boolean,
  team: Team,
}

const defaultTeamContextValue = {
  callbacks: {
    closeModal: () => null,
    openModal: () => null,
    setSelectedPosition: () => null,
    setSelectedTeamSheetPlace: () => null,
  },
  filteredPlayerList: [],
  selectedTeamSheetPlace: null,
  showModal: false,
  team: {},
}

const TeamContext = createContext<TeamContext>(defaultTeamContextValue)

export default TeamContext