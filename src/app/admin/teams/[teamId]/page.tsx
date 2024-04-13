import Link from 'next/link'

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

  const {
    id,
    key,
    primaryColor,
    secondaryColor,
    title,
  } = team

  return (
    <>
      <div className="font-bold mt-4 mx-4 text-center text-xl">{title}</div>

      <div className="flex flex-col">
        <div className="flex">
          <div className="border-b w-3" />

          <Link className="bg-slate-100 border-l border-t p-2 rounded-t-xl" href={`/admin/teams/${id}`}>
            Details
          </Link>

          <Link className="border p-2 rounded-t-xl" href={`/admin/teams/${id}/players`}>
            Players
          </Link>

          <div className="grow border-b" />
        </div>

        <div className="bg-slate-100 p-3">
          <div className="bg-white">Form here</div>  
        </div>
      </div>
    </>
  )
}

export default Page