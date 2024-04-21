'use client'

import { useContext } from 'react'

import ModalContext from '@contexts/modalContext'

import TeamForm from '@forms/TeamForm'

import BaseModal from '@modals/BaseModal'

const CreateTeamModal = () => {
  const modalContextValue = useContext(ModalContext)
  const {
    callbacks: {
      closeCreateTeamModal,
    },
    showCreateTeamModal,
  } = modalContextValue

  return (
    <BaseModal callbacks={{ closeModal: closeCreateTeamModal }} showModal={showCreateTeamModal} title="Create Team">
      <div className="m-4">
        <TeamForm />
      </div>
    </BaseModal>
  )
}

export default CreateTeamModal