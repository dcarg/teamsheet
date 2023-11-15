'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons' 

import type { Sport, Team } from '@prisma/client'

import { BASE_API_URL } from '@api/base'

import Label from '@components/Label'

import SelectBox from './SelectBox'

interface SelectSportProps {
  sports: Sport[]
}

const SelectBoxes = (props: SelectSportProps) => {
  const { sports } = props

  const router = useRouter()

  const pathname = usePathname()
  const [_, selectedSportKey] = pathname.split('/')

  const selectedSportId = sports.find(sport => sport.key === selectedSportKey)?.id

  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    if(selectedSportKey){
      fetch(`${BASE_API_URL}/teams?sportId=${selectedSportId}`)
        .then(response => response.json())
        .then(teamsResponse => setTeams(teamsResponse))
    }
  }, [selectedSportKey])

  const shouldShowTeamSelect = !!selectedSportKey && !!teams.length

  const [showSports, setShowSports] = useState(false)

  return (
    <div className="flex">
      <div className="flex flex-col">
        <Label>Sport</Label>

        <div
          className="border border-slate-500 hover:cursor-pointer relative rounded-md p-2 w-36"
          onClick={() => setShowSports(!showSports)}
        >
          Please Select <FontAwesomeIcon icon={showSports ? faAngleDown : faAngleRight} />

          {showSports && (
            <div className="absolute border border-slate-500 bg-white flex flex-col top-12 left-0 rounded-md p-2 w-36 z-10">
              {sports.map(sport => (
                <Link
                  className="hover:text-cyan-500"
                  href={sport.key}
                  key={sport.id}
                >
                  {sport.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* <SelectBox
        callbacks={{ onChange: (e) => router.push(`/${e.target.value}`) }}
        label="Sport"
        selectOptions={sports}
      /> */}

      {shouldShowTeamSelect && (
        <SelectBox
          callbacks={{ onChange: (e) => router.push(window.location.pathname + `/${e.target.value}`) }}
          divClasses="ml-3"
          label="Team"
          selectOptions={teams}
        />
      )}
    </div>
  )
}

export default SelectBoxes