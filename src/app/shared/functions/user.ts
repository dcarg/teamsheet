import prisma from '@db/prismaSingleton'

import type { KindeUser } from '@kinde-oss/kinde-auth-nextjs/dist/types'

import type { User } from '@prisma/client'

import { createUser } from '@actions/user'

export const findOrCreateUser = async (externalUser: KindeUser | null) => {
  if (!externalUser) return null

  let user: User | null

  user = await prisma.user.findFirst({
    where: {
      userAccounts: {
        some: {
          provider: 'Kinde',
          providerId: externalUser.id,
        },
      },
    },
  })

  if (!user) {
    const payload = {
      email: externalUser.email,
      firstname: externalUser.given_name,
      lastname: externalUser.family_name,
      userAccounts: {
        create: {
          provider: 'Kinde',
          providerId: externalUser.id,
        },
      },
    }

    user = await createUser(payload)
  }

  return user
}