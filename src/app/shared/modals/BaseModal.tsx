'use client'

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
  const left = (window.innerWidth - CONSTANTS.MAX_SCREEN_WIDTH) / 2 // this works but shouldn't?

  return (
    <div className={`animate-slideFromTop bg-white border fixed h-screen top-0 left-[${left}px] w-fillColumn`}>
      <div className="border-b border-slate-500 flex justify-between">
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