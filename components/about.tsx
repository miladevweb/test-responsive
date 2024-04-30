'use client'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useInView } from 'react-intersection-observer'

gsap.registerPlugin(useGSAP)
export function About() {
   const { ref, inView } = useInView({ root: null, rootMargin: '-100px' })
   useGSAP(() => {
      gsap.set("[data-about='container'] > div", { opacity: 0, x: -25 })
      gsap.set("[data-about='container'] > p", { opacity: 0, x: -25 })

      if (inView) {
         const targets = gsap.utils.toArray("[data-about='container'] > div, [data-about='container'] > p")
         gsap.to(targets, {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.5,
            ease: 'power2.inOut',
            delay: 0.8,
         })
      }
   }, [inView])
   return (
      <div>
         <div className="h-[calc(100vh-80px)] text-center flex flex-col justify-end pb-10" data-about="container" ref={ref}>
            <div className="font-national text-[6vw] leading-[90%] mb-16" data-about="h3-container">
               <h3>
                  We’re a strategic <br data-hidden /> branding and
               </h3>
               <h3>
                  design agency <br data-hidden />
                  for people trying to
               </h3>
               <h3>
                  reach the (almost) <br data-hidden /> <span>impossible.</span>
               </h3>
            </div>

            <div className="font-light" data-about="para-container">
               <p>We curate the brand and strategy mix that makes change happen. We bring creativity,</p>
               <p>knowledge and momentum to your table, crafting captivating designs and compelling </p>
               <p>stories, to help you build a stronger brand through authentic and powerful connections. </p>
            </div>

            <p className="font-thin mt-6 mb-4" data-about="solo-p">
               Turning the impossible into the unstoppable.
            </p>

            <div>
               <button className="bg-secondary rounded-2xl text-primary uppercase px-4 py-2 text-[13px] tracking-tight font-light">About us</button>
            </div>
         </div>
      </div>
   )
}
