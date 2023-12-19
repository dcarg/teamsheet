import React from 'react';

import type { PlayerWithPositions } from '@types'

import PlayerIcon from '@components/PlayerIcon'

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
        border cursor-pointer flex w-full h-[50px]
        ${disabled ? 'bg-gray-200' : 'hover:bg-cyan-50 hover:border-cyan-300'}
        ${disabled ? 'border-gray-300' : 'hover:bg-cyan-50 hover:border-cyan-300'}
      `}
      onClick={onClick}
    >
      <div>
        <PlayerIcon
          number={teamSheetLayoutId}
        />
      </div>

      <div className="ml-3 self-center overflow-hidden truncate">
        <h2 className={`text-xl font-semibold mb-[2px] ${disabled && 'text-gray-400'}`}>{player?.title || "+ Select Player"}</h2>
        <p className={`${disabled ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{playerPositionTitles?.join(', ')}</p>
      </div>
    </div>
  );
}

export default PlayerListItem
