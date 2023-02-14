import React, {useContext, useState} from 'react'
import './contacto.css'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import IdiomaContext from '../../context/IdiomaProvider'


const Contacto = () => {
  const {ingles} = useContext(IdiomaContext);
  const [name, setName] = useState('')
  const [asunto, setAsunto] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)

  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


  const resetForm = () => {
    setTimeout(() => {
      setName('')
      setAsunto('')
      setEmail('')
      setMensaje('')
    }, 1200);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!emailRegex.test(email)) {
      setErrorEmail(true)
      return
    }
    setErrorEmail(false)
    if([name, asunto, mensaje].includes('')) {
      setError(true)
      return
    }
    setError(false)
    resetForm()
  }


  return (
    <>
        <h3 className='subtitulo-contacto' id='contacto'>{ingles ? "Contact" : "Contacto"}</h3>
         <form action="correo.php" method='POST' className='formulario-contacto' onSubmit={handleSubmit}>
          
          {error && <p className='error-formulario'>Todos los campos son obligatorios</p>}
          {errorEmail && <p className='error-formulario'>Email no válido!</p>}
          
          <input type="text" name='name' className='item-formulario' value={name}
          placeholder={ingles ? "Name..." : "Nombre..."}
          onChange={(e)=> {setName(e.target.value)}}
          />

          <input type="text" name='asunto' className='item-formulario' value={asunto}
          placeholder={ingles ? "Subject" : "Asunto"}
          onChange={(e)=> {setAsunto(e.target.value)}}
          />


          <input type="text"  name='email' className='item-formulario' value={email}
          placeholder={ingles ? "Email..." : "Correo electrónico..."}
          onChange={(e)=> {setEmail(e.target.value)}}
          />

          <textarea name="mensaje" cols="30" rows="10"   className='item-formulario' value={mensaje}
          placeholder={ingles ? "Your message..." : "Escriba su mensaje..."}
          onChange={(e)=> {setMensaje(e.target.value)}}
          ></textarea>

        <button className='btn-formulario' type='submit'>{ingles ? "Send!" : "Enviar!" }</button>
          

         </form>
         
         <p className='parrafo-contacto'>{ingles ? "Or you can find me in: " : "Otros medios para contactarme: "}</p>
         <div className='contenedor-iconos-contacto'>
            <a href="https://github.com/BenjaminLeguizamon99" target='_blank'><AiFillGithub className='icono-github' /></a>
            <a href="https://www.linkedin.com/in/benjamin-leguizamon/" target='_blank'><AiFillLinkedin className='icono-linkedin' /></a>
         </div>
        <div className='arrow-up'>
          <a href="#home"><BsFillArrowUpCircleFill className='arrow-icon' /></a>
          
        </div>
    </>

  )
}

export default Contacto