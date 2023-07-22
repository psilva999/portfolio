import lamp from '../assets/svg/0-lamp.svg'

const Header = () => {
  return (

    <header>
      <h1>Ps</h1>

      <nav>
        <img src={ lamp } alt="dark/white mode"/>
        
        <a href="https://drive.google.com/file/d/1xNTHwoHV5vPMUzbKqf2dv0LbKYAcdJx7/view?usp=sharing" rel='noreferrer' target='_blank'>MY CV</a>
      </nav>
    </header>

  )
}

export default Header