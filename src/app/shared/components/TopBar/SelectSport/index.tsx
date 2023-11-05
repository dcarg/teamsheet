'use client'

import { useRouter } from "next/navigation"

import type { Sport } from "@prisma/client"

interface SelectSportProps {
  sports: Sport[]
}

const SelectSport = (props: SelectSportProps) => {
  const { sports } = props

  const router = useRouter()

  return (
    <select
      className="border border-slate-500 p-2 rounded-md"
      onChange={e => router.push(`/${e.target.value}`)}
    >
      <option value="">Please Select</option>
      {sports.map(({ key, title }) => (
        <option value={key} key={key}>{title}</option>
      ))}
    </select>
  )
}

export default SelectSport