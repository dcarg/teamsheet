'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import type { TeamSheet } from '@prisma/client'

import { createTeamSheet } from '@actions/teamSheet'

import Button from '@components/Button'
import { PlayerWithPositions } from '@types'

type Router = ReturnType<typeof useRouter>

type CreateAndRedirectParams = {
  teamSheet: TeamSheet,
  router: Router,
}

const createTeamSheetAndRedirect = async (params: CreateAndRedirectParams) => {
  const { router, teamSheet } = params

  const data = teamSheet.data as { [key: string]: PlayerWithPositions }

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
    <div className="flex p-3">
      <Link href={`/${sportHref}`}>
        <div className="p-2 border rounded bg-green-500 hover:bg-green-600 text-white font-semibold">
          Create your own
        </div>
      </Link>

      <Button
        className="ml-2 w-[190px]"
        onClick={() => createTeamSheetAndRedirect({ teamSheet, router })}
        text="Duplicate Team Sheet"
        variant="create"
      />
    </div>
  )
}

export default ShareBar