import { Card } from './card'

export function Sticky() {
   return (
      <section className="relative px-14" id='sticky-container'>
         {['#e5beed', '#a9f0d1', '#ade8ff', '#e5beed', '#a9f0d1', '#ade8ff'].map((element, index) => (
            <Card key={index} background={element} />
         ))}
      </section>
   )
}
