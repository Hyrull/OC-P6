import './../styles/components/footer.scss'
import logo from './../assets/img/logo.svg'

function Footer() {
  return (
    <>
    <footer>
      <img src={logo} alt='Logo Kasa'></img>
      <p>© 2024 Kasa. All rights reserved</p>
    </footer>
    </>
  )
}

export default Footer