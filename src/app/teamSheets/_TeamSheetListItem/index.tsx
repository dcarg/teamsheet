import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

import type { TeamSheetWithCompetitionSportAndTeam } from '@types'

interface TeamSheetListItemProps {
  teamSheet: TeamSheetWithCompetitionSportAndTeam,
}

const TeamSheetListItem = (props: TeamSheetListItemProps) => {
  const {
    teamSheet: {
      competition: {
        key: competitionKey,
        sport: {
          key: sportKey,
        },
        title: competitionTitle,
      },
      editId,
      shareId,
      team: {
        key: teamKey,
        title: teamTitle,
      },
      title: teamSheetTitle,
    }
  } = props

  return (
    <div className="flex border rounded mb-3 p-4 w-full justify-between">
      <div className="flex flex-col">
        <div className="font-semibold">
          {teamSheetTitle || `Team Sheet #${shareId.substring(0,8)}`}
        </div>
        
        <div className="flex text-sm text-slate-400">
          {teamTitle}, {competitionTitle}
        </div>
      </div>

      <div className="flex items-center">
        <Link href={`${process.env.NEXT_PUBLIC_VERCEL_URL}/sport/${sportKey}/${competitionKey}/${teamKey}/share?teamSheetId=${shareId}`}>
          <FontAwesomeIcon
            className="cursor-pointer ml-3 hover:text-cyan-400"
            icon={faShareFromSquare}
          />
        </Link>

        <Link href={`${process.env.NEXT_PUBLIC_VERCEL_URL}/sport/${sportKey}/${competitionKey}/${teamKey}?teamSheetId=${editId}`}>
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