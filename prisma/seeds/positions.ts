import type { PrismaClient, Sport } from '@prisma/client'

const seedPositions = (prisma: PrismaClient, sports: Sport[]) => {
  const rugbyId = sports.find(sport => sport.key === 'rugby')!.id

  const positions = [
    {
      key: 'prop',
      numbers: [1, 3],
      title: 'Prop',
      category: 'forward',
      sportId: rugbyId,
    },
    {
      key: 'hooker',
      numbers: [2],
      title: 'Hooker',
      category: 'forward',
      sportId: rugbyId,
    },
    {
      key: 'lock',
      numbers: [4, 5],
      title: 'Lock',
      category: 'forward',
      sportId: rugbyId,
    },
    {
      key: 'backrow',
      numbers: [6, 7, 8],
      title: 'Backrow',
      category: 'forward',
      sportId: rugbyId,
    },
    {
      key: 'scrumhalf',
      numbers: [9],
      title: 'Scrumhalf',
      category: 'back',
      sportId: rugbyId,
    },
    {
      key: 'flyhalf',
      numbers: [10],
      title: 'Flyhalf',
      category: 'back',
      sportId: rugbyId,
    },
    {
      key: 'centre',
      numbers: [12, 13],
      title: 'Center',
      category: 'back',
      sportId: rugbyId,
    },
    {
      key: 'outsideBack',
      numbers: [11, 14, 15],
      title: 'Outside Back',
      category: 'back',
      sportId: rugbyId,
    },
  ]

  const records = positions.map(async position => (
    await prisma.position.upsert({
      where: { 
        key: position.key,
      },
      create: position,
      update: {},
    })
  ))

  return records
}

export default seedPositions