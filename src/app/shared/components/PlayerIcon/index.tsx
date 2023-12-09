import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'

interface PlayerIconProps {
  icon: string,
  margin: number,
  number?: string,
  size?: string,
}

const PlayerIcon = (props: PlayerIconProps) => {
  const { icon, margin, number, size } = props

  const faIcons = { faUser, faUserPlus }

  return (
    <div className="flex relative w-full justify-center content-center">
      <FontAwesomeIcon
        icon={faIcons[icon]}
        size={size || '3x'}
        style={{
          margin,
        }}
      />

      <div className={`absolute inset-x-${icon === 'faUser' ? '1/6' : '1/4'} bottom-1.5 m-auto text-xl text-white`}>
        {number}
      </div>
    </div>
  )
}

export default PlayerIcon
