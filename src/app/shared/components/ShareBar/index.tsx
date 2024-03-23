'use client'

import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

import type { TeamSheet } from '@prisma/client'

import { createTeamSheet } from '@actions/teamSheet'

import Button from '@components/Button'
import { PlayerWithPositions } from '@types'

type Router = ReturnType<typeof useRouter>

type CreateAndRedirectParams = {
  competitionKey: string,
  router: Router,
  sportKey: string,
  teamKey: string,
  teamSheet: TeamSheet,
}

const createTeamSheetAndRedirect = async (params: CreateAndRedirectParams) => {
  const { competitionKey, sportKey, teamKey, router, teamSheet } = params

  const data = teamSheet.data as { [key: string]: PlayerWithPositions }

  const payload = {
    competitionId: teamSheet.competitionId,
    data,
    teamId: teamSheet.teamId,
  }

  const newTeamSheet = await createTeamSheet(payload)
  router.push(`/sport/${sportKey}/${competitionKey}/${teamKey}?teamSheetId=${newTeamSheet.editId}`)
}

interface ShareBarProps {
  teamSheet: TeamSheet,
}

const ShareBar = (props: ShareBarProps) => {
  const { teamSheet } = props

  const params: { competition: string, sport: string, team: string } = useParams()
  const {
    competition: competitionKey,
    sport: sportKey,
    team: teamKey,
  } = params

  const router = useRouter()

  return (
    <div className="flex p-3">
      <Link href={`/sport/${sportKey}`}>
        <div className="p-2 border rounded bg-green-500 hover:bg-green-600 text-white font-semibold">
          Create your own
        </div>
      </Link>

      <Button
        className="ml-2 w-[190px]"
        onClick={() => createTeamSheetAndRedirect({ competitionKey, sportKey, teamKey, teamSheet, router })}
        text="Duplicate Team Sheet"
        variant="create"
      />
    </div>
  )
}

export default ShareBar