'use client'

import Link from 'next/link'

const TeamSheetCreateButton = () =>  (
  <Link href="/sport">
    <div className="p-2 border rounded bg-green-500 hover:bg-green-600 text-white font-semibold">
      {`+ Create ${window.innerWidth < 500 ? '' : 'Team Sheet'}`}
    </div>
  </Link>
)

export default TeamSheetCreateButton