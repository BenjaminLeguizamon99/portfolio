import React from 'react'
import {IdiomaProvider} from './context/IdiomaProvider'
import "./app.css"
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import SobreMi from './components/sobre-mi/SobreMi'
import Skills from './components/skills/Skills'
import Certificados from './components/certificados/Certificados'
import Trabajos from './components/trabajos/Trabajos'
import Contacto from './components/contacto/Contacto'


function App () {

  return (
    <>
      <IdiomaProvider>
        <div className='portada'>
          <Navbar />
          <Home />
        </div>
          <SobreMi />
          <Skills />
          <Certificados />
          <Trabajos />
          <Contacto />
      </IdiomaProvider>
    </>
  )
}

export default App