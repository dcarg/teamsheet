'use client'

import type { Team } from '@prisma/client'

import { Button } from '@components/shadcn/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/shadcn/form'
import { Input } from '@components/shadcn/input'

import useTeamForm from '@hooks/useTeamForm'

// z.infer<typeof formSchema>
const onSubmit = (values) => {
  console.log(values)
}

interface TeamFormProps {
  team: Team,
}

const TeamForm = (props: TeamFormProps) => {
  const { team } = props

  const form = useTeamForm(team)

  // TODO
  // 2. team update server action
  // 3. refactor form stuff to single hook if possible

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel className="font-normal tracking-wider">Title</FormLabel>

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
                <FormLabel className="font-normal tracking-wider">Key</FormLabel>

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
                <FormLabel className="font-normal tracking-wider">Primary Color</FormLabel>

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
          name="secondaryColor"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel className="font-normal tracking-wider">Secondary Color</FormLabel>

                <FormMessage />
              </div>

              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="default">Submit</Button>
      </form>
    </Form>
  )
}

export default TeamForm