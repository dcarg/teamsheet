import Image from 'next/image'
import Link from 'next/link'

import { getKindeServerSession, LoginLink } from '@kinde-oss/kinde-auth-nextjs/server'

import UserMenu from '@components/UserMenu'

interface NavbarProps {
  title: string,
}

const NavBar = async (props: NavbarProps) => {
  const { title } = props

  const { getUser, isAuthenticated } = getKindeServerSession()
  const authenticated =  await isAuthenticated()
  const user = await getUser()

  return (
    <div className="bg-cyan-700 w-full ">
      <div className="max-w-column flex justify-between items-center m-auto p-3 w-full">
        <div className="flex">
          <Link href="/">
            <div className="m-auto p-[5px] pl-0">
              <Image
                src="/ts_logo_white.svg"
                alt="TeamSheet Logo"
                priority
                height={30}
                width={30}
              />
            </div>
          </Link>

          <div className="flex text-white text-2xl font-bold ml-2 mt-2 items-center">
            {title}
          </div>
        </div>

        {authenticated
          ? <UserMenu user={user} />
          : <LoginLink className="font-semibold text-white hover:text-cyan-400">Login</LoginLink>
        }
      </div>
    </div>
  )
}

export default NavBar