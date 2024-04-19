'use client'

import { z } from 'zod'

import type { Team } from '@prisma/client'

import { updateTeam } from '@actions/team' 

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
import { useToast } from '@components/shadcn/use-toast'

import useTeamForm, { formSchema } from '@hooks/useTeamForm'

interface TeamFormProps {
  team: Team,
}

const TeamForm = (props: TeamFormProps) => {
  const { team } = props

  const form = useTeamForm(team)
  const { getValues } = form

  const { primaryColor, secondaryColor } = getValues()

  const { toast } = useToast()

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await updateTeam({ ...values, id: team.id })
    const { success, error } = response

    if (!success) return toast({ title: error, variant: 'destructive' })
    toast({ title: 'Team Updated' })
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