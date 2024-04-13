import { redirect } from 'next/navigation'

import prisma from '@db/prismaSingleton'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

interface LayoutParams {
  children: React.ReactNode
}

const Layout = async (params: LayoutParams) => {
  const { children } = params

  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()

  if (!kindeUser) return <div>Unauthenticated</div>

  const user = await prisma.user.findFirst({
    where: {
      userAccounts: {
        some: {
          provider: 'Kinde',
          providerId: kindeUser.id,
        },
      },
    },
  })

  if (!user) return <div>Unauthenticated</div>
  if (!user.isAdmin) return <div>Unauthorised</div>

  return (
    <div>
      {children}
    </div>
  )
}

export default Layout