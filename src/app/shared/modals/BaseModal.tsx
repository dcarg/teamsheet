'use client'

import { useEffect, useRef } from 'react'

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

  // Disable scrolling on screen behind the modal
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden')
  }, [showModal])

  if (!showModal) return null

  return (
    <div
      className={`
        animate-slideFromTop
        bg-white
        border-x
        fixed top-0
        h-full w-screen max-w-column
        overflow-scroll
      `}
      ref={ref}
    >
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