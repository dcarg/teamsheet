'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import type { Sport, Team } from '@prisma/client'

import SelectBox from './SelectBox'

interface SelectSportProps {
  sports: Sport[]
}

const SelectBoxes = (props: SelectSportProps) => {
  const { sports } = props

  const router = useRouter()
  const [teams, setTeams] = useState<Team[]>([])

  const pathname = usePathname()
  const [_, selectedSportKey] = pathname.split('/')

  useEffect(() => {
    if(selectedSportKey){
      const getTeams = async () => {
        const response = await fetch('http://localhost:3000/api/teams?sportId=1')
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