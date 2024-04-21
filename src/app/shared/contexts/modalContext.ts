import { createContext } from 'react'

type ModalContext = {
  callbacks: {
    [key: string]: () => void,
  },
} | {
  [key: string]: boolean,
}

// @ts-ignore: Argument of type {} is not assignable to parameter of type
const ModalContext = createContext<ModalContext>({})

export default ModalContext