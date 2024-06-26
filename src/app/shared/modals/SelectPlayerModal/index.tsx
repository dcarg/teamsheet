'use client'

import { useContext } from 'react'

import { useRouter } from 'next/navigation'

import type { TeamSheet } from '@prisma/client'

import { createTeamSheet, updateTeamSheet } from '@actions/teamSheet'

import TeamContext from '@contexts/teamContext'

import BaseModal from '@modals/BaseModal'

import type { PlayerWithPositions } from '@types'

import PlayerListItem from '@components/PlayerListItem'

type Router = ReturnType<typeof useRouter>

type HandlePlayerSelectParams = {
  callbacks: { closeModal: () => void },
  competitionId: number,
  player: PlayerWithPositions,
  router: Router,
  teamId: number,
  teamSheet: TeamSheet | null,
  teamSheetLayoutId: string,
}

const handlePlayerSelect = async (params: HandlePlayerSelectParams) => {
  const {
    callbacks: { closeModal },
    competitionId,
    player,
    router,
    teamId,
    teamSheet,
    teamSheetLayoutId,
  } = params

  const payload = {
    competitionId,
    data: { [teamSheetLayoutId]: player },
    teamId,
  }

  if (teamSheet){
    const existingData = teamSheet.data as object

    const updatedDataPayload = {
      id: teamSheet.id,
      data: {
        ...existingData,
        ...payload.data
      },
    }

    await updateTeamSheet(updatedDataPayload)
  } else {
    const teamSheet = await createTeamSheet(payload)
  
    router.push(`?teamSheetId=${teamSheet.editId}`)
  }

  closeModal()
}

const SelectPlayerModal = () => {
  const router = useRouter()

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks,
    competition,
    filteredPlayers,
    selectedTeamSheetLayoutId,
    showModal,
    team,
    teamSheet,
  } = teamContextValue

  const { closeModal } = callbacks || {}

  const teamSheetData = teamSheet?.data as { [key: string]: PlayerWithPositions } | null
  const selectedPlayerIds = teamSheetData ? Object.values(teamSheetData).map(player => player.id) : []

  return (
    <BaseModal callbacks={{ closeModal: closeModal! }} showModal={showModal!} title="Select Player">
      {filteredPlayers?.map(player => {
        const isAlreadyAssigned = selectedPlayerIds.includes(player.id)

        return (
          <PlayerListItem
            key={player.id}
            competition={competition}
            disabled={isAlreadyAssigned}
            onClick={isAlreadyAssigned ? undefined : () => handlePlayerSelect({
              callbacks: { closeModal: closeModal! },
              competitionId: competition.id,
              player,
              router,
              teamId: team!.id,
              teamSheet,
              teamSheetLayoutId: selectedTeamSheetLayoutId!,
            })}
            player={player}
            team={team}
          />
        )
      })}
    </BaseModal>
  )
}

export default SelectPlayerModal
