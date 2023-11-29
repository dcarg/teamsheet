import prisma from '@db/prismaSingleton'

import Bench from '@components/Bench'

import SelectPlayerModal from '@modals/SelectPlayerModal'

import PlayerCard from '@components/PlayerCard'
import TeamContent from './TeamContent'

type PageProps = {
  params: {
    team: string,
  },
}

const Page = async (props: PageProps) => {
  const {
    params: {
      team: teamkey,
    },
  } = props

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
    <>
      <div>Page for {teamkey}</div>

      <TeamContent players={players}>
        <PlayerCard />

        <Bench />

        <SelectPlayerModal />
      </TeamContent>
    </>
  )
}

export default Page