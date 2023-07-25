import Network from "./Network"

import Projects from './Projects'
// import Skills from './Skills'

const Main = () => {
  return (
    <main>
      <section className='name-social'>
        <article> <h1>Wanderson Pedrosa</h1>
          <span>Web developer</span>
        </article>

        <Network/>
      </section>

      <div className='handle-projects'>
        <button className='active'>Projects</button>
        <button>Skills</button>
      </div>

      <Projects/>
      {/* <Skills/> */}
    </main>
  )
}

export default Main