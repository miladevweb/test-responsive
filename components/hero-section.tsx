export function HeroSection() {
   return (
      <section className="w-full h-[calc(100vh-80px)] font-national flex items-end justify-between px-[2vw]" data-hero="section">
         <div className="text-[11vw] leading-[80%] mb-20">
            <h2>
               OUT WITH <br data-hidden /> THE OLD
            </h2>
            <h2>
               IN WITH THE <br data-hidden /> <span>BOLD</span>
            </h2>
         </div>

         <div className="bg-secondary text-primary rounded-full size-[10vw] grid place-items-center text-[3vw] leading-[80%] text-center fixed z-10 right-11 bottom-10" id="fixed-circle">
            <div>
               <p>WORK</p>
               <p>WITH US?</p>
            </div>
         </div>
      </section>
   )
}
