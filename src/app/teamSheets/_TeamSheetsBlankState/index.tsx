'use client'

import clsx from 'clsx'

const TeamSheetBlankState = () =>  (
  <div className={clsx(
    "flex w-full mt-5",
    { "justify-center": window.innerWidth < 500 },
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

export default TeamSheetBlankState