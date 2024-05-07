import './../styles/pages/home.scss'
import Banner from '../components/banner'
import banner1 from './../assets/img/banner1.webp'
import LocationBox from '../components/locationBox'
import LocationData from './../assets/data/logements.json';

interface LocationListProps {
  title: string;
  id: string;
}

function Home() {
  const renderLocationList = (LocationList: LocationListProps[]) => {
    return LocationList.map(({ title, id }) => <LocationBox key={id} titre={title} id={id} />);
  }

  return (
    <div>
      <Banner image={banner1} hideOverlay={false} hideTitle={false} />
      <div className='locations-gallery'>
        {renderLocationList(LocationData)}
      </div>
    </div>
  )
}

export default Home;
