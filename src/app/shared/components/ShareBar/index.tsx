'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import type { TeamSheet } from '@prisma/client'

import { createTeamSheet } from '@actions/teamSheet'

import Button from '@components/Button'

type Router = ReturnType<typeof useRouter>

type CreateAndRedirectParams = {
  teamSheet: TeamSheet,
  router: Router,
}

const createTeamSheetAndRedirect = async (params: CreateAndRedirectParams) => {
  const { router, teamSheet } = params

  const data = teamSheet.data as { [key: string]: number }

  const payload = {
    data,
    teamId: teamSheet.teamId,
  }

  const newTeamSheet = await createTeamSheet(payload)
  router.push(`/rugby/wallabies?teamSheetId=${newTeamSheet.editId}`)
}

interface ShareBarProps {
  teamSheet: TeamSheet,
}

const ShareBar = (props: ShareBarProps) => {
  const { teamSheet } = props

  const router = useRouter()

  const pathname = usePathname()
  const sportHref = pathname.split('/')[1]

  return (
    <div className="flex p-2">
      <div className="border border-black p-1 rounded bg-cyan-400 hover:bg-cyan-500 text-slate-900 p-1">
        <Link href={`/${sportHref}`}>
          Create your own
        </Link>
      </div>

      <Button
        className="ml-2"
        onClick={() => createTeamSheetAndRedirect({ teamSheet, router })}
        variant="create"
      >
        Duplicate
      </Button>
    </div>
  )
}

export default ShareBar