import { createContext } from 'react'

type ModalContext = {
  [key: string]: any,
}

const ModalContext = createContext<ModalContext>({})

export default ModalContext