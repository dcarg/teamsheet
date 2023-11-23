'use client'

import { useContext } from 'react'

import { redirect } from 'next/navigation'

import { createTeamsheet } from '@actions/teamsheet'

import TeamContext from '@contexts/teamContext'

import BaseModal from '@modals/BaseModal'

type GenerateCreateTeamSheetPayloadParams = {
  playerId: number,
  teamId: number,
  teamSheetLayoutId: number
}

// the redirect probably should not be in the server action
// server action should only have the logic for sending the create to the db
// this function should 
// 1. generate the payload
// 2. call the server action with that payload
// 3. redirect OR use the router to push the teamSheetId onto params
const generateCreateTeamSheetPayload = (params: GenerateCreateTeamSheetPayloadParams) => {
  const { playerId, teamId, teamSheetLayoutId } = params

  return {
    data: { [teamSheetLayoutId]: playerId },
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
    selectedTeamSheetLayoutId,
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
            teamSheetLayoutId: selectedTeamSheetLayoutId!,
          }))}
        >
          {player.title}
        </div>
      ))}
    </BaseModal>
  )
}

export default SelectPlayerModal