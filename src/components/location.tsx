import { Link } from "react-router-dom"
import './../styles/components/location.scss'

interface LocationProps {
  titre: string
  id: string
}


function Location({titre, id} : LocationProps) {
  return (
    <Link to={'/location/'+id} className="location-box">{titre}</Link>
  )
}

export default Location