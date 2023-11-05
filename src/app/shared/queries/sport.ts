import prisma from '@db/prismaSingleton'

export const getSports = async () => {
  const sports = await prisma.sport.findMany({
    orderBy: { title: 'asc' },
  })

  return sports
}
