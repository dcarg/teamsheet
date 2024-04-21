'use client'

import { useContext } from 'react'

import ModalContext from '@contexts/modalContext'

import BaseModal from '@modals/BaseModal'


const CreateTeamModal = () => {
  const modalContextValue = useContext(ModalContext)
  const {
    callbacks: {
      closeCreateTeamModal,
    },
    showCreateTeamModal
  } = modalContextValue

  return (
    <BaseModal callbacks={{ closeModal: closeCreateTeamModal }} showModal={showCreateTeamModal!} title="Create Team">
      Create Team Form here
    </BaseModal>
  )
}

export default CreateTeamModal