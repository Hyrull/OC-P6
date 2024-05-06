import Banner from '../components/banner'
import banner2 from './../assets/img/banner2.webp'
import Dropdown from '../components/dropdown'
import './../styles/pages/about.scss'

function About() {
  return (
    <div className='content'>
      <Banner image={banner2} hideOverlay={true} hideTitle = {true}/>
      <div className='infos'>
      <Dropdown title={'Fiabilité'} content={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrements vérifiées par nos équipes."}/>
      <Dropdown title={'Respect'} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
      <Dropdown title={'Service'} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
      <Dropdown title={'Sécurité'} content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
      </div>
    </div>
  )
}

export default About