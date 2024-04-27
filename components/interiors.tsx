'use client'
import { gsap } from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'

let currentIndex = 0
const slideCount = 3
const slideWidth = 100

export function Interiors() {
   const ref = useRef<HTMLDivElement>(null)
   return (
      <div className="relative">
         <div className="h-[calc(100vh-80px)] w-[300vw] flex overflow-hidden" ref={ref}>
            {Array.from({ length: 3 }).map((_, i) => (
               <div className="h-full w-screen relative" key={i}>
                  <Image src={`/img${i + 1}.webp`} alt={`img${i + 1}`} fill priority sizes="(max-width: 900px) 100vw" />
               </div>
            ))}
         </div>

         <button
            className="absolute top-[50%] right-10 mix-blend-difference text-white"
            onClick={() => {
               currentIndex++
               if (currentIndex >= slideCount) {
                  gsap.fromTo(
                     ref.current,
                     {
                        opacity: 0,
                     },
                     {
                        opacity: 1,
                        duration: 1,
                        x: 0,
                     },
                  )
                  currentIndex = 0
               } else {
                  gsap.fromTo(
                     ref.current,
                     {
                        opacity: 0,
                     },
                     {
                        opacity: 1,
                        duration: 0.5,
                        x: `-${currentIndex * slideWidth}vw`,
                     },
                  )
               }
            }}
         >
            NEXT
         </button>
      </div>
   )
}
