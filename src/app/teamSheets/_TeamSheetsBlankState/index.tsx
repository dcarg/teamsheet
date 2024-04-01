import Link from 'next/link'

const TeamSheetListItem = () => {


  return (
    <div>
      <div>
        You haven&apos;t created any team sheets yet.
      </div>

      <Link href="/">
        <div className="mt-3 p-2 w-fit border rounded bg-green-500 hover:bg-green-600 text-white font-semibold">
          + Create Team Sheet
        </div>
      </Link>
    </div>
  )
}

export default TeamSheetListItem