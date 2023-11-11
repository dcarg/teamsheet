import prisma from '@db/prismaSingleton'

type PageProps = {
  params: {
    team: string,
  },
}

const Page = async (props: PageProps) => {
  const {
    params: {
      team: teamkey,
    }
  } = props

  const players = await prisma.player.findMany({
    where: {
      teamMembers: {
        some: {
          team: {
            key: teamkey,
          },
        },
      },
    },
    orderBy: { lastname: 'asc'},
  })

  return (
    <>
      <div>Page for {teamkey}</div>

      <ul>
        {players.map(player => (
          <li key={player.id}>{player.title}</li>
        ))}
      </ul>
    </>

  )
}

export default Page