import prisma from '@db/prismaSingleton'

import PageHeader from '@components/PageHeader'

import CreateTeamButton from './_CreateTeamButton'
import ModalContent from './_ModalContent'
import TeamListItem from './_TeamListItem'

const Page = async () => {
  const teams = await prisma.team.findMany({
    orderBy: { title: 'asc' },
  })

  return (
    <ModalContent>
      <div className="flex flex-col m-3">
        <PageHeader
          actionContent={<CreateTeamButton />}
          title="Teams"
        />

        {teams.map(team => (
          <TeamListItem key={team.id} team={team} />
        ))}
      </div>
    </ModalContent>
  )
}

export default Page