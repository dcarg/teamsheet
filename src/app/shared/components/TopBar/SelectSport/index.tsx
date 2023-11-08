'use client'

import { useEffect, useState } from 'react'

import { useRouter } from "next/navigation"

import type { Sport, Team } from "@prisma/client"

import Label from '@components/Label'

interface SelectSportProps {
  sports: Sport[]
}

const SelectSport = (props: SelectSportProps) => {
  const { sports } = props

  const router = useRouter()
  const [selectedSport, setSelectedSport] = useState('')
  console.log(selectedSport, 'selectedSport')
  const [teams, setTeams] = useState<Team[]>()

  useEffect(() => {
    if(selectedSport){
      const getTeams = async () => {
        const response = await fetch('http://localhost:3000/api/teams?sportId=1')
        const teamResponse = await response.json()
  
        setTeams(teamResponse.teams)
      }
      getTeams()
    }
  }, [selectedSport])

  return (
    <>
      <select
        className="border border-slate-500 p-2 rounded-md"
        onChange={e => {
          router.push(`/${e.target.value}`)
          setSelectedSport(e.target.value)
        }}
      >
        <option value="">Please Select</option>
        {sports.map(({ key, title }) => (
          <option value={key} key={key}>{title}</option>
        ))}
      </select>

      {teams?.length && (
        <Label text="Team" />
      )}
    </>
  )
}

export default SelectSport