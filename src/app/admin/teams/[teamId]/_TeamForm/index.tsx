'use client'

import type { Team } from '@prisma/client'

import type { ServerAction } from '@actions/types'

import { useToast } from '@components/shadcn/use-toast'

import TeamFormBase from '@forms/TeamForm'

interface TeamFormProps {
  team: Team,
}

const TeamForm = (props: TeamFormProps) => {
  const { team } = props

  const { toast } = useToast()

  const afterActionFn = (response: ServerAction<Team>) => {
    const { success } = response

    if (!success) {
      const { error } = response

      toast({ title: error, variant: 'destructive' })
    } else {
      toast({ title: 'Team Updated' })
    }
  }

  return (
    <TeamFormBase callbacks={{ afterActionFn }} team={team} />
  )
}

export default TeamForm