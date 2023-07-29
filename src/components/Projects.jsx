import Ypres from '../assets/images/2-passchendaele.jpg'
import Stories from '../assets/images/1-stories.jpg'
import Sushi from '../assets/images/4-sushi.jpg'

import Calculator from '../assets/images/3-calculator.jpg'
import Jws from '../assets/images/5-jws.jpg'

import { ReactComponent as LinkSite } from '../assets/svg/1-link.svg'

const Projects = () => {
  return (

    <section className='projects'>
      <a href="https://psilva999.github.io/passchendaele/" rel='noreferrer' target='_blank'>
        <img src={ Ypres } alt="passchendaele"/>

        <article> <h2>Passchendaele</h2>
          <LinkSite/>
        </article>
      </a>

      <a href="https://psilva999.github.io/stories-sabaton/" rel='noreferrer' target='_blank'>
        <img src={ Stories } alt="stories-sabaton"/>

        <article> <h2>Stories</h2>
          <LinkSite/>
        </article>
      </a>

      <a href="https://psilva999.github.io/sushi/" rel='noreferrer' target='_blank'>
        <img src={ Sushi } alt="sushi"/>

        <article> <h2>Sushi</h2>
          <LinkSite/>
        </article>
      </a>

      <a href="https://psilva999.github.io/calculator-app/" rel='noreferrer' target='_blank'>
        <img src={ Calculator } alt="Calculator"/>

        <article> <h2>Calculator</h2>
          <LinkSite/>
        </article>
      </a>

      <a href="https://github.com/psilva999/JWSTelescope-demo" rel='noreferrer' target='_blank'>
        <img src={ Jws } alt="JWS Telescope"/>

        <article> <h2>JWS Telescope</h2>
          <LinkSite/>
        </article>
      </a>
    </section>

  )
}

export default Projects