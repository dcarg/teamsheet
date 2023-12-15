import Image from 'next/image'

interface PlayerIconProps {
  margin?: number,
  number?: string,
}

const PlayerIcon = (props: PlayerIconProps) => {
  const { number } = props

  return (
    <div className="flex relative w-full justify-center content-center">
      <Image
        src='/wallaby_jersey.svg'
        height={40}
        width={40}
      />

      <div className={`absolute bottom-1.5 text-xl text-white inset-x-1/4`}
      >
        {number}
      </div>
    </div>
  )
}

export default PlayerIcon
