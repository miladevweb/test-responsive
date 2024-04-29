'use client'
import { useRef } from 'react'
import { Logo, Moon, Sun } from '../svg'
import { useNavbar } from './use-navbar'

export default function Navbar() {
   const ref = useRef<HTMLButtonElement>(null)
   const { coords, isDark, setCoords, setIsDark } = useNavbar(ref)

   return (
      <>
         <nav className="fixed z-10 top-0 h-20 w-full flex items-center justify-between px-20 -mt-[10px]" data-navbar="container">
            <Logo fill={`${isDark ? '#fff' : '#080f0f'}`} className="size-14 transition-[fill] duration-700 ease-in" />

            <section className="flex gap-x-5" data-switch="container">
               <button
                  ref={ref}
                  aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                  className="w-16 h-8 rounded-2xl flex items-center px-1 bg-primary dark:bg-white transition-[background-color] duration-700 ease-in outline-0"
                  onClick={() => {
                     if (ref.current) {
                        const { top, left } = ref.current?.getBoundingClientRect()
                        setCoords({ x: left + 22 + 'px', y: top + 10 + 'px' })
                     }
                     setIsDark(!isDark)
                     localStorage.setItem('theme', isDark ? 'light' : 'dark')
                  }}
               >
                  <div className="size-5 p-[3px] rounded-full dark:bg-primary dark:ml-0 bg-white ml-[calc(64px-50%)] transition-[margin-left] duration-300 ease-in">{isDark ? <Moon /> : <Sun />}</div>
               </button>

               <div className="grid content-between py-[7px]">
                  <div className="w-9 h-[3.5px] dark:bg-white bg-primary transition-[background-color] duration-700 ease-in"></div>
                  <div className="w-9 h-[3.5px] dark:bg-white bg-primary transition-[background-color] duration-700 ease-in"></div>
               </div>
            </section>
         </nav>

         <div id="background" style={{ clipPath: isDark ? `circle(200% at ${coords.x} ${coords.y})` : `circle(0px at ${coords.x} ${coords.y})` }}></div>
      </>
   )
}
