import prisma from '@db/prismaSingleton'

import TeamListItem from './_TeamListItem'

const Page = async () => {
  const teams = await prisma.team.findMany({
    orderBy: { title: 'asc' },
  })

  return (
    <div className="flex flex-col">
      <div className="font-bold mt-4 mx-4 text-center text-xl">Teams</div>

      {teams.map(team => (
        <TeamListItem key={team.id} team={team} />
      ))}
    </div>
  )
}

export default Page