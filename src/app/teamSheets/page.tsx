import { redirect } from 'next/navigation'

import { faUsersRectangle } from '@fortawesome/free-solid-svg-icons'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import prisma from '@db/prismaSingleton'

import { findOrCreateUser } from '@functions/user'

import PageHeader from '@components/PageHeader'

import type { TeamSheetWithRelations } from '@types'

import TeamSheetListItem from './_TeamSheetListItem'

const Page = async () => {
  const { getUser } = getKindeServerSession()
  const kindeCurrentUser = await getUser()

  const currentUser = await findOrCreateUser(kindeCurrentUser)
  if (!currentUser?.id) redirect('/#')

  const userTeamSheets = await prisma.teamSheet.findMany({
    where: {
      userId: currentUser?.id,
    },
    include: {
      team: {
        include: {
          competitionTeams: {
            include: {
              competition: {
                include: {
                  sport: true,
                },
              },
            },
          },
        },
      },
    },
    orderBy: { updatedAt: 'desc' },
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
          {userTeamSheets.map((teamSheet: TeamSheetWithRelations) => (
            <TeamSheetListItem key={teamSheet.id} teamSheet={teamSheet} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Page