'use client'

import clsx from 'clsx'

import useIsMounted from '@hooks/useIsMounted'

const TeamSheetBlankState = () =>  {

  const isMounted = useIsMounted()
  const isMobile = isMounted && window.innerWidth < 500
  
  return (
    <div className={clsx(
      "flex w-full mt-5",
      isMobile ? "flex-wrap justify-center" : 'justify-between',
      )}>
      <div className="flex flex-col items-center content-center">
        <div className="text-lg">
          You haven&apos;t created any team sheets yet.
        </div>

        <div className="mt-1 text-base text-slate-500">
          Click the create button above to get started.
        </div>
      </div>
    </div>
  )
}

export default TeamSheetBlankState