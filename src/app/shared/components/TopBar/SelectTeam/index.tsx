'use client'

import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons' 

import type { Team } from '@prisma/client'

import { BASE_API_URL } from '@api/base'

import useOutsideClick from '@hooks/useOutsideClick'

import Label from '@components/Label'

const SelectTeam = () => {
  const pathname = usePathname()
  const [_, selectedSportKey, selectedTeamkey] = pathname.split('/')

  const [teams, setTeams] = useState<Team[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  useOutsideClick({
    callbacks: {
      action: () => setIsOpen(false)
    },
    enabled: isOpen,
    ref, 
  })

  const selectedTeam = teams.find(team => team.key === selectedTeamkey)

  useEffect(() => {
    if(selectedSportKey){
      fetch(`${BASE_API_URL}/teams?sportKey=${selectedSportKey}`)
        .then(response => response.json())
        .then(teamsResponse => setTeams(teamsResponse))
    }
  }, [selectedSportKey])

  return (
    <div className="flex flex-col">
      <Label>Team</Label>

      <div
        className="flex border border-slate-500 hover:cursor-pointer justify-between items-center relative rounded-md p-2 w-36"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedTeam?.title || 'Please Select'}

        <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight} />

        {isOpen && (
          <div className="absolute border border-slate-500 bg-white flex flex-col top-12 left-0 rounded-md p-2 w-36 z-10" ref={ref}>
            {teams.map(team => (
              <Link
                className="hover:text-cyan-500"
                href={`/${selectedSportKey}/${team.key}`}
                key={team.id}
              >
                {team.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SelectTeam