import React from 'react'
import cl from './Style.module.css'
import AnimeBoy from '../../../public/anime-boy.png'
import Image from 'next/image'
import { Button } from '@mui/material'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';


const Home = () => {

  return (

      <div className={cl.homePage}>
        <div className={cl.container}>
          <div className={cl.image_container}>
            <Image src='/anime-boy.png' alt='anime boy' height={200} width={400} />
          </div>
          <div className={cl.info_container}>
            <div className={cl.info_content}>
              <p className={cl.title}>Turning Vision Into Reality With Code And Design. </p>
              <div className={cl.des_container}>
                <p className={cl.des}>As a skilled full-stack developer, I am dedicated to
                  turning ideas into innovative web applications. Explore my latest projects
                  and articles, showcasing my expertise in React.js and web development.</p>
              </div>
            </div>
            <Button className={cl.btn} >Resumy <DocumentScannerIcon /></Button>

          </div>

        </div>

      </div>
 
  )
}

export default Home