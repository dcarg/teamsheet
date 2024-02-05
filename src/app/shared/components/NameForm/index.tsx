'use client'

import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import clsx from 'clsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import type { TeamSheet } from '@prisma/client'

import { updateTeamSheet } from '@actions/teamSheet'

import { copyToClipboard } from '@functions/utils' 

import Button from '@components/Button'
import DownloadButton from '@components/DownloadButton'
import Label from '@components/Label'

type HandleEditTitleParams = {
  callbacks: {
    setIsEditing: Dispatch<SetStateAction<boolean>>,
  },
  id: number,
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
      shareId,
      title: initTitle,
    },
  } = props

  const pathname = usePathname()

  const [title, setTitle] = useState(initTitle || '')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (!title && !isEditing){
      setIsEditing(true)
    }
  }, [id, isEditing])

  return (
    <div className="p-2">
      {!isEditing && (
        <div className="flex justify-between items-center">
          <div className="text-xl"> 
            {title}
          </div>

          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faEdit}
              onClick={() => setIsEditing(true)}
            />

            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faCopy}
              onClick={() => copyToClipboard(
                `${process.env.NEXT_PUBLIC_VERCEL_URL}${pathname}/share?teamSheetId=${shareId}`
              )}
            />

            <DownloadButton href={`/api/ogImages/teamSheet/${shareId}`} />
          </div>
        </div>
      )}

      {isEditing && (
        <>
          <Label>Team Name</Label>

          <div className="flex justify-between">
            <input
              className="border rounded p-2 w-full border-slate-500"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <Button
              className="ml-2"
              onClick={() => handleEditTitle({
                callbacks: { setIsEditing },
                id,
                title,
              })}
              variant="create"
            >
              {title ? 'Update' : 'Save'}
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default NameForm