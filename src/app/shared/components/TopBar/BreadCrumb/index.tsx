'use client'

import Image from "next/image"
import Link from "next/link"

import { getBreadCrumbPath } from '@functions/paths'

import * as logos from '@logos/index'

interface BreadCrumbProps {
  entityKey: string,
  index: number,
  isLast: boolean,
  pathArray: string[],
}

const BreadCrumb = (props: BreadCrumbProps) => {
  const { entityKey, index, isLast, pathArray } = props

  const breadCrumbPath = getBreadCrumbPath(index, pathArray)

  const entityLogoKey = `${entityKey}Logos`
  const entityLogos = logos[entityLogoKey] || {}

  // WIP Need to add smaller square logos to use as breadcrumb links instead of text

  return (
    <div className="pr-1 hover:text-cyan-400">
      <Link href={breadCrumbPath}>
        <div
          // className="flex flex-col h-[20px] w-[20px] justify-center items-center border rounded p-2"
          
        >
          {/* <Image
            src={src}
            alt={title}
            height={150}
            width={150}
          /> */}

          <div className="flex justify-center mt-2">
            {entityKey.toUpperCase()}{isLast ? "" : " > " }
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BreadCrumb
