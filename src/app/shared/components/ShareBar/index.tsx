'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

// ShareBar will have
// 1. Create your own button, refirects to sport page
// 2. Duplicate button

const ShareBar = () => {
  const pathname = usePathname()
  const sportHref = pathname.split('/')[1]

  return (
    <div className="flex p-2">
      <div className="border border-black p-1 rounded bg-cyan-400 hover:bg-cyan-500 text-slate-900 p-1">
        <Link
          href={`/${sportHref}`}
        >
          Create your own
        </Link>
      </div>

      <button
        className="border border-black p-1 rounded bg-cyan-400 hover:bg-cyan-500 text-slate-900 w-28 ml-2"
        onClick={() => console.log('create new teamsheet and redirect to edit page')}
      >
        Duplicate
      </button>
    </div>
  )
}

export default ShareBar