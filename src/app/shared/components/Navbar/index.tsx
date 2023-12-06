

const NavBar = async () => {
  return (
    <div className="bg-black flex flex h-16 p-2 w-full items-center">
      {/* Insert TS Logo SVG HERE */}
      <div className="bg-cyan-700 h-[40px] w-[40px] text-center text-white m-auto">
        TS
      </div>
      
      <div className="flex items-center h-full max-w-column w-full text-white ml-2">
        TEAMSHEET
      </div>
    </div>
  )
}

export default NavBar
