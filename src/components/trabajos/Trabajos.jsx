import React, {useState} from 'react'
import './trabajos.css'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Trabajos = ({proyectos}) => {

  const [imagenActual, setImagenActual] = useState(0)
  const cantidad = proyectos?.length;

  if(!Array.isArray(proyectos) || cantidad === 0) return;

  const imagenSiguiente = () => {
    setImagenActual(imagenActual === cantidad -1 ? 0 : imagenActual +1)
  }
  const imagenAnterior = () => {
    setImagenActual(imagenActual === 0 ? cantidad -1 : imagenActual -1)
  }

  return (
    <div className='contenedor-trabajos'>
        <h3 className='subtitulo-trabajos'>Trabajos</h3>
        <div className='contenedor-cards'>
          <BsFillArrowLeftCircleFill onClick={imagenAnterior} className='flecha-slider-izq'/>
          {proyectos.map((e) => {
            return (
              <div className='card-proyectos'>
                {imagenActual === e.id && (
                  <div className='card-individual'>
                    <img src={e.img} alt='Imagen ilustrativa del proyecto' className='fade-in' key={e.id}></img>
                    <p>{e.descripcion}</p>
                    <button className='btn-proyectos'>Ver proyecto</button>
                  </div>
                )}
            </div>
              )
            })}        
            <BsFillArrowRightCircleFill onClick={imagenSiguiente} className='flecha-slider-der' />
        </div>

    </div>
    
  )
}

export default Trabajos