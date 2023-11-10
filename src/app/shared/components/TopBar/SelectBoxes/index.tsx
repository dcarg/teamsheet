'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import type { Sport, Team } from '@prisma/client'

import SelectBox from './SelectBox'
import SelectSport from './SelectSport'

interface SelectSportProps {
  sports: Sport[]
}

const SelectBoxes = (props: SelectSportProps) => {
  const { sports } = props

  const router = useRouter()
  const [teams, setTeams] = useState<Team[]>([])

  const pathname = usePathname()
  const [_, selectedSportKey] = pathname.split('/')

  console.log(pathname, 'pathname')

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

  const hasTeams = !!teams.length

  return (
    <div>
      <SelectSport sports={sports} />

      <SelectBox
        callbacks={{ onChange: (e) => router.push(`/${e.target.value}`) }}
        label="Team"
        selectOptions={teams}
      />

      {/* {hasTeams && (
        <div>
          <Label>Team</Label>

          <select
            className="border border-slate-500 p-2 rounded-md"
            onChange={e => router.push(window.location.pathname + `/${e.target.value}`)}
          >
            <option value="">Please Select</option>
            {teams.map(({ id, key, title }) => (
              <option value={key} key={id}>{title}</option>
            ))}
          </select>
        </div>
      )} */}
    </div>
  )
}

export default SelectBoxes