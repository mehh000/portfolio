'use client'


import cl from './Style.module.css'
import Image from 'next/image'
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from 'react'

const skills = () => {

  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={cl.container}>
      <div className={cl.skill_container}>



        <div className={cl.skill_box}>
          <Image src='/css.png' alt='css' width={200} height={100} />
          <Progress value={progress} className="w-[70%]" />
        </div>
        <div className={cl.skill_box}>
          <Image src='/botstrape.png' alt='css' width={200} height={100} />
          <Progress value={progress} className="w-[50%]" />
        </div>
        <div className={cl.skill_box}>
          <Image src='/js.png' alt='css' width={200} height={100} />
          <Progress value={progress} className="w-[50%]" />
        </div>
        <div className={cl.skill_box}>
          <Image src='/material.png' alt='css' width={200} height={100} />
          <Progress value={progress} className="w-[80%]" />
        </div>
        <div className={cl.skill_box}>
          <Image src='/mongodb.png' alt='css' width={200} height={100} />
          <Progress value={progress} className="w-[40%]" />
        </div>
        <div className={cl.skill_box}>
          <Image src='/mysql.png' alt='css' width={200} height={100} />
          <Progress value={progress} className="w-[50%]" />
        </div>
        <div className={cl.skill_box}>
          <Image src='/nextjs.png' alt='css' width={200} height={100} />
          <Progress value={progress} className="w-[50%]" />
        </div>
        <div className={cl.skill_box}>
          <Image src='/vitejs.png' alt='css' width={200} height={100} />
          <Progress value={progress} className="w-[50%]" />
        </div>
        <div className={cl.skill_box}>
          <Image src='/tailwind.png' alt='css' width={200} height={100} />
          <Progress value={progress} className="w-[70%]" />
        </div>
        <div className={cl.skill_box}>
          <Image src='/shadcn-ui-.png' alt='css' width={200} height={100} />
          <Progress value={progress} className="w-[50%]" />
        </div>
        <div className={cl.skill_box}>
          <Image src='/reactjs.png' alt='css' width={200} height={100} />
          <Progress value={progress} className="w-[80%]" />
        </div>
        <div className={cl.skill_box}>
          <Image src='/prisma.png' alt='css' width={200} height={100} />
          <Progress value={progress} className="w-[50%]" />
        </div>
      </div>
      <div className={cl.experiance_container}>
        <h1 className='text-5xl ' >My Experiance</h1>
        <div className={cl.experiance_card}>
          <p className={cl.myexp}>
          I have two years of experience in web development. I am continually learning and improving my skills.
          </p>
        </div>
      </div>

    </div>
  )
}

export default skills