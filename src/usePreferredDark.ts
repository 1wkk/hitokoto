import { useEffect, useState } from 'react'

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  const mediaQuery = window.matchMedia(query)

  const update = () => setMatches(mediaQuery.matches)

  useEffect(() => {
    update()

    mediaQuery.addEventListener('change', update)

    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return matches
}

const usePreferredDark = () => useMediaQuery('(prefers-color-scheme: dark)')

export default usePreferredDark
