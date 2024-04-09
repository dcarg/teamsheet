import { redirect } from 'next/navigation'

import prisma from '@db/prismaSingleton'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import { findOrCreateUser } from '@functions/user'

const Page = async () => {
  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()

  if (!kindeUser) redirect('/')

  const user = await prisma.user.findFirst({
    where: {
      userAccounts: {
        some: {
          provider: 'Kinde',
          providerId: kindeUser?.id,
        },
      },
    },
  })

  if (!user?.isAdmin) redirect('/')

  return (
    <div>admin here</div>
  )
}

export default Page