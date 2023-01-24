import React from 'react'
import "./app.css"
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import SobreMi from './components/sobre-mi/SobreMi'
import Skills from './components/skills/Skills'
import Certificados from './components/certificados/Certificados'
import Trabajos from './components/trabajos/Trabajos'
import Contacto from './components/contacto/Contacto'

function App () {

  const proyectos = [{
    id: 0,
    img: 'assets/controlador-presupuesto-react.JPG',
    descripcion: 'Controlador de presupuesto construido con HTML, CSS, Tailwind y React.js',
    link: 'proximamente'
  }, 
  {
    id: 1,
    img: '../assets/criptos-react.JPG',
    descripcion: 'Cotizador de las criptomonedas más populares construido con HTML, CSS, Tailwind, React.js y la API CryptoCompare',
    link: 'proximamente'
  },
  {
    id: 2,
    img: '../assets/tienda-padel-react.JPG',
    descripcion: 'Mi primer App con React.js. Ecommerce de productos de padel construido con HTML, CSS, ReactBootstrap, React.js y Firebase',
    link: 'proximamente'
  },
  {
    id: 3,
    img: '../assets/proyecto-veterinaria-react.JPG',
    descripcion: 'Seguimiento de pacientes de una veterinaria. Proyecto creado con HTML, CSS, Tailwind, React.js',
    link: 'proximamente'
  },
  {
    id: 4,
    img: '../assets/buscador-clima-js.JPG',
    descripcion: 'App que te devuelve el clima de la provincia/país seleccionado. Proyecto creado con HTML, CSS y Javascript',
    link: 'proximamente'
  },
  {
    id: 5,
    img: '../assets/buscador-autos-js.JPG',
    descripcion: 'App que te devuelve los autos disponibles dependiendo de los filtros aplicados. Proyecto creado con HTML, CSS y Javascript',
    link: 'proximamente'
  },
  {
    id: 6,
    img: '../assets/universidad-virtual-js.JPG',
    descripcion: 'App del tipo ecommerce de cursos online. Proyecto creado con HTML, CSS y Javascript',
    link: 'proximamente'
  },
  {
    id: 7,
    img: '../assets/proyecto-inmobiliaria-js.JPG',
    descripcion: 'App de una inmobiliaria para reservar visitas a las distintas casas disponibles. Proyecto creado con HTML, CSS, Bootstrap y Javascript',
    link: 'proximamente'
  },
  {
    id: 8,
    img: '../assets/proyecto-render.JPG',
    descripcion: 'Mi primera página web construida con HTML, CSS y Bootstrap.',
    link: 'proximamente'
  },
]


  return (
    <>
      <div className='portada'>
        <Navbar/>
        <Home />
      </div>
      <SobreMi/>
      <Skills />
      <Certificados />
      <Trabajos proyectos={proyectos} />
      <Contacto />
    </>
    

  )
}

export default App