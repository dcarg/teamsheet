const seedTeams = (prisma, sports) => {
  const teams = [
    {
      key: 'australia',
      sportId: sports.find(sport => sport.key === 'rugby').id,
      title: 'Wallabies',
    },
  ]

  const records = teams.map(async team => (
    await prisma.team.upsert({
      where: { key: team.key },
      create: team,
      update: team,
    })
  ))

  return records
}

export default seedTeams