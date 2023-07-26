import { ReactComponent as Figma } from '../assets/svg/2-figma.svg'
import { ReactComponent as Share } from '../assets/svg/3-share.svg'

const Skills = () => {
  return (

    <section className='skills active'>
      <a href="https://www.origamid.com/certificate/d232dd7e" rel='noreferrer' target='_blank'> 
        <Figma/>

        <h2>Figma</h2> </a>

      <a href="https://www.youtube.com/watch?v=kB5e-gTAl_s&t=48s" rel='noreferrer' target='_blank'>
        <Share/> 

        <h2>Git</h2> </a>

      <a href="https://www.origamid.com/certificate/eda2c849" rel='noreferrer' target='_blank'> 
        <span>let</span>

        <h2>JavaScript</h2> </a>

      <a href="https://www.origamid.com/certificate/2b0052f2" rel='noreferrer' target='_blank'> 
        <span>&lt;&#47;&gt;</span>

        <h2>HTML</h2> </a>

      <a href="https://www.origamid.com/certificate/2b0052f2" rel='noreferrer' target='_blank'> 
        <span>rem</span>

        <h2>CSS</h2> </a>

      <a href="https://www.origamid.com/certificate/a459016e" rel='noreferrer' target='_blank'> 
        <span>null</span>

        <h2>TypeScript</h2> </a>

      <a href="https://www.origamid.com/certificate/9ad602ea" rel='noreferrer' target='_blank'> 
        <span>$ &</span>

        <h2>SCSS</h2> </a>

      <a href="https://www.origamid.com/certificate/c6f5428c" rel='noreferrer' target='_blank'> 
        <span>&lt;&gt;</span>

        <h2>React.js</h2> </a>
    </section>
    
  )
}

export default Skills