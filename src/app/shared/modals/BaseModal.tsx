'use client'

import { useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import useOutsideClick from '@hooks/useOutsideClick'

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

  const ref = useRef<HTMLDivElement>(null)

  useOutsideClick({
    callbacks: {
      action: closeModal,
    },
    enabled: showModal,
    ref,
  })

  if (!showModal) return null

  return (
    <div className="animate-slideFromTop bg-white border-x border-b  fixed h-screen top-0 w-fillColumn" ref={ref}>
      <div className="border-b border-slate-500 flex items-center justify-between h-topBarHeight p-3">
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