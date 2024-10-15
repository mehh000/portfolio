import React from 'react'
import cl from './Style.module.css'
import AnimeBoy from '../../../public/anime-boy.png'
import Image from 'next/image'
import { Button } from '@mui/material'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link'

const Home = () => {

  return (

      <div className={cl.homePage}>
        <div className={cl.container}>
          <div className={cl.image_container}>
            <Image src='/himal0.jpg' alt='anime boy' height={500} width={600} />
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
            <div className={cl.button_container}>
                <Button className={cl.btn} >Resumy <DocumentScannerIcon /></Button>
                <div className={cl.socilaIcons}>
   <Link href={'https://www.facebook.com/people/Himal-Hasan/pfbid02zKuVwqr9zh2R7nBpyqSZ6qE14E7u1bBfZwTrtUNEXewCLr6bM3ofd9jPGBmQviwdl/'}  >  <FacebookIcon  className={`${cl.facebookIcon}`} /></Link>
   <Link href={'https://www.linkedin.com/in/himal-hasan-808698332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}>  <LinkedInIcon className={`${cl.linkedinIcon}`} /></Link>
   <Link href={'https://www.instagram.com/sweet_ghost_0/?igsh=YzljYTk1ODg3Zg%3D%3D'}>  <InstagramIcon className={`${cl.instagramIcon}`} /></Link>
   <Link href={'/'}>  <WhatsAppIcon className={`${cl.whatsappIcon}`} /></Link>
   <Link href={'https://github.com/mehh000'}>   <GitHubIcon className={`${cl.githubIcon}`} /></Link>
</div>

            </div>
          

          </div>

        </div>

      </div>
 
  )
}

export default Home