'use client'

import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

import Button from '@components/Button'
import FormField from '@components/FormField'

import type { User } from '@prisma/client'

interface EditProfileProps {
  user: User,
}

const EditProfile = (props: EditProfileProps) => {
  const { user } = props || {}
  const { email, username } = user

  // TODO: Add useSetState/useForm hooks to manage User State and mutation?

  return (
    <div>
      <FormField className="mt-2" label="Username">
        <input
          className="border rounded p-2 w-full"
          onChange={(e) => console.log('Update Username')}
          value={username}
        />
      </FormField>

      <FormField className="mt-2" label="Email">
        <input
          className="border rounded p-2 w-full"
          onChange={(e) => console.log('Update Email')}
          value={email}
        />
      </FormField>

      <Button
        className="mt-3 py-2 px-3 w-auto font-semibold text-white"
        onClick={() => console.log('Update User')}
        text=" Update Profile"
      />
    </div>
  )
}

export default EditProfile