'use client'

import type { ChangeEvent } from 'react'

import Label from '@components/Label'

type SelectOption = {
  id: number,
  key: string,
  title: string,
}

interface SelectBoxProps {
  callbacks: {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
  }
  label: string,
  selectOptions: SelectOption[],
}

const SelectBox = (props: SelectBoxProps) => {
  const {
    callbacks: {
      onChange,
    },
    label,
    selectOptions,
  } = props

  return (
    <div className="flex flex-col">
      <Label>{label}</Label>

      <select
        className="border border-slate-500 p-2 rounded-md"
        onChange={e => onChange(e)}
      >
        <option value="">Please Select</option>
        {selectOptions.map(({ id, key, title }) => (
          <option value={key} key={id}>{title}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectBox