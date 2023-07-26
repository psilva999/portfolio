import { useEffect, useState } from 'react'
import { ReactComponent as Lamp } from '../assets/svg/0-lamp.svg'

const Header = () => {
  const [fixed, setFixed] = useState()

  useEffect(() => {
    window.addEventListener('scroll', handleHeader)

    return () => window.removeEventListener('scroll', handleHeader)
  })

  function handleHeader() {
    window.scrollY >= 3 ? setFixed(true) : setFixed(false)
  }

  return (

    <header className={ fixed? 'fixed' : '' }>
      <h1>Ps</h1>

      <nav>
        <Lamp/>
        
        <a href="https://drive.google.com/file/d/1qxfbSMlcxUgGIe6Ri0HktI0Ai3hKe43t/view?usp=drive_link" rel='noreferrer' target='_blank'>MY CV</a>
      </nav>
    </header>

  )
}

export default Header