import { notFound } from 'next/navigation'

import prisma from '@db/prismaSingleton'

import Bench from '@components/Bench'
import Field from '@components/Field'

import ShareContent from './ShareContent'

type PageProps = {
  searchParams: { teamSheetId?: string },
}

const Page = async (props: PageProps) => {
  const {
    searchParams: { teamSheetId },
  } = props

  const teamSheet = teamSheetId
    ? await prisma.teamSheet.findUnique({
      where: {
        shareId: teamSheetId,
      },
    })
    : null

  if (!teamSheet) return notFound()

  const players = await prisma.player.findMany({
    where: {
      teamMembers: {
        some: {
          team: {
            id: teamSheet.teamId,
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

  return (
    <ShareContent players={players} teamSheet={teamSheet}>
      <Field nonInteractive />

      <Bench nonInteractive />
    </ShareContent>
  )
}

export default Page