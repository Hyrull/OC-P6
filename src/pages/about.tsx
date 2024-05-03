import Banner from '../components/banner'
import banner2 from './../assets/img/banner2.webp'
import Dropdown from '../components/dropdown'
import './../styles/pages/about.scss'

function About() {
  return (
    <div>
      <Banner image={banner2}/>
      <Dropdown />
    </div>
  )
}

export default About