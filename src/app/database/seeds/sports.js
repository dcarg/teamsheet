const seedSports = (prisma) => {
  const sports = [
    {
      key: 'rugby',
      title: 'Rugby',
    },
  ]

  const records = sports.map(async sport => (
    await prisma.sport.upsert({
      where: { key: sport.key },
      create: sport,
      update: sport,
    })
  ))

  return records
}

export default seedSports