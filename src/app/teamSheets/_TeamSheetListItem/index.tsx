import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

import type { TeamSheetWithRelations } from '@types'

interface TeamSheetListItemProps {
  teamSheet: TeamSheetWithRelations,
}

const TeamSheetListItem = (props: TeamSheetListItemProps) => {
  const { teamSheet } = props || {}
  const { editId, shareId, team, title: teamSheetTitle } = teamSheet
  const { competitionTeams, key: teamKey, title: teamTitle } = team

  const hasMultipleCompetitionTeams = competitionTeams.length > 1
  const firstCompetitionTeam = competitionTeams[0]
  const { 
    competition: {
      title: competitionTitle,
      sport: {
        key: sportKey,
      },
    },
  } = firstCompetitionTeam

  return (
    <div className="flex border rounded mb-3 p-4 w-full justify-between">
      <div className="flex flex-col">
        <div className="font-semibold">
          {teamSheetTitle || `Team Sheet #${shareId.substring(0,8)}`}
        </div>
        
        <div className="flex text-sm text-slate-400">
          <div>{teamTitle}</div>

          {!hasMultipleCompetitionTeams && (
            <div>, {competitionTitle}</div>
          )}
        </div>
      </div>

      <div className="flex items-center">
        <Link href={`${process.env.NEXT_PUBLIC_VERCEL_URL}/${sportKey}/${teamKey}/share?teamSheetId=${shareId}`}>
          <FontAwesomeIcon
            className="cursor-pointer ml-3 hover:text-cyan-400"
            icon={faShareFromSquare}
          />
        </Link>

        <Link href={`${process.env.NEXT_PUBLIC_VERCEL_URL}/${sportKey}/${teamKey}?teamSheetId=${editId}`}>
          <FontAwesomeIcon
            className="cursor-pointer ml-3 hover:text-cyan-400"   
            icon={faEdit}
          />
        </Link>
      </div>
    </div>
  )
}

export default TeamSheetListItem