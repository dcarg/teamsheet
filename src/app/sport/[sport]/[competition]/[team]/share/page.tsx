import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import prisma from '@db/prismaSingleton'

import Bench from '@components/Bench'
import Field from '@components/Field'
import ShareBar from '@components/ShareBar'

import ShareContent from './ShareContent'

type PageProps = {
  params: {
    competition: string,
    sport: string,
    team: string,
  },
  searchParams: { teamSheetId?: string },
}

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const {
    params: {
      competition: competitionKey,
      sport: sportKey,
      team: teamkey,
    },
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
      url: `/sport/${sportKey}/${competitionKey}/${teamkey}/share?teamSheetId=${teamSheetId}`
    },
    twitter: {
      card: 'summary_large_image',
      site: 'teamsheet.online', 
    },
  }
}

const Page = async (props: PageProps) => {
  const {
    params: {
      competition: competitionKey,
    },
    searchParams: { teamSheetId },
  } = props

  const competition = await prisma.competition.findUnique({
    where: {
      key: competitionKey,
    },
  })
  if (!competition) return notFound()

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

  const teamKey = teamSheet?.team?.key

  return (
    <ShareContent competition={competition} players={players} team={teamSheet.team} teamSheet={teamSheet}>
      <ShareBar teamSheet={teamSheet} />

      <Field nonInteractive />

      <Bench nonInteractive teamKey={teamKey} />
    </ShareContent>
  )
}

export default Page