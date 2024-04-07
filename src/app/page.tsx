import Image from 'next/image'
import Link from 'next/link'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import { findOrCreateUser } from '@functions/user'

export default async function Home() {
  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()

  findOrCreateUser(kindeUser)

  return (
    <div className="flex-col items-center justify-center relative">
      <div className="mt-[50px] text-2xl font-bold flex justify-center">
        WE&apos;VE ALL GOT A TEAM
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

      <Image
        className="absolute m-auto left-0 right-0 top-0 bottom-0 z-10"
        src="/landing_page_image.svg"
        alt="Photo of TeamSheet on mobile"
        priority
        height={500}
        width={300}
      />

      <div className="h-[900px] w-screen mt-[250px] bg-cover bg-[url('/landing-page-background.svg')] relative">
        <div className=" pt-[250px]">
          <div className="mt-[170px] text-2xl text-white font-bold flex justify-center">
            TEAMSHEET IS SIMPLE
          </div>

          <div className="ml-[20%] mt-[20px]">
            <div className="mt-[10px] text-xl text-white font-bold flex">
              SELECT A SPORT
            </div>

            <div className="mt-[10px] text-xl text-white font-bold flex">
              SELECT A COMPETITION
            </div>

            <div className="mt-[10px] text-xl text-white font-bold flex">
              SELECT A TEAM
            </div>

            <div className="mt-[10px] text-xl text-white font-bold flex">
              CREATE YOUR TEAMSHEET
            </div>

            <div className="mt-[10px] text-xl text-white font-bold flex">
              SHARE IT WITH THE WORLD
            </div>
          </div>

          <div className="mt-[70px] text-xl text-white font-bold flex justify-center">
            AND WE&apos;RE ONLY JUST WARMING UP
          </div>

          <div className="mt-[10px] text-xl text-white font-bold flex justify-center">
            MORE FEATURES TO COME...
          </div>
        </div>
      </div>
    </div>
  )
}
