import './../styles/pages/home.scss'
import Banner from '../components/banner'
import banner1 from './../assets/img/banner1.webp'

function Home() {
  return (
    <>
    <Banner image={banner1} hideOverlay={false} hideTitle = {false}/>
    </>
  )
}

export default Home