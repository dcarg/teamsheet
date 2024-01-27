import Image from 'next/image'

import TopBar from '@components/TopBar'

const Page = () => (
  <div>
    <TopBar />

    <div className="absolute max-w-column">
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
  </div>
)

export default Page