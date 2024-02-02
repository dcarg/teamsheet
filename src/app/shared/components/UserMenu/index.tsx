'use client'

import React, { useState } from 'react'

import isMobileBrowser from 'is-mobile'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered, faRightFromBracket, faUser, faUsersRectangle } from '@fortawesome/free-solid-svg-icons'

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'

import Button from '@components/Button'

import UserMenuItem from './UserMenuItem'

interface UserMenuProps {
  user: any,
}

const UserMenu = (props: UserMenuProps) => {
  const { user } = props
  const { given_name } = user

  const [isOpen, setIsOpen] = useState(false)

  const isMobile = isMobileBrowser()

  return (
    <div className="relative">
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

            <UserMenuItem
              icon={faRightFromBracket}
              textComponent={<LogoutLink>Logout</LogoutLink> }
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
