// import { useState, useEffect } from 'react';
import './../styles/components/banner.scss'
import { BannerProps } from '../types'

function Banner({image, hideTitle, hideOverlay}: BannerProps) {

  return (
    <div className='banner'>
      <div className='banner-content'>
        <img src={image} alt='Photo de récifs en bord de mer'></img>
        {!hideOverlay && <div className='banner-overlay'></div>}
        {!hideTitle && <h1>Chez vous, partout et ailleurs</h1>}
      </div>
    </div>
  )
}

export default Banner