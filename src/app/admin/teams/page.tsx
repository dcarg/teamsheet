import prisma from '@db/prismaSingleton'

const Page = async () => {
  const teams = await prisma.team.findMany({
    orderBy: { title: 'asc' },
  })

  return (
    <div>Teams</div>
  )
}

export default Page