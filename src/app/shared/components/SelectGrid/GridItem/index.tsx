'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'


type GridItemProps = {
  entityLogo?: object,
  entity: {
    key?: string,
    title: string,
  },
  hideTitle?: boolean,
}

const GridItem = (props: GridItemProps) => {
  const { entityLogo, entity, hideTitle } = props
  const { src } = entityLogo || {}
  const { key, title } = entity

  const pathname = usePathname()

  return (
    <Link href={`${pathname}/${key}`}>
      <div className="flex flex-col h-[200px] w-[200px] justify-center items-center border rounded p-2">
        {key === "fantasy" && (
          <div className="font-semibold text-2xl">
            FANTASY
          </div>
        )}

        {key !== "fantasy" && (
          <Image
            src={src}
            alt={title}
            height={150}
            width={150}
          />
        )}

        {!hideTitle && (
          <div className="flex justify-center font-semibold mt-2">
            {title}
          </div>
        )}
      </div>
    </Link>
  )
}

export default GridItem
