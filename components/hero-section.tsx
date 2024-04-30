'use client'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { useInView } from 'react-intersection-observer'

gsap.registerPlugin(useGSAP)
export function HeroSection() {
   const { ref, inView } = useInView({ root: null, rootMargin: '-100px' })
   const h2Container = useRef<HTMLDivElement>(null)

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   useGSAP(() => {
      if (inView) {
         if (window.innerWidth > 600) {
            h2Container.current?.querySelectorAll('h2').forEach((el) => {
               el.innerHTML = el.textContent!.replace(/\S/g, "<span class='letter'>$&</span>")
            })
            const letters = gsap.utils.toArray('.letter')
            gsap.from(letters, { y: -100, opacity: 0, ease: 'power1.inOut', stagger: 0.1, delay: 0.8 })
         } else {
            gsap.from('#h2-container h2', {
               opacity: 0,
               y: 50,
               duration: 0.8,
               stagger: 0.6,
               delay: 0.8,
            })
         }
      }
   }, [inView])
   return (
      <div>
         <section className="w-full h-[calc(100vh-80px)] font-national flex items-end justify-between px-[2vw]" data-hero="section" ref={ref}>
            <div className="text-[11vw] leading-[80%] mb-20" data-hero="h2-container" id="h2-container" ref={h2Container}>
               <h2>
                  OUT WITH
                  <br data-hidden /> THE OLD
               </h2>
               <h2>
                  IN WITH THE
                  <br data-hidden /> <span data-hero="upper">BOLD</span>
               </h2>
            </div>

            <div className="bg-secondary text-primary rounded-full size-[10vw] grid place-items-center text-[3vw] leading-[80%] text-center fixed z-10 right-11 bottom-10" id="fixed-circle">
               <div>
                  <p>WORK</p>
                  <p>WITH US?</p>
               </div>
            </div>
         </section>
      </div>
   )
}
