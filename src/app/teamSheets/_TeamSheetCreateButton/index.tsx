'use client'

import Link from 'next/link'

import useIsMounted from '@hooks/useIsMounted'

const TeamSheetCreateButton = () =>  {

  const isMounted = useIsMounted()
  const isMobile = isMounted && window.innerWidth < 500

  return (
    <Link href="/sport">
      <div className="p-2 border rounded bg-green-500 hover:bg-green-600 text-white font-semibold">
        {`+ Create ${isMobile ? '' : 'Team Sheet'}`}
      </div>
    </Link>
  )
}

export default TeamSheetCreateButton