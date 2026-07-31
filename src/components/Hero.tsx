import { useEffect, useState } from 'react'
import Landscape from '../assets/landscape.jpeg'

const PHRASES = [
   "Fullstack Developer ready for deployment",
   "Cybersecurity enthusiast",
   "Data Science & Hardware explorer",
]

const useTypewriter = (
   phrases: string[],
   typeSpeed = 80,
   deleteSpeed = 40,
   pause = 2200
) => {
   const [text, setText] = useState('')
   const [phraseIndex, setPhraseIndex] = useState(0)
   const [deleting, setDeleting] = useState(false)

   useEffect(() => {
      const current = phrases[phraseIndex]
      let timeout: number

      if (!deleting) {
         if (text.length < current.length) {
            timeout = window.setTimeout(
               () => setText(current.slice(0, text.length + 1)),
               typeSpeed
            )
         } else {
            timeout = window.setTimeout(() => setDeleting(true), pause)
         }
      } else {
         if (text.length > 0) {
            timeout = window.setTimeout(
               () => setText(current.slice(0, text.length - 1)),
               deleteSpeed
            )
         } else {
            setDeleting(false)
            setPhraseIndex((prev) => (prev + 1) % phrases.length)
         }
      }

      return () => window.clearTimeout(timeout)
   }, [text, deleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pause])

   return text
}

const Hero = () => {
   const typed = useTypewriter(PHRASES)

   return (
      <section className="relative flex flex-col items-center justify-center py-24 px-4 text-center overflow-hidden">
         <img src={Landscape} alt="" className="absolute insert-0 w-full h-full object-cover opacity-15" />
         <div className="absolute insert-0 bg-dark-900/60">
            <div className="relative z-10 flex flex-col items-center">
               <p className="text-neon-green text-sm mb-2 tracking-widest">[ SISTEM: ONLINE ]</p>
               <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-widest mb-4">Jorge Flores Antezana</h1>
               <p className="text-muted-gray text-lg mb-8">
                  &gt; {typed}
                  <span className="inline-block w-3 h-5 bg-neon-green ml-1 animate-blink align-middle" />
               </p>
            </div>
         </div>
         
      </section>
   )
}

export default Hero