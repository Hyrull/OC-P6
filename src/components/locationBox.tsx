import { Link } from "react-router-dom"
import './../styles/components/locationBox.scss'

interface LocationBoxProps {
  titre: string
  id: string
  cover: string
}


function LocationBox({titre, id, cover} : LocationBoxProps) {
  return (
    <Link to={`/location/${id}`} className="location-box">
    <img src={cover} alt={titre}  />
    <h1 className="location-title">{titre}</h1>
    </Link>
  )
}

export default LocationBox