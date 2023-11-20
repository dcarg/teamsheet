'use client'

import { useContext } from 'react'

import TeamContext from '@contexts/teamContext'

interface PlayerCardProps {
  className: string,
  position: string,
}

const PlayerCard = (props: PlayerCardProps) => {
  const { className, position } = props

  const teamContextValue = useContext(TeamContext)
  const {
    callbacks: {
      openModal,
      setSelectedPosition,
    },
  } = teamContextValue

  return (
    <div className={className}>
      <div
        className="box-border h-32 w-32 border-2"
        onClick={() => {
          setSelectedPosition(position)
          openModal()
        }}
      >
        PlayerCard for {position}
      </div>
    </div>
  )
}

export default PlayerCard