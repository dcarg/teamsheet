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
  player: PlayerWithPositions,
  router: Router,
  teamId: number,
  teamSheet: TeamSheet | null,
  teamSheetLayoutId: string,
}

const handlePlayerSelect = async (params: HandlePlayerSelectParams) => {
  const {
    callbacks: { closeModal },
    player,
    router,
    teamId,
    teamSheet,
    teamSheetLayoutId,
  } = params

  const payload = {
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
    filteredPlayers,
    selectedTeamSheetLayoutId,
    showModal,
    team,
    teamSheet,
  } = teamContextValue

  const { closeModal } = callbacks || {}

  const teamSheetData = teamSheet?.data as { [key: string]: number } | null
  const selectedPlayerIds = teamSheetData ? Object.values(teamSheetData) : []

  return (
    <BaseModal callbacks={{ closeModal: closeModal! }} showModal={showModal!} title="Select Player">
      {filteredPlayers?.map(player => {
        const isAlreadyAssigned = selectedPlayerIds.includes(player.id)

        return (
          <PlayerListItem
            key={player.id}
            disabled={isAlreadyAssigned}
            onClick={isAlreadyAssigned ? undefined : () => handlePlayerSelect({
              callbacks: { closeModal: closeModal! },
              player,
              router,
              teamId: team!.id,
              teamSheet,
              teamSheetLayoutId: selectedTeamSheetLayoutId!,
            })}
            player={player}
          />
        )
      })}
    </BaseModal>
  )
}

export default SelectPlayerModal
