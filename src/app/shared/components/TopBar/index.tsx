import SelectTeam from './SelectTeam'

const TopBar = async () => {
  return (
    <div className="border-b border-slate-500 flex flex-col h-topBarHeight items-center p-2 mb-1 w-full">
      <div className="flex items-start max-w-column w-full">
        <SelectTeam />
      </div>
    </div>
  )
}

export default TopBar
