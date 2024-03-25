import Image from 'next/image'
import Link from 'next/link'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import { findOrCreateUser } from '@functions/user'

export default async function Home() {
  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()

  findOrCreateUser(kindeUser)

  return (
    <div className="flex-col items-center justify-center">
      <div className="mt-[50px] text-2xl font-bold flex justify-center">
        We've all got a team
      </div>

      <div className="mt-[50px] text-2xl font-bold flex justify-center">
        And we all know better
      </div>

      <div className="text-2xl font-bold flex justify-center">
        than the coaches...
      </div>

      <div className="mt-[50px] text-2xl font-bold flex justify-center">
        Who would you pick?
      </div>

      <div className="mt-[50px] text-2xl font-bold flex justify-center">
        Build your Teamsheet
      </div>

      <div className="text-2xl font-bold flex justify-center">
        Go on
      </div>

      <div className="mt-[50px] flex justify-center">
        <Link
          className="inline p-2 border rounded bg-green-500 hover:bg-green-600 text-white font-semibold w-[150px] flex justify-center"
          href="sport/rugby"
        >
          Start
        </Link>
      </div>

      <div className="h-[1227px] w-screen mt-[200px] bg-cover bg-[url('/landing-page-background.svg')]" />
    </div>
  )
}
