'use client'

import { usePathname } from 'next/navigation'

import BreadCrumb from './BreadCrumb'

const TopBar = () => {

  const pathname = usePathname()
  console.log('pathname', pathname)

  const pathArray = pathname.split('/').filter(Boolean)
  console.log('pathArray', pathArray)

  return (
    <div className="border-b border-slate-500 flex flex-col h-topBarHeight items-center mb-1 w-full">
      <div className="flex items-start max-w-column w-full p-2">
        {!!pathArray.length && pathArray.map((path: string) => 
          <BreadCrumb entityKey={path} />
        )}
      </div>
    </div>
  )
}

export default TopBar
