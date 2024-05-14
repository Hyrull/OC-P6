import { Link } from "react-router-dom"
import './../styles/components/locationBox.scss'
import { LocationBoxProps } from "../types"


function LocationBox({titre, id, cover} : LocationBoxProps) {
  return (
    <Link to={`/location/${id}`} className="location-box">
    <img src={cover} alt={titre}  />
    <h1 className="location-title">{titre}</h1>
    </Link>
  )
}

export default LocationBox