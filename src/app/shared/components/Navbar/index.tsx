import Image from 'next/image'
import Link from 'next/link'

interface NavbarProps {
  title: string,
}

const NavBar = async (props: NavbarProps) => {
  const { title } = props

  return (
    <div className="bg-cyan-700 w-full ">
      <div className="max-w-column flex m-auto p-2 w-full items-center">
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
        
        <div className="flex align-middle items-center h-full max-w-column w-full text-white text-xl ml-[5px]">
          {title}
        </div>
      </div>
    </div>
  )
}

export default NavBar
