import prisma from '@db/prismaSingleton'

import SelectGrid from '@components/SelectGrid'

const Page = async () => {
  const sports = await prisma.sport.findMany()

  return (
    <div className="max-w-column">
      <div className="p-2 w-full">
        <div className="font-semibold text-center my-3">
          SELECT A SPORT:
        </div>

        <SelectGrid
          entityKey="sport"
          entities={sports}
        />
      </div>
    </div>
  )
}

export default Page