import React from 'react'
import './contacto.css'

const Contacto = () => {
  return (
    <>
        <h3 className='subtitulo-contacto'>Contacto</h3>
         <form action="" className='formulario-contacto'>
          <input type="text" placeholder='Nombre...' className='item-formulario'/>
          <input type="text" placeholder='Apellido...' className='item-formulario'/>
          <input type="text" placeholder='Mail...' className='item-formulario'/>
          <textarea name="" id="" cols="30" rows="10" className='item-formulario'></textarea>
          <button>Enviar!</button>
         </form>
    </>

  )
}

export default Contacto