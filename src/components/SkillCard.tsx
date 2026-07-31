interface SkillCardProps {
   number: string
   tag: string
    tagColor: "green" | "gray" | "cyan" | "pink" | "yellow" | "purple"
   icon: React.ReactNode
   title: string
   keywords: { name: string; icon: React.ReactNode }[]
   cta: string
   ctalink: string
}

const colorConfig = {
   green: { 
      text: "text-neon-green", 
      border: "border-neon-green", 
      glow: "#39ff14",
      hoverText: "hover:text-neon-green",
      hoverBorder: "hover:border-neon-green",
      hoverBg: "hover:bg-neon-green/10"},
   gray: { 
      text: "text-muted-gray", 
      border: "border-muted-gray", 
      glow: "#9ca3af",
      hoverText: "hover:text-muted-gray",
      hoverBorder: "hover:border-muted-gray",
      hoverBg: "hover:bg-muted-gray/10"},
   cyan: { 
      text: "text-neon-cyan", 
      border: "border-neon-cyan", 
      glow: "#00ffff" ,
      hoverText: "hover:text-neon-cyan",
      hoverBorder: "hover:border-neon-cyan",
      hoverBg: "hover:bg-neon-cyan/10"},
   pink: { 
      text: "text-neon-pink", 
      border: "border-neon-pink", 
      glow: "#ff2d95" ,
      hoverText: "hover:text-neon-pink",
      hoverBorder: "hover:border-neon-pink",
      hoverBg: "hover:bg-neon-pink/10"},
   yellow: { 
      text: "text-neon-yellow", 
      border: "border-neon-yellow", 
      glow: "#f8ff3a" ,
      hoverText: "hover:text-neon-yellow",
      hoverBorder: "hover:border-neon-yellow",
      hoverBg: "hover:bg-neon-yellow/10"},
   purple: { 
      text: "text-neon-purple", 
      border: "border-neon-purple", 
      glow: "#a855f7" ,
      hoverText: "hover:text-neon-purple",
      hoverBorder: "hover:border-neon-purple",
      hoverBg: "hover:bg-neon-purple/10"},
}

const SkillCard = ({
   number,
   tag,
   tagColor,
   icon,
   title,
   keywords,
   cta,
   ctalink,
}: SkillCardProps) => {
   const colors = colorConfig[tagColor]

   return (
       <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 flex flex-col gap-4 hover:scale-110 transition-all duration-300">
         <div className="flex items-center gap-2 md-2">
            <span className={`text-sm font-bold px-3 py-1 rounded-md ${colors.text}`} style={{ textShadow: `0 0 8px ${colors.glow}`, boxShadow: `0 0 12px ${colors.glow}30`, }}>{number} / {tag}</span>
         </div>

         <div className={`h-16 flex items-center justify-left text-4xl ${colors.text}`}>
            {icon}
         </div>

         <h3 className="text-white font-bold text-lg uppercase tracking-wide leading-tight">
           {title}
         </h3>

         <div className="flex flex-wrap gap-2">
            {keywords.map((kw) => (
               <span key={kw.name} className={` ${colors.hoverText} ${colors.hoverBorder} ${colors.hoverBg} text-muted-gray text-xl border border-dark-700 px-1 py-1 rounded`}>
                  {kw.icon}
               </span>
            ))}
         </div>

         <a href={ctalink} className={`${colors.text} hover:text-white transition-colors duration-200 text-sm mt-auto tracking-wider`}>
            {cta} &gt;
         </a>
      </div>  
   )
}   


export default SkillCard;