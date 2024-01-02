import Image from 'next/image'

interface PlayerIconProps {
  number?: string,
  unSelected?: boolean,
}

const PlayerIcon = (props: PlayerIconProps) => {
  const { number, unSelected } = props

  // Update this with an empty player silhouette svg when I figure out how to generate one for unselected players

  return (
    <div className="flex relative w-full justify-center content-center">
      <Image
        src='/wallaby_jersey.svg'
        alt="rugby jersey"
        height={35}
        width={35}
        style={{
          opacity: unSelected ? 0.6 : 1,
        }}
      />

      <div className="absolute bottom-1.5 text-l text-white font-semibold inset-x-1/4">
        {number}
      </div>
    </div>
  )
}

export default PlayerIcon
