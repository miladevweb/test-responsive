import { RefObject, useEffect, useState } from 'react'

export function useNavbar(ref: RefObject<HTMLButtonElement>) {
   const theme = localStorage.getItem('theme')
   const [isDark, setIsDark] = useState(() => {
      if (theme === 'dark') return true
      return false
   })
   useEffect(() => {
      if (theme === 'dark') {
         setIsDark(true)
         document.documentElement.classList.add('dark')
      } else {
         setIsDark(false)
         document.documentElement.classList.remove('dark')
      }
   }, [isDark])

   const [coords, setCoords] = useState({ x: '100%', y: '0%' })
   useEffect(() => {
      function resizeCoords() {
         if (ref.current) {
            const { top, left } = ref.current.getBoundingClientRect()
            setCoords({ x: left + 22 + 'px', y: top + 10 + 'px' })
         }
      }
      window.addEventListener('resize', resizeCoords)
      return () => window.removeEventListener('resize', resizeCoords)
   }, [ref])

   return { isDark, setIsDark, coords, setCoords }
}
