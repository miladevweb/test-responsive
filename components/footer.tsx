import { Logo } from './svg'

export function Footer() {
   return (
      <footer className="h-44 w-full px-36 grid content-center">
         <Logo className="dark:fill-white fill-[#080f0f] size-20 transition-[fill] duration-700 ease-in" />

         <section className='flex justify-between text-[13px]'>
            <p>© NU CREATIVE 2024 | Brand and Design Agency</p>

            <div className='grid grid-cols-2 gap-x-20'>
                <span>Corporate policies</span>
                <span>Privacy policy</span>
            </div>
         </section>
      </footer>
   )
}
