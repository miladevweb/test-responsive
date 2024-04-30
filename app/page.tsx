import { About } from '@/components/about'
import { HeroSection } from '@/components/hero-section'
import { Interiors } from '@/components/interiors'
import { Sticky } from '@/components/sticky'

export const metadata = {
   title: 'Clone Website #1',
}
export default function Page() {
   return (
      <>
         <HeroSection />
         <About />
         <Sticky />
         <Interiors />
      </>
   )
}
