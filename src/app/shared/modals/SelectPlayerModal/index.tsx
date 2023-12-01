'use client'

import { useContext } from 'react'

import { useRouter } from 'next/navigation'

import { createTeamSheet } from '@actions/teamSheet'

import TeamContext from '@contexts/teamContext'

import BaseModal from '@modals/BaseModal'

type Router = ReturnType<typeof useRouter>

type HandlePlayerSelectParams = {
  callbacks: { closeModal: () => void },
  playerId: number,
  router: Router,
  teamId: number,
  teamSheetLayoutId: number,
}

const handlePlayerSelect = async (params: HandlePlayerSelectParams) => {
  const {
    callbacks: { closeModal },
    playerId,
    router,
    teamId,
    teamSheetLayoutId,
  } = params

  const payload = {
    data: { [teamSheetLayoutId]: playerId },
    teamId,
  }

  const teamSheet = await createTeamSheet(payload)

  router.push(`?teamSheetId=${teamSheet.id}`)
  closeModal()
}

const SelectPlayerModal = () => {
  const router = useRouter()

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      closeModal,
    },
    filteredPlayers,
    selectedTeamSheetLayoutId,
    showModal,
    team,
  } = teamContextValue

  return (
    <BaseModal callbacks={{ closeModal }} showModal={showModal} title="Select Player">
      {filteredPlayers.map(player => (
        <div
          className="cursor-pointer hover:text-cyan-500"
          key={player.id}
          onClick={() => handlePlayerSelect({
            callbacks: { closeModal },
            playerId: player.id,
            router,
            teamId: team.id,
            teamSheetLayoutId: selectedTeamSheetLayoutId!,
          })}
        >
          {player.title}
        </div>
      ))}
    </BaseModal>
  )
}

export default SelectPlayerModal