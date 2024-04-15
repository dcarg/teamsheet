import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Team } from '@prisma/client'

import { updateDefaultState } from '@functions/form'

const defaultState = {
  key: '',
  primaryColor: '',
  secondaryColor: '',
  title: '',
}

const formSchema = z.object({
  key: z.string().min(1, { message: 'Key is required' }),
  primaryColor: z
    .string()
    .length(7, { message: 'Must be a hex code' })
    .startsWith('#', { message: 'Must be a hex code' }),
  secondaryColor: z
    .string()
    .length(7, { message: 'Must be a hex code' })
    .startsWith('#', { message: 'Must be a hex code' }),
  title: z.string().min(1, { message: 'Title is required' }),
})

const useTeamForm = (team?: Team) => {
  const updatedDefaultState = updateDefaultState(defaultState, team)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: updatedDefaultState,
  })

  return form
}

export default useTeamForm