import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

type TeamContext = {
  callbacks: {
    closeModal: () => void,
    openModal: () => void,
    setSelectedPosition: Dispatch<SetStateAction<string>>,
  },
  showModal: boolean,
}

const teamContextDefaultValue = {
  callbacks: {
    closeModal: () => null,
    openModal: () => null,
    setSelectedPosition: () => null,
  },
  showModal: false,
}

const TeamContext = createContext<TeamContext>(teamContextDefaultValue)

export default TeamContext