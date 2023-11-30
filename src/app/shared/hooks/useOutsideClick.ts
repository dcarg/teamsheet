import { useEffect } from 'react'
import type { RefObject } from 'react'

type OutsideClickParams = {
  callbacks: {
    action: () => void,
  },
  ref: RefObject<HTMLElement>,
  enabled: boolean,
}

const useOutsideClick = (params: OutsideClickParams) => {
  const {
    callbacks: {
      action,
    },
    enabled,
    ref,
  } = params

  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      action()
    }
  }

  useEffect(() => {
    if (enabled) window.addEventListener('click', handleClick, true)

    return () => window.removeEventListener('click', handleClick, true)
  }, [enabled])
}

export default useOutsideClick