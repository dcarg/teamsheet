import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import prisma from '@db/prismaSingleton'

import Bench from '@components/Bench'
import Field from '@components/Field'
import ShareBar from '@components/ShareBar'

import ShareContent from './ShareContent'

type PageProps = {
  params: { team: string },
  searchParams: { teamSheetId?: string },
}

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const {
    params: { team },
    searchParams: { teamSheetId },
  } = props

  const teamSheet = teamSheetId
    ? await prisma.teamSheet.findUnique({
      where: {
        shareId: teamSheetId,
      },
      include: {
        team: true,
      },
    })
    : null

  const cacheKey = new Date(teamSheet?.updatedAt || '').getTime()

  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_VERCEL_URL}`),
    openGraph: {
      images: [
        {
          height: 630,
          url: `/api/ogImages/teamSheet/${teamSheetId}?cacheKey=${cacheKey}`,
          width: 1200,
        },
      ],
      siteName: 'Teamsheet',
      title: teamSheet?.title || `My ${teamSheet?.team?.title}`,
      type: 'website',
      url: `/rugby/${team}/share?teamSheetId=${teamSheetId}`
    },
    twitter: {
      card: 'summary_large_image',
      site: 'teamsheet.online', 
    },
  }
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
      include: { team: true },
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
    <ShareContent players={players} team={teamSheet.team} teamSheet={teamSheet}>
      <ShareBar teamSheet={teamSheet} />

      <Field nonInteractive />

      <Bench nonInteractive />
    </ShareContent>
  )
}

export default Page