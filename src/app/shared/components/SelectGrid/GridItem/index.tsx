'use client'

import { usePathname } from 'next/navigation'

import Image from "next/image"
import Link from "next/link"

type GridItemProps = {
  entityLogo?: object,
  entity: {
    key?: string,
    primaryColor?: string,
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
        <Image
          src={src}
          alt={title}
          height={150}
          width={150}
        />

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
