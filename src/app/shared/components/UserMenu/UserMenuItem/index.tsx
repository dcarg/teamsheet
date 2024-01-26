import { ReactNode } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface UserMenuItemProps {
  href?: string,
  icon: object,
  onClick?: () => void,
  text: string | ReactNode,
}

const UserMenuItem = (props: UserMenuItemProps) => {
  const { href, icon, onClick, text } = props

  return (
    <a
      className="flex px-4 py-2 hover:text-cyan-400"
      href={href}
      onClick={onClick}
    >
      <div className="flex justify-center w-[30px]">
        <FontAwesomeIcon icon={icon}/>
      </div>

      <div className="ml-2 font-semibold text-gray-800 hover:text-cyan-400">
        {text}
      </div>
    </a>
  )
}

export default UserMenuItem
