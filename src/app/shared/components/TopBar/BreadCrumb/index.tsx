'use client'

import { usePathname } from 'next/navigation'

import Image from "next/image"
import Link from "next/link"

import * as logos from '@logos/index'

interface BreadCrumbProps {
  entityKey: string,
}

const BreadCrumb = (props: BreadCrumbProps) => {
  const { entityKey } = props

  const entityLogoKey = `${entityKey}Logos`
  console.log('entityLogoKey', entityLogoKey)
  const entityLogos = logos[entityLogoKey] || {}
  console.log('entityLogos', entityLogos)

  return (
    <Link
    href="#"
    // href={`${pathname}/${key}`}
    >
      <div
        className="flex flex-col h-[20px] w-[20px] justify-center items-center border rounded p-2"
        
      >
        {/* <Image
          src={src}
          alt={title}
          height={150}
          width={150}
        /> */}

        <div className="flex justify-center mt-2">
          {entityKey.toUpperCase()}
        </div>
      </div>
    </Link>
  )
}

export default BreadCrumb
