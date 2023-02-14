import React, {useContext} from 'react'
import './certificados.css'
import '../../context/IdiomaProvider'
import IdiomaContext from '../../context/IdiomaProvider'

const Certificados = () => {

  const {cursos, ingles} = useContext(IdiomaContext)
  return (
    <>
        <h3 className='subtitulo-certificado' id='certificados'>{ingles ? "Certificates" : "Certificados"}</h3>
        <div className="contenedor-certificados">
          {cursos.map(e => {
            return(
            <div key={e.fecha}>
              <h4 className='nombre-del-curso'>{e.nombre}</h4>
                <div className='certificado-descripcion' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <img src={e.img} alt={e.nombre} />
                    <div className='descripcion'>
                      <p>{ingles ? e.description : e.descripcion}</p>
                      <p>{ingles ? e.date : e.fecha}</p>
                    </div>
                  </div>
            </div>
            )
          } )}
      </div>
    </>
  )
}

export default Certificados