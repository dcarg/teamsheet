'use client'

import clsx from 'clsx'

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
  const { entityLogo, entity, hideTitle } = props || {}
  const { src } = entityLogo || {}
  const { key, primaryColor, title } = entity || {}

  const pathname = usePathname()

  // the backgroundColor here on line 35 isn't working because tailwind doesn't handle dhynamic class names
  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names

  return (
    <Link href={`${pathname}/${key}`}>
      <div
        className={clsx(
          "flex flex-col h-[200px] w-[200px] justify-center items-center border rounded p-2",
          primaryColor && `bg-[${primaryColor}]`
        )}
        
      >
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
