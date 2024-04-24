'use client'

import { useContext } from 'react'

import { Button } from '@components/shadcn/button'

import ModalContext from '@contexts/modalContext'

const CreateTeamButton = () => {
  const modalContextValue = useContext(ModalContext)
  const {
    callbacks: {
      openCreateTeamModal,
    }
  } = modalContextValue

  return (
    <Button
      onClick={() => openCreateTeamModal()}
      variant="creative"
    >
      + Create
    </Button>
  )
}

export default CreateTeamButton