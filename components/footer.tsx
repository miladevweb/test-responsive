'use client'
import Link from 'next/link'
import { Logo } from './svg'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useInView } from 'react-intersection-observer'

gsap.registerPlugin(useGSAP)
export function Footer() {
   const { ref, inView } = useInView({ rootMargin: '-50px' })
   useGSAP(() => {
      gsap.set('footer', { opacity: 0, y: -50 })
      if (inView) {
         gsap.to('footer', {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5,
         })
      }
   }, [inView])
   return (
      <footer className="h-44 w-full px-36 grid grid-cols-1 content-center" data-footer="container" ref={ref}>
         <Link href={'#main'}>
            <Logo className="dark:fill-white fill-[#080f0f] size-20 transition-[fill] duration-700 ease-in" />
         </Link>

         <section className="flex justify-between text-[13px]">
            <p>© NU CREATIVE 2024 | Brand and Design Agency</p>

            <div className="grid grid-cols-2 gap-x-20">
               <span>Corporate policies</span>
               <span>Privacy policy</span>
            </div>
         </section>
      </footer>
   )
}
