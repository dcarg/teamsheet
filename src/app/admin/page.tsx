import Link from 'next/link'

const Page = async () => {
  return (
    <div className="flex flex-col">
      <div className="font-bold mt-4 mx-4 text-center text-xl">Admin</div>

      <Link
        className="p-3 m-3 border rounded-lg hover:bg-gray-50"
        href="/admin/teams"
      >
        Teams
      </Link>
    </div>
  )
}

export default Page