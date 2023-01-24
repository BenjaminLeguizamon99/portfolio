import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <div className='skills-contenedor'>
        <h3 className='subtitulo-skills'>Skills</h3>
        <div className='contenedor-logos'>
            <div className='skills-card'>
                <img src="../assets/html-logo.svg" alt="Logo de HTML5" className='logos' />
                <h4>HTML</h4>
            </div>
            <div className='skills-card'>
                <img src="../assets/css-logo.svg" alt="Logo de CSS" className='logos' />
                <h4>CSS</h4>
            </div>
            <div className='skills-card'>
               <img src="../assets/Bootstrap-logo.png" alt="Logo de Bootstrap" className='logos' />
               <h4>Bootstrap</h4> 
            </div>
            <div className='skills-card'>
               <img src="../assets/tailwind-logo.svg" alt="Logo de Bootstrap" className='logos' />
               <h4>Tailwind</h4> 
            </div>
            <div className='skills-card'>
                <img src="../assets/js-logo.svg" alt="Logo de JS" className='logos' />
                <h4>Javascript</h4>
            </div>
            <div className='skills-card'>
                <img src="../assets/react-logo.png" alt="Logo de React" className='logos' />
                <h4>React</h4>
            </div>
            <div className='skills-card'>
                <img src="../assets/git-logo.png" alt="Logo de Git" className='logos' />
                <h4>Git</h4>
            </div>
            <div className='skills-card'>
                <img src="../assets/github-logo.png" alt="Logo de Github" className='logos' />
                <h4>Github</h4>
            </div>
        </div>
    </div>
  )
}

export default Skills