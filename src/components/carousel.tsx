import { useState, useEffect } from "react"


function Carousel ({ pictures }) {
  return (
    <img src={pictures[0]}/>
  )
}

export default Carousel