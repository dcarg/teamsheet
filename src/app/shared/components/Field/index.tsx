import Image from 'next/image'

import PlayerCard from './PlayerCard'

const fieldData = [
  { teamSheetLayoutId: 2, position: 'prop', className: 'col-start-3 col-span-2' },
  { teamSheetLayoutId: 1, position: 'hooker', className: 'col-span-2' },
  { teamSheetLayoutId: 3, position: 'prop', className: 'col-span-2'  },
  { teamSheetLayoutId: 4, position: 'lock', className: 'col-start-4 col-span-2' },
  { teamSheetLayoutId: 5, position: 'lock', className: 'col-span-2' },
  { teamSheetLayoutId: 6, position: 'backrow', className: 'col-start-3 col-span-2' },
  { teamSheetLayoutId: 7, position: 'backrow', className: 'col-span-2' },
  { teamSheetLayoutId: 8, position: 'backrow', className: 'col-span-2' },
  { teamSheetLayoutId: 9, position: 'scrumhalf', className: 'col-start-3 col-span-2' },
  { teamSheetLayoutId: 10, position: 'flyhalf', className: 'col-start-4 col-span-2' },
  { teamSheetLayoutId: 12, position: 'centre', className: 'col-start-5 col-span-2' },
  { teamSheetLayoutId: 13, position: 'centre', className: ' col-start-7 col-span-2' },
  { teamSheetLayoutId: 11, position: 'outsideBack', className: 'col-start-2 col-span-2' },
  { teamSheetLayoutId: 14, position: 'outsideBack', className: 'col-start-8 col-span-2' },
  { teamSheetLayoutId: 15, position: 'outsideBack', className: 'col-start-5 col-span-2' },
]

const Field = () => (
  <div className="max-w-column w-full min-h-fit">
    <div className="absolute max-w-column w-full z-[-1]">
      <Image
        src="/rugby_field.svg"
        alt="Rugby Field"
        height={0}
        width={0}
        style={{
          height: 'auto',
          opacity: 0.5,
          width: '100%',
        }}
      />
    </div>

    <div
      className="grid grid-cols-10 grid-rows-8 gap-4 justify-items-center content-center"
      style={{
        height: '100%',
        paddingBottom: '40%',
        paddingTop: '40%',
        width: '100%',
      }}
    >
      {fieldData.map(({ className, position, teamSheetLayoutId }) => (
        <PlayerCard
          className={className}
          key={teamSheetLayoutId}
          position={position}
          teamSheetLayoutId={teamSheetLayoutId}
        />
      ))}
    </div>
  </div>
)

export default Field
