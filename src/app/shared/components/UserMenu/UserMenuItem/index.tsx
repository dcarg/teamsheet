

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface UserMenuItemProps {
  href?: string,
  icon: IconDefinition,
  onClick?: () => void,
  text?: string,
}

const UserMenuItem = (props: UserMenuItemProps) => {
  const { href, icon, onClick, text } = props

  return (
    <a
      className="flex px-4 py-2 group"
      href={href}
      onClick={onClick}
    >
      <div className="flex justify-center w-[30px] group-hover:text-cyan-400">
        <FontAwesomeIcon icon={icon}/>
      </div>

      <div className="ml-2 font-semibold text-gray-800 group-hover:text-cyan-400">
        {text}
      </div>
    </a>
  )
}

export default UserMenuItem
