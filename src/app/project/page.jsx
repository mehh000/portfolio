'use client'


import React from 'react'

import Image from 'next/image'
import Link from 'next/link'


const Project = () => {
  return (
    <div className='flex items-center justify-center h-[80vh] bg-slate-200 flex-wrap gap-5'>
      {/* 1st project */}
<div className="bg-white rounded-2xl flex flex-col gap-3 shadow-md">
  <Image src={'/p1.png'} height={400} width={400} alt='project 1' />
  <div className="flex items-center justify-between p-4 flex-row ">
      <p className="">a food landing page</p>
      <Link href={'https://foodielandingpage0.netlify.app/'} >
        <div className="px-3 w-fit text-white font-bold py-2 rounded-3xl bg-blue-600 hover:bg-blue-400">Visit</div>
      </Link>
  </div>
</div>
{/* second project */}
<div className="bg-white rounded-2xl flex flex-col gap-3 shadow-md">
  <Image src={'/p2.png'} height={400} width={400} alt='project 1' />
  <div className="flex items-center justify-between p-4 flex-row ">
      <p className="">a e-commerce website signle vendor</p>
      <Link href={'https://chaldalbd.netlify.app/'} >
        <div className="px-3 w-fit text-white font-bold py-2 rounded-3xl bg-blue-600  hover:bg-blue-400">Visit</div>
      </Link>

  </div>
</div>
    </div>
  )
}

export default Project