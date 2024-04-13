import prisma from '@db/prismaSingleton'

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

  return (
    <div>team edit screen here</div>
  )
}

export default Page