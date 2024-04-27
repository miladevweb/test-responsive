export function About() {
   return (
      <div className="h-[calc(100vh-80px)] text-center flex flex-col justify-end pb-10">
         <div className="font-national text-[6vw] leading-[90%] mb-16">
            <h3>We’re a strategic branding and</h3>
            <h3>design agency for people trying to</h3>
            <h3>reach the (almost) impossible.</h3>
         </div>

         <div className="font-light">
            <p>We curate the brand and strategy mix that makes change happen. We bring creativity,</p>
            <p>knowledge and momentum to your table, crafting captivating designs and compelling </p>
            <p>stories, to help you build a stronger brand through authentic and powerful connections. </p>
         </div>

         <p className="font-thin mt-6 mb-4">Turning the impossible into the unstoppable.</p>

         <div>
            <button className="bg-secondary rounded-2xl text-primary uppercase px-4 py-2 text-[13px] tracking-tight font-light">About us</button>
         </div>
      </div>
   )
}
