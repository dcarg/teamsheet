import { notFound } from 'next/navigation'

import prisma from '@db/prismaSingleton'

import Bench from '@components/Bench'
import Field from '@components/Field'
import NameForm from '@components/NameForm'

import { teamSize } from '@functions/teamSheet'

import SelectPlayerModal from '@modals/SelectPlayerModal'

import type { PlayerWithPositions } from '@types'

import TeamContent from './TeamContent'

type PageProps = {
  params: { team: string },
  searchParams: { teamSheetId?: string },
}

const Page = async (props: PageProps) => {
  const {
    params: { team: teamkey },
    searchParams: { teamSheetId },
  } = props

  const team = await prisma.team.findUnique({
    where: {
      key: teamkey,
    },
  })
  if (!team) return notFound()

  const teamSheet = teamSheetId
    ? await prisma.teamSheet.findUnique({
      where: {
        editId: teamSheetId,
      },
    })
    : null

  const players = await prisma.player.findMany({
    where: {
      teamMembers: {
        some: {
          team: {
            key: teamkey,
          },
        },
      },
    },
    include: {
      playerPositions: {
        include: {
          position: true,
        },
      },
    },
    orderBy: { firstname: 'asc' },
  })

  const hasTeamSheet = !!teamSheet
  const data = teamSheet?.data as Partial<{ [key: string]: PlayerWithPositions }> | null
  const isTeamSheetComplete = !!data && Object.keys(data).length === teamSize

  return (
    <TeamContent players={players} team={team} teamSheet={teamSheet}>
      {hasTeamSheet && isTeamSheetComplete && <NameForm teamSheet={teamSheet} />}

      <Field />

      <Bench />

      <SelectPlayerModal />
    </TeamContent>
  )
}

export default Page