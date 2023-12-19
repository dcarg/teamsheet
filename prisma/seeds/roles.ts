import type { PrismaClient } from '@prisma/client'

const seedRoles = (prisma: PrismaClient) => {
  const roles = [
    {
      key: 'admin',
      title: 'Admin',
    },
    {
      key: 'moderator',
      title: 'Moderator',
    },
    {
      key: 'user',
      title: 'User',
    },
  ]

  const records = roles.map(async role => (
    await prisma.role.upsert({
      where: { key: role.key },
      create: role,
      update: {},
    })
  ))

  return records
}

export default seedRoles