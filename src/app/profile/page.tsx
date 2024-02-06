import { redirect } from 'next/navigation'

import { faUser } from '@fortawesome/free-solid-svg-icons'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import { findOrCreateUser } from '@functions/user'

import PageHeader from '@components/PageHeader'

import EditProfile from './_EditProfile'

const Page = async () => {
  const { getUser } = getKindeServerSession()
  const kindeCurrentUser = await getUser()

  const currentUser = await findOrCreateUser(kindeCurrentUser)

  if (!currentUser) redirect('/#')

  return (
    <div className="flex flex-col max-w-column p-3">
      <PageHeader
        icon={faUser}
        title="User Profile"
      />

      <EditProfile user={currentUser} />
    </div>
  )
}

export default Page