import React from 'react'

import type { PlayerWithPositions } from '@types'

import PlayerIcon from '@components/PlayerIcon'
import UnSelectPlayer from '@components/UnSelectPlayer'

interface PlayerListItemProps {
  disabled?: boolean,
  nonInteractive?: boolean,
  onClick?: () => void,
  player?: PlayerWithPositions,
  teamSheetLayoutId?: string,
}

const PlayerListItem = (props: PlayerListItemProps) => {
  const { disabled, nonInteractive, onClick, player, teamSheetLayoutId } = props
  const { playerPositions } = player || {}

  const playerPositionTitles = playerPositions?.map(playerPosition => playerPosition.position.title)

  return (
    <div 
      className={`
        border-b flex justify-between items-center w-full min-h-[50px] relative
        ${disabled ? 'cursor-default border-gray-300 bg-gray-200' : 'cursor-pointer'}
        ${nonInteractive ? 'cursor-default' : 'cursor-pointer'}
        ${!disabled && !nonInteractive ? 'hover:border-cyan-300 hover:bg-cyan-50' : ''}
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

      {player && teamSheetLayoutId && !nonInteractive && (
        <div className="mr-4">
          <UnSelectPlayer teamSheetLayoutId={teamSheetLayoutId} />
        </div>
      )}
    </div>
  )
}

export default PlayerListItem
