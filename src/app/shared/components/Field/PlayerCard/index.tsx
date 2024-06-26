'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import { findPlayerTeamForCompetition, getPlayerTitle } from '@functions/players'

import type { PlayerWithPositions } from '@types'

import PlayerIcon from '@components/PlayerIcon'
import UnSelectPlayer from '@components/UnSelectPlayer'

interface PlayerCardProps {
  className: string,
  nonInteractive?: boolean,
  player?: PlayerWithPositions,
  positions: string[],
  positionTitle: string,
  teamSheetLayoutId: string,
}

const PlayerCard = (props: PlayerCardProps) => {
  const { className, nonInteractive, player, positions, positionTitle, teamSheetLayoutId } = props

  const teamContextValue = useContext(TeamContext)
  const { callbacks, competition, team } = teamContextValue

  const playerTeam = findPlayerTeamForCompetition(competition.id, player)
  const { 
    primaryColor: playerTeamPrimaryColor,
    secondaryColor: playerTeamSecondaryColor,
  } = playerTeam || {}

  const { primaryColor, secondaryColor } = team
  
  const {
    openModal,
    setSelectedPositions,
    setSelectedTeamSheetLayoutId,
  } = callbacks || {}

  const isPlayerSelected = !!player

  return (
    <div className={`${className}`}>
      <div
        className={`
          box-border rounded flex flex-col p-1 min-h-[50px] min-w-[80px] w-fit border hover:border-cyan-300 relative
          ${nonInteractive ? 'border-none cursor-default' : 'border-black cursor-pointer'}
        `}
        onClick={nonInteractive ? undefined : () => {
          setSelectedPositions!(positions)
          setSelectedTeamSheetLayoutId!(teamSheetLayoutId)
          openModal!()
        }}
      >
        <div className="flex align-middle text-center">
          <PlayerIcon
            isFaded={!isPlayerSelected}
            number={teamSheetLayoutId}
            primaryColor={playerTeamPrimaryColor || primaryColor}
            secondaryColor={playerTeamSecondaryColor || secondaryColor}
          />
        </div>

        {player && !nonInteractive && (
          <div className="flex justify-center items-center border rounded-full h-5 w-5 absolute -top-2.5 -right-2.5 bg-slate-200">
            <UnSelectPlayer teamSheetLayoutId={teamSheetLayoutId} />
          </div>
        )}

        <div className="font-bold truncate text-xs text-center mt-1 text-ellipsis w-20">
          {isPlayerSelected ? getPlayerTitle(player) : positionTitle}
        </div>
      </div>
    </div>
  )
}

  export default PlayerCard