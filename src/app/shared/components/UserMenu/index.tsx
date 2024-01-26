'use client'

import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered, faRightFromBracket, faUser, faUsersRectangle } from '@fortawesome/free-solid-svg-icons'

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'

import UserMenuItem from './UserMenuItem'

interface UserMenuProps {
  user: any,
}

const UserMenu = (props: UserMenuProps) => {
  const { user } = props
  const { username } = user

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <button
        className="flex items-center text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {username && (
          <span className="mr-2">{username}</span>
        )}
        
        <FontAwesomeIcon
          className={`${isOpen ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400`}
          size="xl"
          icon={isOpen ? faBarsStaggered : faBars}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <div className="py-2 items-center justify-items-center justify-center content-center">
            <UserMenuItem 
              href="#"
              icon={faUser}
              text="Profile"
            />
            
            <UserMenuItem 
              href="#"
              icon={faUsersRectangle}
              text="TeamSheets"
            />

            <UserMenuItem
              icon={faRightFromBracket}
              text={<LogoutLink>Logout</LogoutLink> }
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
