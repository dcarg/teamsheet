'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import type { PlayerWithPositions } from '@types'

import PlayerIcon from '@components/PlayerIcon'

interface PlayerCardProps {
  className: string,
  player?: PlayerWithPositions,
  position: string,
  positionTitle: string,
  teamSheetLayoutId: string,
}

const PlayerCard = (props: PlayerCardProps) => {
  const { className, player, position, positionTitle, teamSheetLayoutId } = props

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      openModal,
      setSelectedPosition,
      setSelectedTeamSheetLayoutId,
    },
  } = teamContextValue

  const playerSelected = !!player?.id
  
  return (
    <div className={`${className} h-[30px]`}> 
      <div
        className="box-border border-black rounded cursor-pointer flex flex-col p-2 min-h-[50px] min-w-[80px] w-fit border hover:border-cyan-300"
        onClick={() => {
          setSelectedPosition(position)
          setSelectedTeamSheetLayoutId(teamSheetLayoutId)
          openModal()
        }}
      >
        <div className="flex align-middle text-center">
          {/* <div className='text-3xl text-white'>
            {teamSheetLayoutId}
          </div> */}

          <PlayerIcon
            icon={playerSelected ? "faUser" : "faUserPlus"}
            number={teamSheetLayoutId}
            selected={playerSelected}
            size='2x'
          />
        </div>

        {player?.lastname || positionTitle}
      </div>
    </div>
  )
}

  export default PlayerCard