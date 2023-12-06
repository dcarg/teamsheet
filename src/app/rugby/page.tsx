import Image from 'next/image'

const Page = () => (
  <div className="absolute max-w-column w-full">
    <Image
      src="/rugby_field.svg"
      alt="Rugby Field"
      priority
      height={0}
      width={0}
      style={{
        height: 'auto',
        opacity: 0.5,
        width: '100%',
      }}
    />
  </div>
)

export default Page