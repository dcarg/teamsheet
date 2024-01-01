import React from 'react'

import type { PlayerWithPositions } from '@types'

import PlayerIcon from '@components/PlayerIcon'
import UnSelectPlayer from '@components/UnSelectPlayer'

interface PlayerListItemProps {
  disabled?: boolean,
  onClick?: () => void,
  player?: PlayerWithPositions,
  teamSheetLayoutId?: string,
}

const PlayerListItem = (props: PlayerListItemProps) => {
  const { disabled, onClick, player, teamSheetLayoutId } = props
  const{ playerPositions } = player || {}

  const playerPositionTitles = playerPositions?.map(playerPosition => playerPosition.position.title)

  return (
    <div 
      className={`
        border-b cursor-pointer flex justify-between items-center w-full min-h-[50px] relative
        ${disabled ? 'bg-gray-200' : 'hover:bg-cyan-50 hover:border-cyan-300'}
        ${disabled ? 'border-gray-300' : 'hover:bg-cyan-50 hover:border-cyan-300'}
      `}
      onClick={onClick}
    >
      <div className="flex m-2">
        <div className="mr-3">
          <PlayerIcon number={teamSheetLayoutId} />
        </div>

        <div className="flex-column self-center overflow-hidden truncate items-center justify-center">
          <div className={`text-xl font-semibold ${disabled ? 'text-gray-400' : ''}`}>{player?.title || "+ Select Player"}</div>
          <div className={`${disabled ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{playerPositionTitles?.join(', ')}</div>
        </div>
      </div>

      {player && teamSheetLayoutId && (
        <div className="mr-4">
          <UnSelectPlayer teamSheetLayoutId={teamSheetLayoutId} />
        </div>
      )}
    </div>
  )
}

export default PlayerListItem
