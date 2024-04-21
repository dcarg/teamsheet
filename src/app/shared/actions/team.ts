'use server'

import { revalidateTag } from 'next/cache'

import prisma from '@db/prismaSingleton'

type CreateTeamPayload = {
  key: string,
  primaryColor: string,
  secondaryColor: string,
  title: string,
}

export const createTeam = async (payload: CreateTeamPayload) => {
  try {
    const team = await prisma.team.create({
      data: payload
    })

    revalidateTag('team')

    return { success: true as const, data: team }
  } catch(e) {
    return { success: false as const, error: e?.message || 'Unknown Error' }
  }
}

type UpdateTeamPayload = Partial<CreateTeamPayload> & { id: number }

export const updateTeam = async (payload: UpdateTeamPayload) => {
  const { id, ...payloadData } = payload

  try {
    const team = await prisma.team.update({
      where: { id },
      data: payloadData,
    })
  
    revalidateTag('team')

    return { success: true as const, data: team }
  } catch(e) {
    return { success: false as const, error: e?.message || 'Unknown Error' }
  }
}