import prisma from '@db/prismaSingleton'

import Bench from '@components/Bench'
import Field from '@components/Field'

import SelectPlayerModal from '@modals/SelectPlayerModal'

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
      
      <Field players={players} />

      <TeamContent players={players}>
        <Bench />

        <SelectPlayerModal />
      </TeamContent>
    </>
  )
}

export default Page