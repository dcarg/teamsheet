'use client'

import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'

import type { TeamSheet } from '@prisma/client'

import { createTeamSheet } from '@actions/teamSheet'

const createTeamSheetAndRedirect = async (teamSheet: TeamSheet) => {
  const payload = {
    data: teamSheet.data,
    teamId: teamSheet.teamId,
  }

  const newTeamSheet = await createTeamSheet(payload)
  redirect(`/rugby/wallabies?teamSheetId=${newTeamSheet.editId}`)
}

interface ShareBarProps {
  teamSheet: TeamSheet,
}

const ShareBar = (props: ShareBarProps) => {
  const { teamSheet } = props

  const pathname = usePathname()
  const sportHref = pathname.split('/')[1]

  return (
    <div className="flex p-2">
      <div className="border border-black p-1 rounded bg-cyan-400 hover:bg-cyan-500 text-slate-900 p-1">
        <Link href={`/${sportHref}`}>
          Create your own
        </Link>
      </div>

      <button
        className="border border-black p-1 rounded bg-cyan-400 hover:bg-cyan-500 text-slate-900 w-28 ml-2"
        onClick={() => createTeamSheetAndRedirect(teamSheet)}
      >
        Duplicate
      </button>
    </div>
  )
}

export default ShareBar