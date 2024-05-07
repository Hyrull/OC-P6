import dropdownArrow from './../assets/img/dropdownarrow.png'
import { useState } from 'react';
import './../styles/components/dropdown.scss'

interface DropdownProps {
  title: string
  content: string  | JSX.Element
}


function Dropdown({title, content} : DropdownProps) {

  const [displayContent, setdisplayContent] = useState(false)

  return (
  <div className="dropdown">
    <div className='dropdown-header'>
      <h2>{title}</h2>
      <img src={dropdownArrow} alt='Dropdown arrow' 
      onClick={() => setdisplayContent(!displayContent)}
      className={displayContent ? 'rotate' : ''}/>
    </div>
    <div className={`dropdown-box ${displayContent ? 'visible' : ''}`}>
      <p className={`dropdown-content ${displayContent ? 'visible' : ''}`}>{content}</p>
    </div>
  </div>
  )
}

export default Dropdown