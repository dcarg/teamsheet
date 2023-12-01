import { notFound } from 'next/navigation'

import prisma from '@db/prismaSingleton'

import Bench from '@components/Bench'
import Field from '@components/Field'

import SelectPlayerModal from '@modals/SelectPlayerModal'

import PlayerCard from '@components/PlayerCard'
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
      <Field />

      {/* <PlayerCard /> */}

      <Bench />

      <SelectPlayerModal />
    </TeamContent>
  )
}

export default Page