import React from 'react'

import clsx from 'clsx'

import type { PlayerWithPositions } from '@types'
import type { Team } from '@prisma/client'

import PlayerIcon from '@components/PlayerIcon'
import UnSelectPlayer from '@components/UnSelectPlayer'

interface PlayerListItemProps {
  disabled?: boolean,
  nonInteractive?: boolean,
  onClick?: () => void,
  player?: PlayerWithPositions,
  team: Team,
  teamSheetLayoutId?: string,
}

const PlayerListItem = (props: PlayerListItemProps) => {
  const { disabled, nonInteractive, onClick, player, team, teamSheetLayoutId } = props

  const { primaryColor, secondaryColor } = team || {} // there is no team in the modal?

  const { playerPositions } = player || {}

  const playerPositionTitles = playerPositions?.map(playerPosition => playerPosition.position.title)

  const showCursorDefault = disabled || nonInteractive

  return (
    <div
      className={clsx(
        'border-b flex justify-between items-center w-full min-h-[50px] relative',
        showCursorDefault ? 'cursor-default' : 'cursor-pointer',
        {
          'hover:border-cyan-300 hover:bg-cyan-50': !disabled && !nonInteractive,
          'border-gray-300 bg-gray-200' : disabled,
        },
      )}
      onClick={onClick}
    >
      <div className="flex m-2">
        <div className="mr-3">
          <PlayerIcon
            isFaded={disabled}
            number={teamSheetLayoutId}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
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
