'use client'

import { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons' 

import TeamContext from '@contexts/teamContext'

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

  if (!showModal) return null

  return (
    <div className="h-60 bg-red-500">
      <div className="flex justify-between">
        SelectPlayerModal

        <div
          className="flex items-center justify-center cursor-pointer h-5 w-5"
          onClick={() => closeModal()}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  )
}

export default SelectPlayerModal