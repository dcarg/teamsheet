'use server'

import { revalidateTag } from 'next/cache'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import prisma from '@db/prismaSingleton'

import { findOrCreateUser } from '@functions/user'

import type { PlayerWithPositions } from '@types'

type CreateTeamSheetPayload = {
  data: { [key: string]: PlayerWithPositions },
  teamId: number,
}

export const createTeamSheet = async (payload: CreateTeamSheetPayload) => {
  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()

  const user = await findOrCreateUser(kindeUser)

  const teamsheet = await prisma.teamSheet.create({
    data: {
      ...payload,
      userId: user?.id,
    }
  })

  return teamsheet
}

type UpdateTeamSheetPayload = Partial<CreateTeamSheetPayload> & { id: number, title?: string }

export const updateTeamSheet = async (payload: UpdateTeamSheetPayload) => {
  const { id, ...payloadData } = payload

  const teamsheet = await prisma.teamSheet.update({
    where: { id },
    data: payloadData,
  })

  revalidateTag('teamSheets')

  return teamsheet
}