// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillCard from './components/SkillCard'
import { DesignIcon, CuriosityIcon, CodeIcon,  NmapIcon, SqlMapIcon, HydraIcon, WpscanIcon, JohnTheRipperIcon, ShodanIcon, MaltegoIcon, WazuhIcon, InfrastructureIcon, DataScienceIcon, HardwareIcon } from './components/Icons'
import Footer from './components/Footer'

import { FaWindows, FaLinux, FaPhp, FaLaravel, FaCss3, FaBootstrap, FaHtml5, FaJsSquare, FaPython, FaReact, FaWifi, FaServer, FaLaptop, FaKeyboard, FaMouse, FaGamepad, FaMusic, FaHandsHelping, FaInfoCircle } from 'react-icons/fa'

import { SiTypescript, SiVite, SiTailwindcss, SiSketchup, SiDotnet, SiApache, SiGit, SiGithub, SiDocker, SiVirtualbox, SiVmware, SiPandas, SiNumpy, SiTensorflow, SiPytorch, SiPostgresql, SiMysql, SiMongodb, SiIntel, SiAmd,   SiKalilinux, SiMetasploit, SiHashcat, SiWireshark } from 'react-icons/si'

import { DiPhotoshop, DiIllustrator } from 'react-icons/di'
import { TbBrandAdobeIndesign } from 'react-icons/tb'




function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto pd-16">
         <SkillCard
            number="01"
            tag="Coding"
            tagColor="green"
            icon={<CodeIcon />}
            title="Code"
            keywords={[ 
               {name: "PHP", icon: <FaPhp />},
               {name: "Laravel", icon: <FaLaravel />},
               {name: "HTML", icon: <FaHtml5 />},
               {name: "CSS", icon: <FaCss3 />},
               {name: "Bootstrap", icon: <FaBootstrap />},  
               {name: "React", icon: <FaReact />},
               {name: "TypeScript", icon: <SiTypescript />},
               {name: "JavaScript", icon: <FaJsSquare />},
               {name: "Vite", icon: <SiVite />},
               {name: "Tailwind", icon: <SiTailwindcss />},
               {name: "C#", icon: <SiDotnet />},
             ]}
            cta="Check Out Code Repositories"
            ctalink="/code"
         />
         <SkillCard
            number="02"
            tag="Infrastructure"
            tagColor="purple"
            icon={<InfrastructureIcon />}
            title="SysAdmin"
            keywords={[ 
               {name: "FaLinux", icon: <FaLinux />},
               {name: "FaWindows", icon: <FaWindows />},
               {name: "SiApache", icon: <SiApache />},
               {name: "SiGit ", icon: <SiGit />},
               {name: "SiGithub", icon: <SiGithub />},
               {name: "SiDocker", icon: <SiDocker />},
               {name: "SiVirtualbox", icon: <SiVirtualbox />},
               {name: "SiVmware", icon: <SiVmware />},
             ]}
            cta="View Design Work"
            ctalink="/design"
         />
         <SkillCard
            number="03"
            tag="Data Science"
            tagColor="yellow"
            icon={<DataScienceIcon />}
            title="Data"
            keywords={[ 
               {name: "Python", icon: <FaPython />},
               {name: "SiPandas", icon: <SiPandas />},
               {name: "SiPostgresql", icon: <SiPostgresql />},
               {name: "SiMysql", icon: <SiMysql />},
               {name: "SiMongodb", icon: <SiMongodb />},
               // {name: "SiNumpy", icon: <SiNumpy />},
               // {name: "SiTensorflow", icon: <SiTensorflow />},
               // {name: "SiPytorch", icon: <SiPytorch />},
             ]}
            cta="Explore Curiosity Projects"
            ctalink="/curiosity"
         />
         <SkillCard
            number="04"
            tag="Hardware"
            tagColor="pink"
            icon={<HardwareIcon />}
            title="Bare Metal"
            keywords={[ 
               {name: "FaWifi", icon: <FaWifi />},
               {name: "FaServer", icon: <FaServer />},
               {name: "FaLaptop", icon: <FaLaptop />},
               {name: "FaKeyboard", icon: <FaKeyboard />},
               {name: "FaMouse", icon: <FaMouse />},
               {name: "SiIntel", icon: <SiIntel />},
               {name: "SiAmd", icon: <SiAmd />},

             ]}
            cta="Check Out Code Repositories"
            ctalink="/code"
         />
         <SkillCard
            number="05"
            tag="Design"
            tagColor="gray"
            icon={<DesignIcon />}
            title="Design"
            keywords={[ 
               {name: "SiSketchup", icon: <SiSketchup />},
               {name: "DiPhotoshop", icon: <DiPhotoshop />},
               {name: "DiIllustrator", icon: <DiIllustrator />},
               {name: "TbBrandAdobeIndesign ", icon: <TbBrandAdobeIndesign />},
             ]}
            cta="View Design Work"
            ctalink="/design"
         />
         <SkillCard
            number="06"
            tag="Problem Solving & Curiosity"
            tagColor="cyan"
            icon={<CuriosityIcon />}
            title="Passion & Curse"
            keywords={[ 
               {name: "FaGamepad", icon: <FaGamepad />}, 
               {name: "FaMusic", icon: <FaMusic />},
               {name: "SiKalilinux", icon: <SiKalilinux />},
               {name: "SiMetasploit", icon: <SiMetasploit />},
               {name: "SiHashcat", icon: <SiHashcat />},
               {name: "SiWireshark", icon: <SiWireshark />},  
               {name: "FaHandsHelping", icon: <FaHandsHelping />},
               {name: "FaInfoCircle", icon: <FaInfoCircle />},
               {name: "NmapIcon", icon: <NmapIcon />},
               {name: "SqlMapIcon", icon: <SqlMapIcon />},
               {name: "HydraIcon", icon: <HydraIcon />},
               {name: "WpscanIcon", icon: <WpscanIcon />},
               {name: "JohnTheRipperIcon", icon: <JohnTheRipperIcon />},
               {name: "ShodanIcon", icon: <ShodanIcon />},
               {name: "MaltegoIcon", icon: <MaltegoIcon />},
               {name: "WazuhIcon", icon: <WazuhIcon />},
            ]}
            cta="Explore Curiosity Projects"
            ctalink="/curiosity"
         />

      </section>
      <Footer />

      
    </>
  )
}

export default App
