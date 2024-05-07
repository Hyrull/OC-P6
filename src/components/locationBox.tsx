import { Link } from "react-router-dom"
import './../styles/components/locationBox.scss'

interface LocationBoxProps {
  titre: string
  id: string
}


function LocationBox({titre, id} : LocationBoxProps) {
  return (
    <Link to={`/location/${id}`} className="location-box">{titre}</Link>
  )
}

export default LocationBox