import type { NextRequest } from 'next/server'

import prisma from '@db/prismaSingleton'

export const GET = async (request: NextRequest) => {
  const sportKey = request.nextUrl.searchParams.get('sportKey')

  const sportKeyWhereClause = sportKey ? { sport: { key: sportKey } } : {}

  const teams = await prisma.team.findMany({
    where: {
      ...sportKeyWhereClause
    },
    orderBy: {
      title: 'asc',
    },
  })

  return Response.json(teams)
}