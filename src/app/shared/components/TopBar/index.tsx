'use client'

import { usePathname } from 'next/navigation'

import BreadCrumb from './BreadCrumb'

const TopBar = () => {
  const pathname = usePathname()

  const pathArray = pathname.split('/').filter(Boolean)

  return (
    <div className="border-b border-slate-500 flex flex-col items-center mb-1 w-full p-2">
      <div className="flex max-w-column w-full p-2">
        {!!pathArray.length && pathArray.map((path: string, index: number) => 
          <BreadCrumb
            key={path}
            entityKey={path}
            isLast={!!pathArray[index+1]}
            pathArray={pathArray}
          />
        )}
      </div>
    </div>
  )
}

export default TopBar
