'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

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
  const { callbacks } = teamContextValue
  const {
    openModal,
    setSelectedPositions,
    setSelectedTeamSheetLayoutId,
  } = callbacks || {}

  const isPlayerSelected = !!player?.id

  return (
    <div className={`${className} h-[30px]`}>
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
            number={teamSheetLayoutId}
            unSelected={!isPlayerSelected}
          />

          {player && !nonInteractive && (
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