'use client'

import { createContext, useContext } from 'react'

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"

import { findOrCreateUser } from '@functions/user'

import type { User } from '@prisma/client'

type GlobalContextProps = {
  currentUser?: User,
}

const GlobalContext = createContext<GlobalContextProps>({})

export function GlobalContextProvider({ children }){
  const { user } = useKindeBrowserClient()
  console.log('user', user)

  const currentUser = findOrCreateUser(user)
  // console.log('currentUser', currentUser)

  return (
    <GlobalContext.Provider value={{ currentUser }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)