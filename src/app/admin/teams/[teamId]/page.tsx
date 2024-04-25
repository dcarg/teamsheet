import Link from 'next/link'
import { notFound } from 'next/navigation'

import prisma from '@db/prismaSingleton'

import { generateUrls } from '@functions/team'

import TeamForm from './_TeamForm'

interface PageProps {
  params: { teamId: string },
}

const Page = async (props: PageProps) => {
  const {
    params: { teamId },
  } = props

  const team = await prisma.team.findUnique({
    where: { id: +teamId },
  })

  if (!team) return notFound()

  const { title } = team

  const { teamDetailsUrl, teamPlayersUrl } = generateUrls(team)

  return (
    <div className="min-h-screen">
      <div className="font-bold mt-4 mx-4 text-center text-xl">{title}</div>

      <div className="mx-4">
        <TeamForm team={team} />
      </div>
    </div>
  )
}

export default Page