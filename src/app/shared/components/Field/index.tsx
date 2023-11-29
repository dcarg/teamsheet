import Image from 'next/image'

import PlayerCard from './PlayerCard'

const fieldData = [
  { key: 2, position: 'prop', className: 'col-start-3 col-span-2' },
  { key: 1, position: 'hooker', className: 'col-span-2' },
  { key: 3, position: 'prop', className: 'col-span-2'  },
  { key: 4, position: 'lock', className: 'col-start-4 col-span-2' },
  { key: 5, position: 'lock', className: 'col-span-2' },
  { key: 6, position: 'backrow', className: 'col-start-3 col-span-2' },
  { key: 7, position: 'backrow', className: 'col-span-2' },
  { key: 8, position: 'backrow', className: 'col-span-2' },
  { key: 9, position: 'scrumhalf', className: 'col-start-3 col-span-2' },
  { key: 10, position: 'flyhalf', className: 'col-start-4 col-span-2' },
  { key: 12, position: 'centre', className: 'col-start-5 col-span-2' },
  { key: 13, position: 'centre', className: ' col-start-7 col-span-2' },
  { key: 11, position: 'outsideBack', className: 'col-start-2 col-span-2' },
  { key: 14, position: 'outsideBack', className: 'col-start-8 col-span-2' },
  { key: 15, position: 'outsideBack', className: 'col-start-5 col-span-2' },
]

const Field = () => (
  <div className="max-w-column w-full min-h-fit">
    <div>Field</div>

    <div className="max-w-column w-full" style={{ zIndex: -1, position: 'absolute' }}>
      <Image
        src="/rugby_field.svg"
        alt="Rugby Field"
        height={0}
        width={0}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
      {fieldData.map(({ className, key, position }) => (
        <PlayerCard
          className={className}
          key={key}
          position={position}
        />
      ))}
    </div>
  </div>
)

export default Field
