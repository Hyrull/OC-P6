import { useParams } from 'react-router-dom';
import LocationData from './../assets/data/logements.json';
import './../styles/pages/location.scss'
import Dropdown from '../components/dropdown';

function Location() {

  // Fetch l'ID depuis l'URL puis fetch la data de l'ID
  const {id} = useParams()
  const locationItem = LocationData.find(item => item.id === id)
  if (!locationItem) {return <h1>Cette location n'existe pas.</h1>}

  interface Host {
    name: string;
    picture: string;
  }

  interface LocationProps {
    title: string
    cover: string
    pictures: string[]
    description: string
    host: Host
    rating: string
    location: string
    equipments: string[]
    tags: string[]
  }

  // Store la data dans des consts du même nom
  const { title, pictures, description, host, rating, location, equipments, tags }: LocationProps = locationItem
  const tagsListRender = (tags: string[]) => {
    return tags.map (tag => <li>{tag}</li>)
  }
  const equipmentsListRender = (equipments: string[]) => {
    return equipments.map (equipment => <li>{equipment}</li>)
  }

  return (
    <div className='location'>
       {/* //TODO: Carousel */}
      <img src={pictures[0]}></img>
      <div className='titles-and-host'>
        <div className='titles'>
          <h1>{title}</h1>
          <h2>{location}</h2>
        </div>
        <div className='host'>
          <p>{host.name}</p>
          <img src={host.picture} alt={`Photo de ${host.name}`}/>
        </div>
      </div>
      <div className='tags-and-rating'>
        <div className='tags'>
          <ul>
            {tagsListRender(tags)}
          </ul>
        </div>
        <div className='rating'>
          <h3>RATIG HERE: {rating}</h3>
        </div>
      </div>
      <div className='dropdowns'>
      <Dropdown title='Description' content={description} />
      <Dropdown title='Équipements' content={<ul>{equipmentsListRender(equipments)}</ul>} />
      </div>
    </div>
  )
}

export default Location