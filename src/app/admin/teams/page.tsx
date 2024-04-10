import Link from 'next/link'

import prisma from '@db/prismaSingleton'

const Page = async () => {
  const teams = await prisma.team.findMany({
    orderBy: { title: 'asc' },
  })

  return (
    <div className="flex flex-col">
      <div className="font-bold mt-4 mx-4 text-center text-xl">Teams</div>

    {teams.map(team => (
      <Link
        className="p-3 m-3 border rounded-lg hover:bg-gray-50"
        href={`/admin/teams/${team.id}`}
      >
        {team.title}
      </Link>
    ))}
  </div>
  )
}

export default Page