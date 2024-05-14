import { useParams } from 'react-router-dom';
import LocationData from './../assets/data/logements.json';
import './../styles/pages/location.scss'
import Dropdown from '../components/dropdown';
import Carousel from '../components/carousel';
import FullStarPic from './../assets/img/star_full.png'
import EmptyStarPic from './../assets/img/star_empty.png'
import ErrorPage from './errorpage';
import { LocationProps } from '../types';

// Random key pour les stars
const generateKey = () => {
  return Math.random().toString(36).substr(2, 9);
}

const FullStar = ({ customKey }: { customKey: string }) => {
  return <img src={FullStarPic} alt="Etoile pleine" key={customKey} />
}

const EmptyStar = ({ customKey }: { customKey: string }) => {
  return <img src={EmptyStarPic} alt="Etoile creuse" key={customKey} />
}


function Location() {
  // Fetch l'ID depuis l'URL puis fetch la data de l'ID
  const {id} = useParams()
  const locationItem = LocationData.find(item => item.id === id)
  if (!locationItem) {return <ErrorPage /> }

  // Store la data dans des consts du même nom
  const { title, pictures, description, host, rating, location, equipments, tags }: LocationProps = locationItem
  const tagsListRender = (tags: string[]) => {
    return tags.map ((tag, index) => <li key={index}>{tag}</li>)
  }
  const equipmentsListRender = (equipments: string[]) => {
    return equipments.map ((equipment, index) => <li key={index}>{equipment}</li>)
  }

  return (
    <div className='location'>
      <Carousel pictures={pictures}/>
      <div className='main-content'>
      <div className='titles-and-tags'>
        <div className='titles'>
          <h1>{title}</h1>
          <h2>{location}</h2>
        </div>
        <div className='tags'>
          <ul>
            {tagsListRender(tags)}
          </ul>
        </div>
      </div>
      <div className='host-and-rating'>
      <div className='host'>
          <div className='host-name'>
          <p>{host.name.split(' ')[0]}</p>
          <p>{host.name.split(' ')[1]}</p>
          </div>
          <img src={host.picture} alt={`Photo de ${host.name}`}/>
        </div>
        <div className='rating'>
          {[...Array(5)].map((_, index) => {
            const numericRating = parseInt(rating);
            const customKey = generateKey()
            return index < numericRating ? (
              <FullStar key={customKey} customKey={customKey} />
            ) : (
              <EmptyStar key={customKey} customKey={customKey} />
            )
          })}
        </div>
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