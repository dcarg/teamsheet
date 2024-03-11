import prisma from '@db/prismaSingleton'

import SelectGrid from '@components/SelectGrid'
import TopBar from '@components/TopBar'

type PageProps = {
  params: { sport: string },
}

const Page = async (props: PageProps) => {
  const {
    params: { sport: sportKey },
  } = props

  const competitions = await prisma.competition.findMany({
    where: {
      sport: {
        key: sportKey,
      },
    },
  })

  const hasCompetitions = !!competitions?.length

  return (
    <div className="max-w-column">
      <TopBar />

      <div className="p-2 w-full">
        {!hasCompetitions && (
          <div>
            {sportKey?.toUpperCase()} Coming Soon
          </div>
        )}

        {hasCompetitions && (
          <>
            <div className="font-semibold text-center my-3">
              SELECT A {sportKey?.toUpperCase()} COMPETITION:
            </div>

            <SelectGrid
              entityKey="competition"
              entities={competitions}
              hideTitles
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Page