import Image from 'next/image'

const NavBar = async () => {
  return (
    <div className="bg-cyan-700 flex flex h-[60px] p-2 w-full items-center">
      {/* Insert TS Logo SVG HERE */} 
      <div className="h-[40px] w-[40px] m-auto p-[5px]">
        <Image
          src="/ts-logo.svg"
          alt="TeamSheet Logo"
          priority
          height={35}
          width={35}
        />
      </div>
      
      <div className="flex items-center h-full max-w-column w-full text-white text-xl ml-2">
        TEAMSHEET
      </div>
    </div>
  )
}

export default NavBar
