import React from 'react'
import cl from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className={cl.footer}>
      <div className={cl.socilaIcons}>
        <FacebookIcon className={cl.socilaIcon} />
        <LinkedInIcon className={cl.socilaIcon} />
        <InstagramIcon className={cl.socilaIcon} />
        <TelegramIcon className={cl.socilaIcon} />
        <WhatsAppIcon className={cl.socilaIcon} />
        <GitHubIcon className={cl.socilaIcon} />
      </div>
      <p className={cl.footer_message}>
        it crated with <FavoriteIcon className={cl.loveIcon} /> by Himal Hasan
      </p>
    </div>
  )
}

export default Footer