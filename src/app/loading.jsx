import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='flex items-center justify-center w-full h-[80vh]' >
        <Image src='/loader.gif' alt='loader' height={100} width={200} />
    </div>
  )
}

export default loading