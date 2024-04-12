import Link from 'next/link'

import type { Team } from '@prisma/client'

interface TeamListItemProps {
  team: Team,
}

const TeamListItem = (props: TeamListItemProps) => {
  const {
    team: {
      id,
      title,
    }
  } = props

  return (
    <Link
      className="p-3 mt-3 mx-3 border rounded-lg hover:bg-gray-50"
      href={`/admin/teams/${id}`}
    >
      {title}
    </Link>
  )
}

export default TeamListItem