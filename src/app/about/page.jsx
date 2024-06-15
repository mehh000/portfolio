import React from 'react'
import cl from './Style.module.css';
import Myimage from '../../../public/himal.jpg'
import Image from 'next/image';

const page = () => {

  return (
    <div className={cl.container}>
      <p className={cl.titile}>Passion Fuels Purpose!</p>
      <div className={cl.contents}>
        <div className={cl.image_container}>
          <Image src={Myimage} alt="Mountain" className={cl.image} />
        </div>
        <div className={cl.bioDAta}>
          <p className={cl.lebel}>BIOGRAPHY</p>
          <p className={cl.info}>
            Hi, I'm Himal Hasan. I'm 20 years old and currently studying for a diploma
             in Computer Science Engineering at KPI. I've been working in web development
              for two years now, and I really enjoy creating new, creative websites.
               I have knowledge in React and Next.js, and I can handle both front-end 
               and back-end development. I'm always learning and looking to improve my 
               skills, and I love pushing the boundaries to make innovative web solutions.

          </p>
        </div>
        <div className={cl.workInfo}>
          <div className={cl.info_box}>
            <p className={cl.number}>1+</p>
            <p className={cl.text}>Satisfied Clients</p>
          </div>
          <div className={cl.info_box}>
            <p className={cl.number}>10+</p>
            <p className={cl.text}>Projects Completed</p>
          </div>
          <div className={cl.info_box}>
            <p className={cl.number}>2+</p>
            <p className={cl.text}>Years of Experience</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page