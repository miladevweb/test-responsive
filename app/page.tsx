import { About } from "@/components/about"
import { HeroSection } from "@/components/hero-section"
import { Interiors } from "@/components/interiors"

export const metadata = {
   title: 'Home Page',
}
export default function Page() {
   return (
      <>
         <HeroSection />
         <About />
         {/* <Interiors /> */}
      </>
   )
}
