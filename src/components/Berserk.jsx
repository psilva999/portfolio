import Network from "./Network"

const Main = () => {
  return (
    <>
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
    </>
  )
}

export default Main