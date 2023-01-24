import React from 'react'
import './certificados.css'

const Certificados = () => {
  return (
    <>
        <h3 className='subtitulo-certificado'>Certificados</h3>
        <div className="contenedor-certificados">
            <img src="../assets/certificado-react.png" alt="Certificado de React" />
            <img src="../assets/diploma-js.png" alt="Certificado de Javascript" />
            <img src="../assets/certificado-dw.png" alt="Certificado de Desarrollo Web" />
            <p>Acá va a ir el certificado de Udemy</p>
        </div>
    </>
    
  )
}

export default Certificados