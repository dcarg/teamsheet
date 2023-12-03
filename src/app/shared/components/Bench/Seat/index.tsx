'use client'

import { useContext } from 'react'

import type { Prisma } from '@prisma/client'

import TeamContext from '@contexts/teamContext'

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

interface SeatProps {
  player?: PlayerWithIncludes,
  position: string,
  teamSheetLayoutId: string,
}

const Seat = (props: SeatProps) => {
  const { player, position, teamSheetLayoutId } = props

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      openModal,
      setSelectedPosition,
      setSelectedTeamSheetLayoutId,
    },
  } = teamContextValue

  return (
    <div
      className="border cursor-pointer h-10 hover:bg-cyan-50 hover:border-cyan-300"
      onClick={() => {
        setSelectedPosition(position)
        setSelectedTeamSheetLayoutId(teamSheetLayoutId)
        openModal()
      }}
    >
      {player?.title}
    </div>
  )
}

export default Seat