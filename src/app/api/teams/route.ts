import type { NextRequest } from 'next/server'

import prisma from '@db/prismaSingleton'

export const GET = async (request: NextRequest) => {
  const sportId = request.nextUrl.searchParams.get('sportId')

  const sportIdWhereClause = sportId ? { sportId: Number(sportId) } : {}

  const teams = await prisma.team.findMany({
    where: {
      ...sportIdWhereClause
    },
    orderBy: {
      title: 'asc',
    },
  })

  return Response.json(teams)
}