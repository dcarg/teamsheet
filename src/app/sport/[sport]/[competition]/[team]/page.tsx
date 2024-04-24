import { notFound } from 'next/navigation'

import prisma from '@db/prismaSingleton'

import { getPlayers } from '@functions/players'
import { teamSize } from '@functions/teamSheet'

import Bench from '@components/Bench'
import Field from '@components/Field'
import NameForm from '@components/NameForm'
import TopBar from '@components/TopBar'

import SelectPlayerModal from '@modals/SelectPlayerModal'

import type { PlayerWithPositions } from '@types'

import TeamContent from './TeamContent'

type PageProps = {
  params: {
    competition: string,
    team: string,
  },
  searchParams: { teamSheetId?: string },
}

const Page = async (props: PageProps) => {
  const {
    params: {
      competition: competitionKey,
      team: teamKey,
    },
    searchParams: { teamSheetId },
  } = props

  const competition = await prisma.competition.findUnique({
    where: {
      key: competitionKey,
    },
  })
  if (!competition) return notFound()

  const team = await prisma.team.findUnique({
    where: {
      key: teamKey,
    },
  })
  if (!team) return notFound()

  const players = await getPlayers(competitionKey, teamKey)

  const teamSheet = teamSheetId
  ? await prisma.teamSheet.findUnique({
    where: {
      editId: teamSheetId,
    },
  })
  : null

  const hasTeamSheet = !!teamSheet
  const data = teamSheet?.data as Partial<{ [key: string]: PlayerWithPositions }> | null
  const isTeamSheetComplete = !!data && Object.keys(data).length === teamSize

  return (
    <TeamContent competition={competition} players={players} team={team} teamSheet={teamSheet}>
      <TopBar />
      
      {hasTeamSheet && isTeamSheetComplete && <NameForm teamSheet={teamSheet} />}

      <Field />

      <Bench />

      <SelectPlayerModal />
    </TeamContent>
  )
}

export default Page