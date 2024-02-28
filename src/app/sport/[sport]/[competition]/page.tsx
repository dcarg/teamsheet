import prisma from '@db/prismaSingleton'

import SelectGrid from '@components/SelectGrid'

type PageProps = {
  params: {
    competition: string,
    sport: string,
  },
}

const Page = async (props: PageProps) => {
  const {
    params: { 
      competition: competitionKey,
      sport: sportKey,
    },
  } = props

  const sport = await prisma.sport.findUnique({
    where: {
      key: sportKey,
    },
  })
  const { id: sportId } = sport || {}

  const competition = await prisma.competition.findUnique({
    where: {
      key: competitionKey,
      sportId: sportId,
    },
  })
  const { id: competitionId } = competition || {}

  const competitionTeams = await prisma.competitionTeam.findMany({
    where: {
      competitionId: competitionId,
    },
    include: {
      team: true,
    }
  })

  const teams = await prisma.team.findMany()
  // need to filter teams here by competitionTeams
  // i.e. super rugby teams only

  return (
    <div className="max-w-column">
      <div className="p-2 w-full justify-center">
        {}
        <div className="font-semibold text-center my-3">
          SELECT A {competitionKey?.toUpperCase()} TEAM:
        </div>

        <SelectGrid
          entityKey={competitionKey} // superRugby
          entities={teams}
          hideTitles
        />
      </div>
    </div>
  )
}

export default Page