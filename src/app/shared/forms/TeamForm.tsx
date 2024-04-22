'use client'

import { z } from 'zod'

import type { Team } from '@prisma/client'

import { createTeam, updateTeam } from '@actions/team'
import type { ServerAction } from '@actions/types'

import { Button } from '@components/shadcn/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/shadcn/form'
import { Input } from '@components/shadcn/input'

import useTeamForm, { formSchema } from '@hooks/useTeamForm'

interface TeamFormProps {
  callbacks?: {
    afterActionFn?: (response: ServerAction<Team>) => void,
  },
  team?: Team,
}

const TeamForm = (props: TeamFormProps) => {
  const {
    callbacks,
    team,
  } = props

  const { afterActionFn } = callbacks || {}

  const form = useTeamForm(team)
  const { getValues } = form

  const { primaryColor, secondaryColor } = getValues()

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (team) {
      const response = await updateTeam({ ...values, id: team.id, })
      if (afterActionFn) afterActionFn(response)
    } else {
      const response = await createTeam(values)
      if (afterActionFn) afterActionFn(response)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel className="text-sm font-normal tracking-wider">Title</FormLabel>

                <FormMessage />
              </div>

              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="key"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel className="text-sm font-normal tracking-wider">Key</FormLabel>

                <FormMessage />
              </div>

              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="primaryColor"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel className="text-sm font-normal tracking-wider">Primary Color</FormLabel>

                <FormMessage />
              </div>

              <FormControl>
                <div className="flex items-center">
                  <Input className="w-[calc(100%-38px)]" {...field} />

                  <div
                    className="border rounded-full ml-2 h-[30px] w-[30px]"
                    style={{ backgroundColor: primaryColor }}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="secondaryColor"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel className="text-sm font-normal tracking-wider">Secondary Color</FormLabel>

                <FormMessage />
              </div>

              <FormControl>
                <div className="flex items-center">
                  <Input className="w-[calc(100%-38px)]" {...field} />

                  <div
                    className="border rounded-full ml-2 h-[30px] w-[30px]"
                    style={{ backgroundColor: secondaryColor }}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" variant="creative">Submit</Button>
      </form>
    </Form>
  )
}

export default TeamForm