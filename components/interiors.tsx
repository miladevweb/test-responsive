'use client'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

let currentIndex = 0
const slideCount = 4
const slideWidth = 100

gsap.registerPlugin(useGSAP)
export function Interiors() {
   const ref = useRef<HTMLDivElement>(null)
   const { ref: inViewRef, inView } = useInView({root: null, rootMargin: '-50px'})

   useGSAP(() => {
      gsap.set('[data-interiors="text-container"]', { opacity: 0, x: -50 })
      if (inView) {
         gsap.to('[data-interiors="text-container"]', {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5,
         })
      }
   }, [inView])
   return (
      <div className="relative overflow-hidden bg-primary text-white">
         <div className="h-screen w-[400vw] flex" ref={ref}>
            {Array.from({ length: slideCount }).map((_, i) => (
               <div className="h-full w-screen relative" key={i}>
                  <Image src={`/img${i + 1}.webp`} alt={`img${i + 1}`} fill priority sizes="(max-width: 900px) 100vw" className="object-cover" />
               </div>
            ))}
         </div>

         <div className="absolute top-10 left-10 mix-blend-difference" data-interiors="text-container" ref={inViewRef}>
            <h3 className="text-6xl font-medium">Selfhood</h3>
            <p className="opacity-90">
               Lorem, ipsum dolor sit amet <br data-hidden /> consectetur adipisicing elit. <br /> Lorem, ipsum.
            </p>
         </div>

         <button
            className="absolute bottom-10 left-10 mix-blend-difference outline-0"
            onClick={() => {
               if (currentIndex === 0) {
                  gsap.fromTo(
                     ref.current,
                     {
                        opacity: 0.5,
                     },
                     {
                        opacity: 1,
                        duration: window.innerWidth > 600 ? 1 : 0.3,
                        x: `-${(slideCount - 1) * slideWidth}vw`,
                     },
                  )
                  currentIndex = slideCount - 1
               } else {
                  gsap.fromTo(
                     ref.current,
                     {
                        opacity: 0.5,
                     },
                     {
                        opacity: 1,
                        duration: window.innerWidth > 600 ? 1 : 0.3,
                        x: `-${(currentIndex - 1) * slideWidth}vw`,
                     },
                  )
                  currentIndex--
               }
            }}
         >
            Previous Project
         </button>
         <button
            className="absolute bottom-10 right-10 mix-blend-difference outline-0"
            onClick={() => {
               currentIndex++
               if (currentIndex >= slideCount) {
                  gsap.fromTo(
                     ref.current,
                     {
                        opacity: 0.5,
                     },
                     {
                        x: 0,
                        opacity: 1,
                        duration: window.innerWidth > 600 ? 1 : 0.3,
                     },
                  )
                  currentIndex = 0
               } else {
                  gsap.fromTo(
                     ref.current,
                     {
                        opacity: 0.5,
                     },
                     {
                        opacity: 1,
                        duration: window.innerWidth > 600 ? 1 : 0.3,
                        x: `-${currentIndex * slideWidth}vw`,
                     },
                  )
               }
            }}
         >
            Next Project
         </button>
      </div>
   )
}
