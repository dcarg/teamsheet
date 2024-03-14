'use client'

import React, { useRef, useState } from 'react'

import isMobileBrowser from 'is-mobile'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered, faRightFromBracket, faUsersRectangle } from '@fortawesome/free-solid-svg-icons'

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'

import Button from '@components/Button'

import useOutsideClick from '@hooks/useOutsideClick'

import UserMenuItem from './UserMenuItem'

interface UserMenuProps {
  user: any,
}

const UserMenu = (props: UserMenuProps) => {
  const { user } = props
  const { given_name } = user

  const [isOpen, setIsOpen] = useState(false)

  const isMobile = isMobileBrowser()

  const ref = useRef<HTMLDivElement>(null)

  useOutsideClick({
    callbacks: {
      action: () => setIsOpen(false)
    },
    enabled: isOpen,
    ref, 
  })

  return (
    <div className="relative" ref={ref}>
      <Button
        className="bg-transparent hover:bg-transparent"
        icon={
          <FontAwesomeIcon
            className="group-hover:text-cyan-400"
            size="xl"
            icon={isOpen ? faBarsStaggered : faBars}
          />
        }
        onClick={() => setIsOpen(!isOpen)}
        text={!isMobile && given_name ? given_name : ''}
        textProps="font-semibold group-hover:text-cyan-400"
      />

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <div className="py-2">
            {/* TODO: Add Profile Page form functionality then show this UserMenuItem */}
            {/* <UserMenuItem 
              href="/profile"
              icon={faUser}
              text="Profile"
            /> */}
            
            <UserMenuItem 
              href="/teamSheets"
              icon={faUsersRectangle}
              text="Team Sheets"
            />

            <LogoutLink className="flex px-4 py-2 group">
              <div className="flex justify-center w-[30px] group-hover:text-cyan-400">
                <FontAwesomeIcon icon={faRightFromBracket}/>
              </div>

              <div className="ml-2 font-semibold text-gray-800 group-hover:text-cyan-400">
                Logout
              </div>
            </LogoutLink>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
