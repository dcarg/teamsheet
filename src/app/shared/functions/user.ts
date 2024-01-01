import prisma from '@db/prismaSingleton'

import type { KindeUser } from '@kinde-oss/kinde-auth-nextjs/dist/types'

import type { User } from '@prisma/client'

import { createUser } from '@actions/user'

export const findOrCreateUser = async (authUser: KindeUser | null) => {
  if (!authUser) return null

  let user: User | null

  user = await prisma.user.findFirst({
    where: {
      userAccounts: {
        some: {
          provider: 'Kinde',
          providerId: authUser.id,
        },
      },
    },
  })

  if (!user) {
    const payload = {
      email: authUser.email,
      firstname: authUser.given_name,
      lastname: authUser.family_name,
      username: authUser.email,
      userAccounts: {
        create: {
          provider: 'Kinde',
          providerId: authUser.id,
        },
      },
    }

    user = await createUser(payload)
  }

  return user
}