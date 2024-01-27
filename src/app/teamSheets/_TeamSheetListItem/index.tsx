'use client'

import { usePathname } from 'next/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

import type { TeamSheetWithTeam } from '@types'

interface TeamSheetListItemProps {
  teamSheet: TeamSheetWithTeam,
}

const TeamSheetListItem = (props: TeamSheetListItemProps) => {
  const { teamSheet } = props || {}
  const { editId, shareId, team, title } = teamSheet
  const { title: teamTitle } = team

  const pathname = usePathname()

  // Need to figure out best way to set the urls here
  // Our Teamsheets query gives us the nested teams relation but we need more information as we need to know what the sport is to be able to provide a link here below to the relevant sport for the teamsheet
  // rugby/wallabies?teamSheetId={editId}

  return (
    <div className="flex border rounded mb-3 p-4 w-full justify-between">
      <div className="flex flex-col">
        {title && (
          <div className="font-semibold">
            {title}
          </div>
        )}
        
        <div className="text-slate-500">
          {teamTitle}
        </div>
      </div>

      <div className="flex items-center">
        <FontAwesomeIcon
          className="cursor-pointer ml-3 hover:text-cyan-400"
          href={`${process.env.NEXT_PUBLIC_VERCEL_URL}${pathname}/share?teamSheetId=${shareId}`}
          icon={faShareFromSquare}
        />

        <FontAwesomeIcon
          className="cursor-pointer ml-3 hover:text-cyan-400"
          href="/#"
          icon={faEdit}
        />
      </div>
    </div>
  )
}

export default TeamSheetListItem