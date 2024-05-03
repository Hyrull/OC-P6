// import { useState, useEffect } from 'react';
import Carousel1 from './../assets/img/banner1.webp'
import './../styles/components/carousel.scss'

function Carousel() {

  // const [carouselImage, setcarouselImage] = useState(Carousel1)
  // // Auto switch toutes les 5s
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Si l'ancienne image est 1, on met 2, sinon l'inverse
  //     setcarouselImage((prevImage) => prevImage === Carousel1 ? Carousel2 : Carousel1)
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className='carousel'>
      <div className='carousel-content'>
        <img src={Carousel1} alt='Photo de récifs en bord de mer'></img>
        <div className='carousel-overlay'></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Carousel