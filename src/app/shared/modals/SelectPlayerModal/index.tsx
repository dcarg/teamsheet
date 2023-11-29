'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import BaseModal from '@modals/BaseModal'

const SelectPlayerModal = () => {
  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      closeModal,
    },
    filteredPlayers,
    showModal,
  } = teamContextValue

  return (
    <BaseModal callbacks={{ closeModal }} showModal={showModal} title="Select Player">
      <ul>
        {filteredPlayers.map(player => <li key={player.id}>{player.title}</li>)}
      </ul>
    </BaseModal>
  )
}

export default SelectPlayerModal