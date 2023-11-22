'use client'

import { useContext } from 'react'

import { createTeamsheet } from '@actions/teamsheet'

import TeamContext from '@contexts/teamContext'

import BaseModal from '@modals/BaseModal'

type GenerateCreateTeamSheetPayloadParams = {
  playerId: number,
  teamId: number,
  teamSheetPlace: number
}

const generateCreateTeamSheetPayload = (params: GenerateCreateTeamSheetPayloadParams) => {
  const { playerId, teamId, teamSheetPlace } = params

  return {
    data: { [teamSheetPlace]: playerId },
    teamId,
  } 
}

const SelectPlayerModal = () => {
  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      closeModal,
    },
    filteredPlayerList,
    selectedTeamSheetPlace,
    showModal,
    team,
  } = teamContextValue

  return (
    <BaseModal callbacks={{ closeModal }} showModal={showModal} title="Select Player">
      {filteredPlayerList.map(player => (
        <div
          className="cursor-pointer hover:text-cyan-500"
          key={player.id}
          onClick={() => createTeamsheet(generateCreateTeamSheetPayload({
            playerId: player.id,
            teamId: team.id,
            teamSheetPlace: selectedTeamSheetPlace!,
          }))}
        >
          {player.title}
        </div>
      ))}
    </BaseModal>
  )
}

export default SelectPlayerModal