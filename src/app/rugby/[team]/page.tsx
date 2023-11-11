type PageProps = {
  params: {
    team: string,
  },
}

const Page = (props: PageProps) => {
  const {
    params: {
      team,
    }
  } = props

  // const teamsheet = prisma.teamsheet.find({
  //   where: { id }
  // })

  return (
    <div>Page for {team}</div>
  )
}

export default Page