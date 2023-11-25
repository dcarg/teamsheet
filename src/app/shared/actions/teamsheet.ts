'use server'

import prisma from '@db/prismaSingleton'

type CreateTeamSheetPayload = {
  data: { [key: number]: number },
  teamId: number,
}

export const createTeamSheet = async (payload: CreateTeamSheetPayload) => {
  const teamsheet = await prisma.teamSheet.create({
    data: payload
  })

  return teamsheet
}

type UpdateTeamSheetPayload = Partial<CreateTeamSheetPayload> & { id: string }

export const updateTeamSheet = async (payload: UpdateTeamSheetPayload) => {
  const { id, ...payloadData } = payload

  const teamsheet = await prisma.teamSheet.update({
    where: { id },
    data: payloadData,
  })

  return teamsheet
}