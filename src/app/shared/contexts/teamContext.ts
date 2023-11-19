import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

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

type TeamContext = {
  callbacks: {
    closeModal: () => void,
    openModal: () => void,
    setSelectedPosition: Dispatch<SetStateAction<string>>,
  },
  filteredPlayerList: PlayerWithIncludes[],
  showModal: boolean,
}

const defaultTeamContextValue = {
  callbacks: {
    closeModal: () => null,
    openModal: () => null,
    setSelectedPosition: () => null,
  },
  filteredPlayerList: [],
  showModal: false,
}

const TeamContext = createContext<TeamContext>(defaultTeamContextValue)

export default TeamContext