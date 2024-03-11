import prisma from '@db/prismaSingleton'

import SelectGrid from '@components/SelectGrid'
import TopBar from '@components/TopBar'

type PageProps = {
  params: {
    competition: string,
    sport: string,
  },
}

const Page = async (props: PageProps) => {
  const { params: { competition: competitionKey } } = props

  const competition = await prisma.competition.findUnique({
    where: {
      key: competitionKey,
    },
  })
  const { title: competitionTitle } = competition || {}

  const teams = await prisma.team.findMany({
    where: {
      competitionTeams: {
        some: {
          competition: {
            key: competitionKey,
          },
        },
      },
    },
    orderBy: { title: 'asc' },
  })

  return (
    <div className="max-w-column">
      <TopBar />

      <div className="p-2 w-full justify-center">
        <div className="font-semibold text-center my-3">
          SELECT A {competitionTitle?.toUpperCase()} TEAM:
        </div>

        <SelectGrid
          entityKey={competitionKey}
          entities={teams}
          hideTitles
        />
      </div>
    </div>
  )
}

export default Page