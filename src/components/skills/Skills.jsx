import React, {useContext} from 'react'
import './skills.css'
import IdiomaContext from '../../context/IdiomaProvider'

const Skills = () => {
    const { conocimientos, ingles } = useContext(IdiomaContext)
  return (
    <div className='skills-contenedor' id='skills'>
        <h3 className='subtitulo-skills'>{ingles ? "Skills" : "Habilidades"}</h3>
        <div className='contenedor-logos'>
            {conocimientos.map(e => {
                return(
                    <div className='skills-card' key={e.id}>
                        <img src={e.logo} alt='logo' className='logos' />
                        <h4>{e.tecnologia}</h4>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills