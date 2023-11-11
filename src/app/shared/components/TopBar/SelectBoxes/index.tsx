'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import type { Sport, Team } from '@prisma/client'

import { BASE_API_URL } from '@api/base'

import SelectBox from './SelectBox'

interface SelectSportProps {
  sports: Sport[]
}

const SelectBoxes = (props: SelectSportProps) => {
  const { sports } = props

  const router = useRouter()

  const pathname = usePathname()
  const [_, selectedSportKey] = pathname.split('/')

  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    if(selectedSportKey){
      const getTeams = async () => {
        const response = await fetch(`${BASE_API_URL}/teams?sportId=1`)
        const teamResponse: Team[] = await response.json()

        setTeams(teamResponse)
      }
      getTeams()
    }
  }, [selectedSportKey])

  const shouldShowTeamSelect = !!selectedSportKey && !!teams.length

  return (
    <div className="flex">
      <SelectBox
        callbacks={{ onChange: (e) => router.push(`/${e.target.value}`) }}
        label="Sport"
        selectOptions={sports}
      />

      {shouldShowTeamSelect && (
        <SelectBox
          callbacks={{ onChange: (e) => router.push(`/${e.target.value}`) }}
          divClasses="ml-3"
          label="Team"
          selectOptions={teams}
        />
      )}
    </div>
  )
}

export default SelectBoxes