'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import type { PlayerWithPositions } from '@types'

import PlayerIcon from '@components/PlayerIcon'

interface PlayerCardProps {
  className: string,
  player?: PlayerWithPositions,
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
    <div className={`${className} h-[30px]`}> 
      <div
        className="box-border cursor-pointer flex flex-col min-h-[50px] min-w-[60px] w-fit border-2 hover:border-cyan-300"
        onClick={() => {
          setSelectedPosition(position)
          setSelectedTeamSheetLayoutId(teamSheetLayoutId)
          openModal()
        }}
      >
        <div className="flex align-middle">
          <div className='text-3xl text-white'>
            {teamSheetLayoutId}
          </div>

          <PlayerIcon
            icon={player?.id ? "faUser" : "faUserPlus"}
            // margin={5}
            // number={teamSheetLayoutId}
            size='2x'
          />
        </div>

        {player?.lastname || position}
      </div>
    </div>
  )
}

  export default PlayerCard