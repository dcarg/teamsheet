import Image from 'next/image'
import Link from 'next/link'

const NavBar = async () => {
  return (
    <div className="bg-cyan-700 h-[60px] w-full ">
      <Link href="/">
        <div className="max-w-column flex m-auto p-2 w-full items-center">
          <div className="h-[40px] w-[40px] m-auto p-[5px] pl-0">
            <Image
              src="/ts-logo.svg"
              alt="TeamSheet Logo"
              priority
              height={35}
              width={35}
            />
          </div>
          
          <div className="flex items-center h-full max-w-column w-full text-white text-xl ml-[5px]">
            TEAMSHEET
          </div>
        </div>
      </Link>
    </div>
  )
}

export default NavBar
