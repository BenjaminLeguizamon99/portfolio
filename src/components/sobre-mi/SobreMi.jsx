import React from 'react'
import './sobremi.css'

const Sobremi = ({ingles}) => {
  return (
    <>
    {ingles ? <h3 className='subtitulo'>about me</h3> : <h3 className='subtitulo'>sobre mi</h3>}
        
        <div className='contenedor-sobremi'>
            <div>
                <img src='../assets/foto-mia-portfolio.png' className='sobre-mi-img'/>
            </div>
            <div className='contenedor-texto-sobremi'>
                <p>
                    Hola! mi nombre es Benjamin y soy de Córdoba, Argentina. Cuando terminé el colegio secundario no tenía una vocación definida pero de todas maneras me inscribí en la carrera de Ingenería Industrial. <br />
                    Durante el año 2020, debido a la pandemia comencé a pasar más tiempo en la computadora y ahí descubrí el mundo de la programación y automáticamente despertó en mí un interés que nunca había sentido. Realicé algunos tutoriales de HTML y CSS y cada vez me iba dando cuenta que era lo que realmente disfrutaba, por lo que en el año 2021 decidí cambiar de rumbo mi vida y dejé la carrera de Ingeniería Industrial para dedicarme de lleno en la programación web. <br />
                    Hoy en día soy un programador que está en busca de su primer trabajo en el área IT para poder aplicar mis conocimientos, adquirir experiencia, aprender mucho más y crecer profesionalmente en esta carrera que me apasiona.
                </p> 
            </div>
        </div>
    </>
  )
}

export default Sobremi