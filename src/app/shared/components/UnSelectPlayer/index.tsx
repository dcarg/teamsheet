import { useContext } from 'react'
import type { MouseEvent } from 'react'

import type { TeamSheet } from '@prisma/client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { updateTeamSheet } from '@actions/teamSheet'

import TeamContext from '@contexts/teamContext'

type HandleClickParams = {
  e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  teamSheet: TeamSheet,
  teamSheetLayoutId: string,
}

const handleClick = (params: HandleClickParams) => {
  const { e, teamSheet, teamSheetLayoutId } = params

  e.stopPropagation()

  const data = teamSheet.data as { [key: string]: number }
  delete data[teamSheetLayoutId]

  const payload = {
    id: teamSheet.id,
    data,
  }

  updateTeamSheet(payload)
}

interface UnSelectPlayerProps {
  teamSheetLayoutId: string,
}

const UnSelectPlayer = (props: UnSelectPlayerProps) => {
  const { teamSheetLayoutId } = props

  const teamContextValue = useContext(TeamContext)
  const { teamSheet } = teamContextValue

  return (
    <div
      className={`
        flex items-center justify-center
        border rounded-full
        h-5 w-5
        absolute -top-2.5 -right-2.5
      `}
      onClick={e => handleClick({ e, teamSheet, teamSheetLayoutId })}
    >
      <FontAwesomeIcon icon={faXmark} color="#e5e7eb" />
    </div>
  )
}

export default UnSelectPlayer