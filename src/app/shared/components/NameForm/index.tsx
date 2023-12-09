'use client'

import { useState } from 'react'

import clsx from 'clsx'

import type { TeamSheet } from '@prisma/client'

import { updateTeamSheet } from '@actions/teamSheet'

import Label from '@components/Label'

type NameFormProps = {
  teamSheet: TeamSheet,
}

const NameForm = (props: NameFormProps) => {
  const {
    teamSheet: {
      id,
      title: initTitle,
    },
  } = props

  const [title, setTitle] = useState(initTitle || '')

  return (
    <div className="py-3">
      <Label>Team Name</Label>

      <div className="flex justify-between">
        <input
          className={clsx(
            "border rounded p-2",
            title ? "border-slate-500" : "border-rose-500"
          )}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <button
          className="border border-black p-1 rounded bg-green-400 hover:bg-green-500 text-slate-900 w-28"
          onClick={() => updateTeamSheet({ id, title })}
        >
          Save
        </button>
      </div>

    </div>
  )
}

export default NameForm