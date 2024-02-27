import clsx from 'clsx'

import RugbyJersey from '@components/RugbyJersey'

interface PlayerIconProps {
  number?: string,
  primaryColor?: string,
  secondaryColor?: string,
  isFaded?: boolean,
}

const PlayerIcon = (props: PlayerIconProps) => {
  const { isFaded, number, primaryColor, secondaryColor } = props

  return (
    <div className="flex relative w-full justify-center content-center">
      <div className={clsx({ 'opacity-60': isFaded })}>
        <RugbyJersey primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </div>

      <div className="absolute bottom-1.5 text-l text-white font-semibold inset-x-1/4">
        {number}
      </div>
    </div>
  )
}

export default PlayerIcon
