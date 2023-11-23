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