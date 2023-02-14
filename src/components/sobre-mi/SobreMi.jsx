import React, {useContext} from 'react'
import IdiomaContext from '../../context/IdiomaProvider'
import './sobremi.css'

const Sobremi = () => {
    const {ingles} = useContext(IdiomaContext)
  return (
    <div className='sobre-mi-bg'>
    <h3 className='subtitulo' id='sobremi'>{ingles ? "About me" : "Sobre mi"}</h3>
        <div className='contenedor-sobremi'>
            <div className='sobremi-img-contenedor'>
                <img src='../assets/foto-mia-portfolio.png' className='sobre-mi-img'/>
            </div>
            <div className='contenedor-texto-sobremi'>
                {ingles ? <p>Hi! My name is Benjamin Leguizamon and I am from Córdoba Argentina. When I finished highschool I did not have a vocation but anyways I enrolled in industrial engineering.<br />
                During the year 2020, due to the covid pandemic, I started to spent more time in the computer and there I discovered the world of programming and inmediately it woke up in me an interest that I have never felt. I did some tutorials of HTML and CSS and I discovered that I really liked it. This is the reason why in the year 2022 I decided to quit industrial engineering in order to focus full time in the front end development.
                Nowadays I'm a frontend developer that is looking for the first job in the IT área in order to aply all my knoledge, gain experience and keep learning about this proffesion that I love. 
                </p> 
                : 
                <p>
                    Hola! mi nombre es Benjamin y soy de Córdoba, Argentina. Cuando terminé el colegio secundario no tenía una vocación definida pero de todas maneras me inscribí en la carrera de Ingenería Industrial. <br />
                    Durante el año 2020, debido a la pandemia comencé a pasar más tiempo en la computadora y ahí descubrí el mundo de la programación y automáticamente despertó en mí un interés que nunca había sentido. Realicé algunos tutoriales de HTML y CSS y cada vez me iba dando cuenta que era lo que realmente disfrutaba, por lo que en el año 2022 decidí cambiar de rumbo mi vida y dejé la carrera de Ingeniería Industrial para dedicarme de lleno en la programación web. <br />
                    Hoy en día soy un programador que está en busca de su primer trabajo en el área IT para poder aplicar mis conocimientos, adquirir experiencia, aprender mucho más y crecer profesionalmente en esta carrera que me apasiona.
                </p> 
                }
            </div>
        </div>
        <div className="informacion">
            <h4>{ingles ? "Information" : "Información"}</h4>
            <ul className='lista-sobremi'>
                <li><span className='info-importante'>{ingles ? "Date of birt: " : "Fecha de nacimiento: "}</span>22/04/1999</li>
                <li><span className='info-importante'>{ingles ? "Email: " : "Correo electrónico: "}</span>leguizamonbenjamin0@gmail.com</li>
                <li><span className='info-importante'>{ingles ? "Location: " : "Ubicación: "}</span>Córdoba, Argentina.</li>
                <li><span className='info-importante'>{ingles ? "Languages: " : "Idiomas: "}</span>Español e inglés.</li>
            </ul>
        </div>
    </div>
  )
}

export default Sobremi