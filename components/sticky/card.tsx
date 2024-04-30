import Link from 'next/link'

type Props = {
   background: string
}
export function Card({ background }: Props) {
   return (
      <div className="sticky top-20 h-[70vh] w-full mb-3 rounded-[50px] pl-48 pr-24 text-black" style={{ backgroundColor: background }} id="card-container">
         <div className="flex justify-between items-center w-full h-[35%]" id="card-header">
            <header className="font-national text-[11.5vw] leading-[80%]">DIGITAL</header>
            <Link href={'#'} className="font-extralight border-2 border-black px-5 py-2 rounded-3xl">
               TELL ME MORE <span className="text-xl font-bold ml-1"> &#x2197;</span>
            </Link>
         </div>

         <div className="w-full h-[60%] flex justify-between items-start px-24 mt-11" id="card-info">
            <div className="w-[40%]">
               <h3 className="uppercase font-national text-[2.4vw]">Lorem ipsum dolor sit.</h3>
               <div className="font-light">
                  We combine strategy, creativity and tech brilliance under one roof, to get you front of mind in the digital world. And whilst helping you stand out, we lower internet carbon
                  emissions by building websites that are effective and sustainable too.
               </div>
            </div>

            <ul className="uppercase mt-1 mr-20 font-light">
               <li>Lorem, ipsum.</li>
               <li>Lorem, ipsum.</li>
               <li>Lorem, ipsum.</li>
               <li>Lorem, ipsum.</li>
               <li>Lorem, ipsum.</li>
            </ul>
         </div>
      </div>
   )
}
