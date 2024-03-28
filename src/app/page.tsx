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
        WE'VE ALL GOT A TEAM
      </div>

      <div className="mt-[50px] text-2xl font-bold flex justify-center">
        AND WE ALL KNOW BETTER
      </div>

      <div className="text-2xl font-bold flex justify-center">
        THAN THE COACHES...
      </div>

      <div className="mt-[50px] text-2xl font-bold flex justify-center">
        WHO WOULD YOU PICK?
      </div>

      <div className="mt-[50px] text-2xl font-bold flex justify-center">
        BUILD YOUR TEAMSHEET
      </div>

      <div className="text-2xl font-bold flex justify-center">
        GO ON
      </div>

      <div className="mt-[50px] flex justify-center">
        <Link
          className="inline p-2 border rounded bg-green-500 hover:bg-green-600 text-white font-semibold w-[150px] flex justify-center"
          href="sport/rugby"
        >
          START
        </Link>
      </div>

      <div className="h-[800px] w-screen mt-[200px] bg-cover bg-[url('/landing-page-background.svg')]">
        <div className="mt-[50px] pt-[200px] text-2xl text-white font-bold flex justify-center">
          TEAMSHEET IS SIMPLE
        </div>

        <div className="mt-[10px] text-xl text-white font-bold flex justify-center">
          SELECT A SPORT
        </div>

        <div className="mt-[10px] text-xl text-white font-bold flex justify-center">
          SELECT A COMPETITION
        </div>

        <div className="mt-[10px] text-xl text-white font-bold flex justify-center">
          SELECT A TEAM
        </div>

        <div className="mt-[10px] text-xl text-white font-bold flex justify-center">
          CREATE YOUR TEAMSHEET
        </div>

        <div className="mt-[10px] text-xl text-white font-bold flex justify-center">
          SHARE IT WITH THE WORLD
        </div>

        <div className="mt-[50px] text-xl text-white font-bold flex justify-center">
          POST TO SOCIALS
        </div>

        <div className="mt-[50px] text-xl text-white font-bold flex justify-center">
          AND WE'RE ONLY JUST WARMING UP
        </div>

        <div className="mt-[10px] text-xl text-white font-bold flex justify-center">
          MORE FEATURES TO COME...
        </div>
      </div>
    </div>
  )
}
