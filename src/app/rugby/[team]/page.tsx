import { notFound } from 'next/navigation'

import prisma from '@db/prismaSingleton'

import Bench from '@components/Bench'

import SelectPlayerModal from '@modals/SelectPlayerModal'

import TeamContent from './TeamContent'

type PageProps = {
  params: { team: string },
}

const Page = async (props: PageProps) => {
  const {
    params: { team: teamkey },
  } = props
  
  const team = await prisma.team.findUnique({
    where: {
      key: teamkey,
    },
  })
  if (!team) return notFound()

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
    orderBy: { lastname: 'asc' },
  })

  return (
    <TeamContent players={players} team={team}>
      <Bench />

      <SelectPlayerModal />
    </TeamContent>
  )
}

export default Page