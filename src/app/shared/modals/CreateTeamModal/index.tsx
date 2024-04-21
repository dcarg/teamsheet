'use client'

import { useContext } from 'react'

import type { Team } from '@prisma/client'

import type { FailedAction, SuccessfulAction } from '@actions/types'

import { useToast } from '@components/shadcn/use-toast'

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

  const { toast } = useToast()

  const afterActionFn = (response: FailedAction & SuccessfulAction<Team>) => {
    const { success, error } = response

    if (!success) {
      toast({ title: error, variant: 'destructive' })
    } else {
      toast({ title: 'Team Created' })
    }

    closeCreateTeamModal()
  }

  return (
    <BaseModal callbacks={{ closeModal: closeCreateTeamModal }} showModal={showCreateTeamModal} title="Create Team">
      <div className="m-4">
        <TeamForm callbacks={{ afterActionFn }} />
      </div>
    </BaseModal>
  )
}

export default CreateTeamModal