import { getSports } from '@queries/sport'

import SelectBoxes from './SelectBoxes'

const TopBar = async () => {
  const sports = await getSports()

  return (
    <div className="border-b border-slate-500 flex flex-col items-center p-2 m-1 w-full">
      <div className="flex items-start max-w-screen-lg w-full">
        <SelectBoxes sports={sports} />
      </div>
    </div>
  
  )
}

export default TopBar
