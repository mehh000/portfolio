import React from 'react'
import cl from './Footer.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';


const Footer = () => {
  return (
    <div className={cl.footer}>

      <p className={cl.footer_message}>
        Made with <FavoriteIcon className={cl.loveIcon} /> by Himal Hasan
      </p>
    </div>
  )
}

export default Footer