'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

import type { PlayerWithPositions } from '@types'

import PlayerIcon from '@components/PlayerIcon'
import UnSelectPlayer from '@components/UnSelectPlayer'

interface PlayerCardProps {
  className: string,
  player?: PlayerWithPositions,
  positions: string[],
  positionTitle: string,
  teamSheetLayoutId: string,
}

const PlayerCard = (props: PlayerCardProps) => {
  const { className, player, positions, positionTitle, teamSheetLayoutId } = props

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      openModal,
      setSelectedPositions,
      setSelectedTeamSheetLayoutId,
    },
  } = teamContextValue

  const isPlayerSelected = !!player?.id

  return (
    <div className={`${className} h-[30px]`}>
      <div
        className="box-border border-black rounded cursor-pointer flex flex-col p-1 min-h-[50px] min-w-[80px] w-fit border hover:border-cyan-300 relative"
        onClick={() => {
          setSelectedPositions(positions)
          setSelectedTeamSheetLayoutId(teamSheetLayoutId)
          openModal()
        }}
      >
        <div className="flex align-middle text-center">
          <PlayerIcon
            number={teamSheetLayoutId}
            unSelected={!isPlayerSelected}
            size='2x'
          />

          {player && (
            <div className="flex justify-center items-center border rounded-full h-5 w-5 absolute -top-2.5 -right-2.5 bg-slate-200">
              <UnSelectPlayer teamSheetLayoutId={teamSheetLayoutId} />
            </div>
          )}
        </div>

        {player?.lastname || positionTitle}
      </div>
    </div>
  )
}

  export default PlayerCard