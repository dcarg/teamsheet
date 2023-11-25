import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

import type { Prisma, Team, TeamSheet } from '@prisma/client'

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
    setSelectedTeamSheetLayoutId: Dispatch<SetStateAction<number | undefined>>,
  },
  filteredPlayerList: PlayerWithIncludes[],
  selectedTeamSheetLayoutId?: number,
  showModal: boolean,
  team: Team,
  teamSheet: TeamSheet | null,
}

// @ts-ignore: Argument of type {} is not assignable to paramter of type TeamContext
const TeamContext = createContext<TeamContext>({})

export default TeamContext