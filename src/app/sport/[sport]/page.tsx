import prisma from '@db/prismaSingleton'

import SelectGrid from '@components/SelectGrid'

type PageProps = {
  params: { sport: string },
}

const Page = async (props: PageProps) => {
  const {
    params: { sport: sportKey },
  } = props

  const sport = await prisma.team.findUnique({
    where: {
      key: sportKey,
    },
  })
  const { id: sportId } = sport || {}

  const competitions = await prisma.competition.findMany({
    where: {
      sportId,
    },
  })

  const hasCompetitions = !!competitions?.length

  return (
    <div className="max-w-column">
      <div className="p-2 w-full">
        {!hasCompetitions && (
          <div>
            {sportKey.toUpperCase()} Coming Soon
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