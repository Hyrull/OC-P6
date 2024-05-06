// import { useState, useEffect } from 'react';
import './../styles/components/banner.scss'

// pour que typescript soit content et sache que image est un string
interface BannerProps {
  image: string
  hideTitle: boolean
  hideOverlay: boolean
}

function Banner({image, hideTitle, hideOverlay}: BannerProps) {

  return (
    <div className='carousel'>
      <div className='carousel-content'>
        <img src={image} alt='Photo de récifs en bord de mer'></img>
        {!hideOverlay && <div className='carousel-overlay'></div>}
        {!hideTitle && <h1>Chez vous, partout et ailleurs</h1>}
      </div>
    </div>
  )
}

export default Banner