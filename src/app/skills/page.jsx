'use client'

import cl from './Style.module.css'
import Image from 'next/image'
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from 'react'

const Skills = () => {

  const [useProgress, setUseProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setUseProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={cl.container}>
      <h1 className={cl.title}>Skills & Experience</h1>

      <div className={cl.skill_container}>
        {[
          { src: '/css.png', name: 'CSS', progress: 70 },
          { src: '/botstrape.png', name: 'Bootstrap', progress: 50 },
          { src: '/js.png', name: 'JavaScript', progress: 50 },
          { src: '/material.png', name: 'Material UI', progress: 80 },
          { src: '/mongodb.png', name: 'MongoDB', progress: 40 },
          { src: '/mysql.png', name: 'MySQL', progress: 50 },
          { src: '/nextjs.png', name: 'Next.js', progress: 50 },
          { src: '/flutter.png', name: 'Flutter', progress: 50 },
          { src: '/tailwind.png', name: 'Tailwind CSS', progress: 70 },
          { src: '/shadcn-ui-.png', name: 'Shadcn UI', progress: 50 },
          { src: '/reactjs.png', name: 'React.js', progress: 80 },
          { src: '/prisma.png', name: 'Prisma', progress: 50 }
        ].map((skill, index) => (
          <div className={cl.skill_box} key={index}>
            <Image src={skill.src} alt={skill.name} width={200} height={100} />
            <Progress value={skill.progress} className="w-[70%]" />
            <p className={cl.skill_label}>{skill.name}</p>
          </div>
        ))}
      </div>

      <div className={cl.experience_container}>
        <h2 className={cl.experience_title}>My Experience</h2>
        <div className={cl.experience_card}>
          <p className={cl.my_exp}>
            I have more then one years of experience in web development. I am continually learning and improving my skills.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
