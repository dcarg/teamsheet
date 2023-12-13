import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

interface PlayerIconProps {
  icon: 'faUser' | 'faUserPlus',
  margin?: number,
  number?: string,
  size?: SizeProp,
}

const PlayerIcon = (props: PlayerIconProps) => {
  const { icon, margin, number, size } = props

  const faIcons = { faUser, faUserPlus }

  return (
    <div className="flex relative w-full justify-center content-center">
      <FontAwesomeIcon
        icon={faIcons[icon]}
        size={size || '3x'}
        style={{ margin }}
      />

      <div className={`absolute bottom-1.5 m-auto text-xl text-white
        inset-x-${icon === 'faUser' ? '1/6' : '1/4'}`
      }>
        {number}
      </div>
    </div>
  )
}

export default PlayerIcon
