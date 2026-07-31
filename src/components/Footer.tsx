import { useEffect, useState } from 'react'

const Footer = () => {
   const [now, setNow] = useState(new Date())

   useEffect(() => {
      const id = window.setInterval(() => setNow(new Date()), 1000)
      return () => window.clearInterval(id)
   }, [])

   const month = now.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
   const day = now.getDate().toString().padStart(2, '0')
   const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
   })
   const timeZone = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' })
      .formatToParts(now)
      .find((part) => part.type === 'timeZoneName')?.value

   return (
      <footer className="flex flex-col md:flex-row items-center justify-between px-6 py-5 border-t border-dark-700 text-xs text-muted-gray mt-16">
         <p className="">
            &copy; {new Date().getFullYear()} Kniaz Youk. All rights reserved. // TERMINAL [&gt;_]
         </p>
         <p className="text-neon-green mt-2 md:mt-0">{month} {day} {time} {timeZone}</p>
      </footer>
   )
}

export default Footer