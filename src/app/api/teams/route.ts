import type { NextRequest } from 'next/server'

import prisma from '@db/prismaSingleton'

export const GET = async (request: NextRequest) => {
  const sportKey = request.nextUrl.searchParams.get('sportKey')

  const teams = await prisma.team.findMany({
    orderBy: {
      title: 'asc',
    },
  })

  return Response.json(teams)
}