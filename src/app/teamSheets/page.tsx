import { redirect } from 'next/navigation'

import { faUsersRectangle } from '@fortawesome/free-solid-svg-icons'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import prisma from '@db/prismaSingleton'

import { findOrCreateUser } from '@functions/user'

import PageHeader from '@components/PageHeader'

import type { TeamSheetWithTeam } from '@types'

import TeamSheetListItem from './_TeamSheetListItem'

const Page = async () => {
  const { getUser } = getKindeServerSession()
  const kindeCurrentUser = await getUser()

  const currentUser = await findOrCreateUser(kindeCurrentUser)
  const { id: currentUserId } = currentUser

  if (!currentUserId) redirect('/#')

  const userTeamSheets = await prisma.teamSheet.findMany({
    where: {
      userId: currentUserId,
    },
    include: {
      team: true,
    }
  })

  const hasTeamSheets = !!userTeamSheets?.length

  return (
    <div className="flex flex-col max-w-column p-3">
      <PageHeader
        icon={faUsersRectangle}
        title="My Team Sheets"
      />
      
      {hasTeamSheets && (
        <div>
          {userTeamSheets.map((teamSheet: TeamSheetWithTeam) => (
            <TeamSheetListItem key={teamSheet.id} teamSheet={teamSheet} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Page