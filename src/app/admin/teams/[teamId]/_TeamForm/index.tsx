'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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

const onSubmit = (values: z.infer<typeof formSchema>) => {
  console.log(values)
}

interface TeamFormProps {
  team: Team,
}

const TeamForm = (props: TeamFormProps) => {
  const { team } = props

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      key: '',
      primaryColor: '',
      secondaryColor: '',
      title: '',
    },
  })

  // TODO
  // 2. team update server action
  // 3. refactor form stuff to single hook if possible

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal tracking-wider">Title</FormLabel>

              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="key"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal tracking-wider">Key</FormLabel>

              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="primaryColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal tracking-wider">Primary Color</FormLabel>

              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="secondaryColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal tracking-wider">Secondary Color</FormLabel>

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