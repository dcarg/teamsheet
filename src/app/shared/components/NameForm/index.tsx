'use client'

import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

import clsx from 'clsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import type { TeamSheet } from '@prisma/client'

import { updateTeamSheet } from '@actions/teamSheet'

import Label from '@components/Label'

type HandleEditTitleParams = {
  callbacks: {
    setIsEditing: Dispatch<SetStateAction<boolean>>,
  },
  id: string,
  title: string,
}

const  handleEditTitle = async (params: HandleEditTitleParams) => {
  const {
    callbacks: { setIsEditing },
    id,
    title,
  } = params

  await updateTeamSheet({ id, title })
  setIsEditing(false)
}

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
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="p-2">
      {!isEditing && (
        <div className="flex justify-between items-center">
          <div className="text-xl"> 
            {title}
          </div>
          
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => setIsEditing(true)}
          />
        </div>
      )}

      {isEditing && (
        <>
          <Label>Team Name</Label>

          <div className="flex justify-between">
            <input
              className={clsx(
                "border rounded p-2 w-full",
                title ? "border-slate-500" : "border-rose-500"
              )}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <button
              className="border border-black p-1 rounded bg-cyan-400 hover:bg-cyan-500 text-slate-900 w-28 ml-2"
              onClick={() => handleEditTitle({ 
                callbacks: { setIsEditing },
                id,
                title, 
              })}
            >
              {title ? 'Update' : 'Save'}
            </button>
          </div>
        </>
      )}


    </div>
  )
}

export default NameForm