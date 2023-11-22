'use server'

import prisma from '@db/prismaSingleton'

type CreateTeamSheetPayload = {
  data: { [key: number]: number },
  teamId: number,
}

export const createTeamsheet = async (payload: CreateTeamSheetPayload) => {
  const teamsheet = await prisma.teamSheet.create({
    data: payload
  })

  console.log(teamsheet, 'teamsheet')

  // get id from teamsheet and redirect

  return teamsheet
}