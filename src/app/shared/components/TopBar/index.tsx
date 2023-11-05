import Label from '@components/Label'

import { getSports } from '@queries/sport'

import SelectSport from './SelectSport'

const TopBar = async () => {
  const sports = await getSports()

  return (
    <div className="border-b border-slate-500 flex flex-col items-center p-2 m-1 w-full">
      <div className="flex items-start max-w-screen-lg w-full">
        <div>
          <Label text="Sport" />

          <SelectSport sports={sports} />
        </div>
      </div>
    </div>
  
  )
}

export default TopBar
