import { useState, useEffect, useRef } from "react";
import './../styles/components/carousel.scss';
import previousArrow from './../assets/img/previousarrow.png';
import nextArrow from './../assets/img/nextarrow.png';

function Carousel({ pictures }: { pictures: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPicture = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length)
    resetInterval()
  }

  const previousPicture = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length)
    resetInterval()
  }

  const resetInterval = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(nextPicture, 5000)
  }

  useEffect(() => {
    resetInterval()
    return () => clearInterval(intervalRef.current)
  }, [])
  const intervalRef = useRef<number>()

  return (
    <div className="carousel">
      <img src={previousArrow} alt='Flèche précédent' className={pictures.length > 1 ? "previous-arrow" : 'no-display'} onClick={previousPicture}/>
        <img src={pictures[currentIndex]} alt='Carousel' className='carousel-image' />
      <img src={nextArrow} alt='Flèche suivant' className={pictures.length > 1 ? "next-arrow" : 'no-display'} onClick={nextPicture}/>
      <p className={pictures.length > 1 ? "carousel-number" : 'no-display'}>{currentIndex+1}/{pictures.length}</p>
    </div>
  )
}

export default Carousel;