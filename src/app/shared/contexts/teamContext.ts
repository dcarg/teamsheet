import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

import type { Competition, Team, TeamSheet } from '@prisma/client'

import type { PlayerWithPositions } from '@types'

type TeamContext = {
  callbacks?: {
    closeModal: () => void,
    openModal: () => void,
    setSelectedPositions: Dispatch<SetStateAction<string[]>>,
    setSelectedTeamSheetLayoutId: Dispatch<SetStateAction<string | undefined>>,
  },
  competition: Competition,
  filteredPlayers?: PlayerWithPositions[],
  selectedTeamSheetLayoutId?: string,
  showModal?: boolean,
  team: Team,
  teamSheet: TeamSheet | null,
}

// @ts-ignore: Argument of type {} is not assignable to parameter of type TeamContext
const TeamContext = createContext<TeamContext>({})

export default TeamContext