import React, {useState, useContext} from 'react'
import "./navbar.css"
import {RiMenu3Fill, RiCloseCircleFill} from 'react-icons/ri'
import IdiomaContext from '../../context/IdiomaProvider'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const abrirMenu = () => {
    setIsOpen(!isOpen)
  }

  const {changeLanguage, ingles, cambiarIdioma} = useContext(IdiomaContext)

  return (
        <header>
          <RiMenu3Fill className={`menu-hamburguesa ${isOpen  && 'open'}`} onClick={abrirMenu}/>
          <ul className={`contenedor-navbar ${isOpen && 'open' }`}>
              <li className='cerrar-navbar' onClick={abrirMenu}><RiCloseCircleFill /></li>
              <li className='navbar-items'><a href='inicio'>{ingles ? "Home" : "Inicio"}</a></li>
              <li className='navbar-items'><a href='#sobremi'>{ingles ? "About me" : "Sobre mi"}</a></li>
              <li className='navbar-items'><a href='#skills'>{ingles ? "Skills" : "Habilidades"}</a></li>
              <li className='navbar-items'><a href='#certificados'>{ingles ? "Certificates" : "Certificados"}</a></li>
              <li className='navbar-items'><a href='#trabajos'>{ingles ? "Projects" : "Proyectos"}</a></li>
              <li className='navbar-items'><a href='#contacto'>{ingles ? "Contact" : "Contacto"}</a></li>
              <li>
                <img src='../assets/ingles.png' className='bandera' onClick={changeLanguage}></img>
              </li>
              <li>
                <img src='../assets/español.svg' className='bandera' onClick={cambiarIdioma}></img>
              </li>
          </ul>
        </header>

  )
}

export default Navbar