import Image from 'next/image'
import Link from 'next/link'

import { getKindeServerSession, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"

interface NavbarProps {
  title: string,
}

const NavBar = async (props: NavbarProps) => {
  const { title } = props

  const { isAuthenticated } = getKindeServerSession()
  const authenticated = await isAuthenticated()

  return (
    <div className="bg-cyan-700 w-full ">
      <div className="max-w-column flex justify-between items-center m-auto p-2 w-full">
        <div className="flex">
          <Link href="/">
            <div className="m-auto p-[5px] pl-0">
              <Image
                src="/ts-logo.svg"
                alt="TeamSheet Logo"
                priority
                height={30}
                width={30}
              />
            </div>
          </Link>

          <div className="flex text-white text-xl ml-[5px] items-center">
            {title}
          </div>
        </div>

        {authenticated
          ? <LogoutLink className="text-white">Logout</LogoutLink>
          : <LoginLink className="text-white">Login</LoginLink>
        }
      </div>
    </div>
  )
}

export default NavBar
