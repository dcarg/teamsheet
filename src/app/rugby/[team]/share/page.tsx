import type { Metadata } from 'next'

import prisma from '@db/prismaSingleton'

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const {
    searchParams: { teamSheetId },
  } = props

  return {
    openGraph: {
      images: [
        {
          height: 630,
          url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/ogImages?teamSheetId=${teamSheetId}`,
          width: 1200,
        },
      ],
      siteName: 'Teamsheet',
      type: 'website',
      // need to access team key dynamically
      url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/rugby/wallabies/share?teamSheetId=${teamSheetId}`
    },
  }
}

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

  return (
    <div>share page here</div>
  )
}

export default Page