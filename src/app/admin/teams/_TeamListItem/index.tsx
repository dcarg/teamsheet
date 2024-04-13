import Link from 'next/link'

import type { Team } from '@prisma/client'

interface TeamListItemProps {
  team: Team,
}

const TeamListItem = (props: TeamListItemProps) => {
  const {
    team: {
      id,
      primaryColor,
      secondaryColor,
      title,
    },
  } = props

  return (
    <Link
      className="p-3 mt-3 mx-3 border rounded-lg hover:bg-gray-50"
      href={`/admin/teams/${id}`}
    >
      <div className="flex justify-between">
        <div>{title}</div>

        <div className="flex border">
          <div className='w-[30px]' style={{ backgroundColor: primaryColor }} />

          <div className='w-[10px]' style={{ backgroundColor: secondaryColor }} />
        </div>
      </div>
    </Link>
  )
}

export default TeamListItem