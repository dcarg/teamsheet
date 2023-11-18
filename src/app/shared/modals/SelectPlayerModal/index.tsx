'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import BaseModal from '@modals/.'

const SelectPlayerModal = () => {
  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      closeModal,
    },
    filteredPlayerList,
    showModal,
  } = teamContextValue

  console.log(filteredPlayerList, 'filteredPlayerList')

  return (
    <BaseModal callbacks={{ closeModal }} showModal={showModal} title="Select Player">
      <ul>
        {filteredPlayerList.map(player => <li>{player.title}</li>)}
      </ul>
    </BaseModal>
  )
}

export default SelectPlayerModal