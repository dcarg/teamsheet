'use client'

import { useState } from 'react'

import ModalContext from '@contexts/modalContext'

interface ModalContentProps {
  children: React.ReactNode,
}

const ModalContent = (props: ModalContentProps) => {
  const { children } = props

  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false)

  const modalContextValue = {
    callbacks: {
      closeCreateTeamModal: () => setShowCreateTeamModal(false),
      openCreateTeamModal: () => setShowCreateTeamModal(true),
    },
    showCreateTeamModal,
  }

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContent