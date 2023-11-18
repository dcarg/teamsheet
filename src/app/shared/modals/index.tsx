'use client'
// 3. modal transitions in from top

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import CONSTANTS from '@constants'

interface BaseModalProps {
  callbacks: {
    closeModal: () => void,
  },
  children: React.ReactNode,
  showModal: boolean,
  title: string,
}

const BaseModal = (props: BaseModalProps) => {
  const {
    callbacks: {
      closeModal,
    },
    children,

    showModal,
    title,
  } = props

  if (!showModal) return null

  // Calculate position for modal
  const left = (window.innerWidth - CONSTANTS.MAX_SCREEN_WIDTH) / 2

  //transition-transform

  // `fixed top-0 left-[${left}px] bg-red-500 transition`

  return (
    <div className={`fixed top-0 left-[${left}px] bg-red-500 transition`}>
      <div className="flex justify-between">
        {title}

        <div
          className="flex items-center justify-center cursor-pointer h-5 w-5"
          onClick={() => closeModal()}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>

      {children}
    </div>
  )
}

export default BaseModal