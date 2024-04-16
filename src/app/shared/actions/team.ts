'use server'

import { revalidateTag } from 'next/cache'

import prisma from '@db/prismaSingleton'

type CreateTeamPayload = {
  key: string,
  primaryColor: string,
  secondaryColor: string,
  title: string,
}

type UpdateTeamPayload = Partial<CreateTeamPayload> & { id: number }

export const updateTeam = async (payload: UpdateTeamPayload) => {
  const { id, ...payloadData } = payload

  const team = await prisma.team.update({
    where: { id },
    data: payloadData,
  })

  revalidateTag('team')

  return team
}