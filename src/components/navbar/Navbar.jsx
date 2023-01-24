import React from 'react'
import "./navbar.css"


const Navbar = () => {
  return (
        <header>
          <ul className='contenedor-navbar'>
              <li className='navbar-items'>home</li>
              <li className='navbar-items'>Sobre mi</li>
              <li className='navbar-items'>Skills</li>
              <li className='navbar-items'>Certificados</li>
              <li className='navbar-items'>Trabajos</li>
              <li className='navbar-items'>contacto</li>
              <li><img src='../assets/ingles.png' className='bandera'></img></li>
              <li><img src='../assets/español.svg' className='bandera'></img></li>
          </ul>
          
        </header>
  )
}

export default Navbar