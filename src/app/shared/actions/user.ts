'use server'

import type { Prisma } from '@prisma/client'

import prisma from '@db/prismaSingleton'

export const createUser = async (payload: Prisma.UserCreateInput) => {
  const user = await prisma.user.create({
    data: payload,
  })

  return user
}