'use server'

import { revalidateTag } from 'next/cache'

import prisma from '@db/prismaSingleton'

type CreateTeamSheetPayload = {
  data: { [key: string]: number },
  teamId: number,
}

export const createTeamSheet = async (payload: CreateTeamSheetPayload) => {
  const teamsheet = await prisma.teamSheet.create({
    data: payload
  })

  return teamsheet
}

type UpdateTeamSheetPayload = Partial<CreateTeamSheetPayload> & { id: string, title?: string }

export const updateTeamSheet = async (payload: UpdateTeamSheetPayload) => {
  const { id, ...payloadData } = payload

  const teamsheet = await prisma.teamSheet.update({
    where: { id },
    data: payloadData,
  })

  revalidateTag('teamSheets')

  return teamsheet
}