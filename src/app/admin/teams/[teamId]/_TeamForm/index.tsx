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
  title: z.string().min(1),
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
      title: '',
    },
  })


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>

              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>

              <FormDescription>
                This is your public display name.
              </FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default TeamForm