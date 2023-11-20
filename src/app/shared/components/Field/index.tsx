import Image from 'next/image';

import PlayerCard from './PlayerCard';

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
  { key: 13, position: 'centre', className: ' col-start-6 col-span-2' },
  { key: 11, position: 'outsideBack', className: 'col-start-2 col-span-2' },
  { key: 14, position: 'outsideBack', className: 'col-start-8 col-span-2' },
  { key: 15, position: 'outsideBack', className: 'col-start-5 col-span-2' },
]

const Field = () => (
  <div>
    <div>Field</div>

    <div style={{ zIndex: -1, position: 'absolute' }}>
      <Image
        src="/rugby_field.svg"
        alt="Rugby Field"
        height={1500} // fix these to be responsive
        width={1000}
        style={{ opacity: 0.5 }}
      />
    </div>

    <div
      className="grid grid-cols-10 grid-rows-8 gap-4 justify-items-center content-center"
      style={{
        height: '1550px',
        width: '1000px',
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
