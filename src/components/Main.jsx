import { useState } from "react"
import Network from "./Network"

import Projects from './Projects'
import Skills from './Skills'

const Main = () => {
  const [projects, setProjects] = useState(true)

  function handleContent(e) {
    document.querySelectorAll('.handle-projects button').forEach(button => button.classList.remove("active"))
    e.target.classList.add('active')
    
    if (projects) setProjects(false)
    
    else setProjects(true)
  }

  return (
    <main>
      <section className='name-social'>
        <article> <h1>Wanderson Pedrosa</h1>
          <span>Web developer</span>
        </article>

        <Network/>
      </section>

      <div className='handle-projects'>
        <button 
          className='active' 
          onClick={ handleContent }>
          Projects
        </button>

        <button onClick={ handleContent }>Skills</button>
      </div>

      { projects? <Projects/> : <Skills/> }
    </main>
  )
}

export default Main