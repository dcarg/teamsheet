import { redirect } from 'next/navigation'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import { findOrCreateUser } from '@functions/user'

export default async function Home() {
  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()

  findOrCreateUser(kindeUser)

  redirect('/rugby')
}
