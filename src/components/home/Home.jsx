import React, {useContext} from 'react'
import IdiomaContext from '../../context/IdiomaProvider'
import "./home.css"

const Home = () => {
  const {ingles} = useContext(IdiomaContext)
  return (
    <div className='contenedor-principal' id='home'>
        <h1>benjamin leguizamon</h1>
        <p>Frontend</p>
        <p>web developer</p>
        <div className="home-botones">
          <button><a href='../../assets/CV-Benjamin-Leguizamon.pdf' download='Benjamin-Leguizamon-CV'>{ingles ? "Download CV" : "Descargar CV"}</a></button>
          <button><a href='https://www.linkedin.com/in/benjamin-leguizamon/' target='_blank'  className='linkedin-home-btn'>Linkedin</a></button>
      </div>   
    </div>
    
  )
}

export default Home