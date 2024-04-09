import Image from 'next/image'
import Link from 'next/link'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import { findOrCreateUser } from '@functions/user'

export default async function Home() {
  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()

  findOrCreateUser(kindeUser)

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-[320px]">
        <div className="mt-[50px] text-2xl font-bold text-center">
          WE&apos;VE ALL GOT A TEAM
        </div>

        <div className="mt-[50px] text-2xl font-bold text-center">
          AND WE ALL KNOW BETTER
        </div>

        <div className="text-2xl font-bold text-center">
          THAN THE COACHES...
        </div>

        <div className="mt-[50px] text-2xl font-bold text-center">
          WHO WOULD YOU PICK?
        </div>

        <div className="mt-[50px] text-2xl font-bold text-center">
          BUILD YOUR TEAMSHEET
        </div>

        <div className="mt-[10px] text-2xl font-bold text-center">
          GO ON
        </div>
      </div>

      <div className="mt-[50px] flex justify-center">
        <Link
          className="inline p-2 border rounded bg-green-500 hover:bg-green-600 text-white font-semibold w-[150px] flex justify-center"
          href="sport/rugby"
        >
          START
        </Link>
      </div>

      <Image
        className="mt-[50px] z-10"
        src="/landing_page_image.svg"
        alt="Photo of TeamSheet on mobile"
        priority
        height={500}
        width={300}
      />

      <div className="absolute top-[800px] min-h-[900px] w-screen bg-cover bg-[url('/landing-page-background.svg')]">
        <div className="flex flex-col items-center">
          <div className="mt-[220px] w-[320px]">
            <div className="mt-[170px] text-2xl text-white font-bold">
              TEAMSHEET IS SIMPLE
            </div>

            <div className="mt-[10px] text-xl text-white font-bold">
              SELECT A SPORT
            </div>

            <div className="mt-[10px] text-xl text-white font-bold">
              SELECT A COMPETITION
            </div>

            <div className="mt-[10px] text-xl text-white font-bold">
              SELECT A TEAM
            </div>

            <div className="mt-[10px] text-xl text-white font-bold">
              CREATE YOUR TEAMSHEET
            </div>

            <div className="mt-[10px] text-xl text-white font-bold">
              SHARE IT WITH THE WORLD
            </div>

            <div className="mt-[70px] text-xl text-white font-bold">
              AND WE&apos;RE ONLY JUST WARMING UP
            </div>

            <div className="mt-[10px] text-xl text-white font-bold">
              MORE FEATURES TO COME...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
