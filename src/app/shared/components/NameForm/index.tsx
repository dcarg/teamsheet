'use client'

import { useContext, useState } from 'react'

import type { TeamSheet } from '@prisma/client'

import { updateTeamSheet } from '@actions/teamSheet'

import TeamContext from '@contexts/teamContext'

type HandleSaveParams = {
  teamSheet: TeamSheet,
  updatedTitle: string,
}

const handleSave = async (params: HandleSaveParams) => {
  const {
    teamSheet: { id },
    updatedTitle,
  } = params

  const payload = {
    id,
    title: updatedTitle,
  }

  await updateTeamSheet(payload)
}

const NameForm = () => {
  const teamContextValue = useContext(TeamContext)
  const {
    teamSheet,
  } = teamContextValue

  const { title } = teamSheet || {}

  const [updatedTitle, setUpdatedTitle] = useState(title)

  return (
    <div className="p-3">
      <input
        className="border border-rose-500"
        name="name"
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />

      <button
        className="border"
        onClick={() => handleSave({ teamSheet, updatedTitle })}
      >
        Save
      </button>
    </div>
  )
}

export default NameForm