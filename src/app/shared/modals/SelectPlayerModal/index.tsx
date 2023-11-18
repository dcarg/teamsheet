'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import type { Player } from '@prisma/client'

interface SelectPlayerModalProps {
  players: Player[],
}

const SelectPlayerModal = (props: SelectPlayerModalProps) => {
  const { players } = props

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      closeModal,
    },
    showModal,
  } = teamContextValue

  if (!showModal) return null

  return (
    <div className="h-60 w-60 bg-red-500">
      SelectPlayerModal
    </div>
  )
}

export default SelectPlayerModal