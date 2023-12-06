'use client'

import { useContext } from 'react'

import type { Prisma } from '@prisma/client'

import TeamContext from '@contexts/teamContext'

import PlayerIcon from '@components/PlayerIcon'

type PlayerWithIncludes = Prisma.PlayerGetPayload<
  {
    include: {
      playerPositions: {
        include: {
          position: true
        }
      }
    }
  }
>

interface PlayerCardProps {
  className: string,
  player?: PlayerWithIncludes,
  position: string,
  teamSheetLayoutId: string,
}

const PlayerCard = (props: PlayerCardProps) => {
  const { className, player, position, teamSheetLayoutId } = props

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      openModal,
      setSelectedPosition,
      setSelectedTeamSheetLayoutId,
    },
  } = teamContextValue
  
  return (
    <div className={className}> 
      <div
        className="box-border cursor-pointer h-15 md:h-20 w-15 md:w-20 border-2 hover:border-cyan-300 content-center justify-center overflow-hidden truncate"
        onClick={() => {
          setSelectedPosition(position)
          setSelectedTeamSheetLayoutId(teamSheetLayoutId)
          openModal()
        }}
      >
        <PlayerIcon
          playerId={player?.id}
          teamSheetLayoutId={teamSheetLayoutId}
        />

        {player?.title || position}
      </div>
    </div>
  )
}

export default PlayerCard