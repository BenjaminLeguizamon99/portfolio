import { createContext, useState } from "react";

const IdiomaContext = createContext();


const proyectos = [{
    id: 0,
    img: 'assets/controlador-presupuesto-react.JPG',
    descripcion: 'Controlador de presupuesto construido con HTML, CSS, Tailwind y React.js',
    description: 'Budget controller programmed with HTML, CSS, Tailwind and React.js',
    link: 'https://control-presupuesto-bl.netlify.app/'
  }, 
  {
    id: 1,
    img: '../assets/criptos-react.JPG',
    descripcion: 'Cotizador de las criptomonedas más populares construido con HTML, CSS, Tailwind, React.js y la API CryptoCompare',
    description: 'Quote of the most popular cryptocurrencies programmed with HTML, CSS, Tailwind, React.js and the API CryptoCompare',
    link: 'https://criptos-bl.netlify.app/'
  },
  {
    id: 2,
    img: '../assets/tienda-padel-react.JPG',
    descripcion: 'Mi primer App con React.js. Ecommerce de productos de padel construido con HTML, CSS, ReactBootstrap, React.js y Firebase',
    description: 'My first React.js App. It is a ecommerce of differents paddle products. I also used HTML, CSS, ReactBootstrap and Firebase',
    link: 'http://192.168.0.135:3000/'
  },
  {
    id: 3,
    img: '../assets/proyecto-veterinaria-react.JPG',
    descripcion: 'Seguimiento de pacientes de una veterinaria. Proyecto creado con HTML, CSS, Tailwind, React.js',
    description: 'Follow-up of veterinary patients programmed with HTML, CSS, Tailwind and React.js',
    link: 'https://proyecto-citas-veterinaria-react.netlify.app/'
  },
  {
    id: 4,
    img: '../assets/buscador-clima-js.JPG',
    descripcion: 'App que te devuelve el clima de la provincia/país seleccionado. Proyecto creado con HTML, CSS, Javascript puro y la API Weather API',
    description: 'Weather App programmed with HTML, CSS, Vanilla Javascript and Weather API',
    link: 'https://benjaminleguizamon99.github.io/buscador-clima/'
  },
  {
    id: 5,
    img: '../assets/universidad-virtual-js.JPG',
    descripcion: 'App del tipo ecommerce de cursos online. Proyecto creado con HTML, CSS y Javascript',
    description: 'Ecommerce of online curses programmed with HTML, CSS and Vanilla Javascript',
    link: 'https://benjaminleguizamon99.github.io/practica-JS/'
  },
  {
    id: 6,
    img: '../assets/proyecto-inmobiliaria-js.JPG',
    descripcion: 'App de una inmobiliaria para reservar visitas a las distintas casas disponibles. Proyecto creado con HTML, CSS, Bootstrap y Javascript',
    description: 'My first Vanilla Javascript app. It is the page of a real estate programmed with HTML, CSS, Bootstrap and Vanilla Javascript',
    link: 'https://benjaminleguizamon99.github.io/javascript-proyecto-final/'
  },
  {
    id: 7,
    img: '../assets/proyecto-render.JPG',
    descripcion: 'Mi primera página web construida con HTML, CSS y Bootstrap.',
    description: 'My first static web page build with HTML, CSS and Bootstrap',
    link: 'https://benjaminleguizamon99.github.io/final/index.html'
  },
]

const conocimientos = [
    {
        id: 0,
        tecnologia: 'HTML',
        logo: '../assets/html-logo.svg'
    },
    {
        id: 1,
        tecnologia: 'CSS',
        logo: '../assets/css-logo.svg'
    },
    {
        id: 2,
        tecnologia: 'Bootstrap',
        logo: '../assets/Bootstrap-logo.png'
    },
    {
        id: 3,
        tecnologia: 'Tailwind',
        logo: '../assets/tailwind-logo.svg'
    },
    {
        id: 4,
        tecnologia: 'Javascript',
        logo: '../assets/js-logo.svg'
    },
    {
        id: 5,
        tecnologia: 'React',
        logo: '../assets/react-logo.png'
    },
    {
        id: 6,
        tecnologia: 'Git',
        logo: '../assets/git-logo.png'
    },
    {
        id: 7,
        tecnologia: 'Github',
        logo: '../assets/github-logo.png'
    }
  ]


  const cursos = [
    {
    nombre: 'React.js',
    img: '../assets/certificado-react.png',
    descripcion: 'Curso de 8 semanas en el que aprendi a programar por componentes. El manejo de rutas mediante React Router me brindó las herramientas necesarias para crear una experiencia de usuario fluida y organizada. También aprendí sobre eventos y como manipularlos para lograr una interacción efectiva con el usuario. La utilización de Context en React me permitió comprender como compartir información entre componentes de forma efectiva. Me familiaricé con técnicas de rendering para optimizar la velocidad de mi aplicación. Por último aprendí sobre Firebase y cómo utilizarlo como una plataforma de back-end para mis aplicaciones.',
    description: '8-week course in which I learned to program by components. Route management using React Router gave me the tools to create a smooth and organized user experience. I also learned about events and how to manipulate them to achieve effective interaction with the user. Using Context in React allowed me to understand how to share information between components effectively. I became familiar with rendering techniques to optimize the speed of my application. Finally, I learned about Firebase and how to use it as a back-end platform for my applications.',
    fecha: 'Ago. 2022 - Sept. 2022',
    date: 'Aug. 2022 - Sep. 2022'

  },
    {
    nombre: 'Javascript',
    img: '../assets/diploma-js.png',
    descripcion: 'Curso de 9 semanas en el que aprendi los fundamentos de Javascript y de la programación. Realicé distintas actividades prácticas que me permitieron poner en práctica los conceptos de funciones, arrays, objetos, ciclos/iteraciones, manipulación del DOM, eventos, funciones de orden superior, promises & Async y también aprendí las utilidades de diferentes librerías.',
    description: '9-week course in which I learned the fundamentals of Javascript and programming. I did different practical activities that allowed me to put into practice the concepts of functions, arrays, objects, cycles / iterations, manipulation of the DOM, events, higher order functions, promises & Async and I also learned the utilities of different libraries.',
    fecha: 'May. 2022 - Jul. 2022',
    date: 'May. 2022 - Jul. 2022'
  },
    {
    nombre: 'Desarrollo Web',
    img: '../assets/certificado-dw.png',
    descripcion: 'Curso completo de Diseñador Web de CoderHouse con una duración de 9 semanas en donde aprendí a crear sitios Web partiendo de un prototipo en papel utilizando principalmente HTML y CSS.',
    description: 'Complete course of Web Designer of CoderHouse with a duration of 9 weeks where I learned to create Web sites starting from a prototype on paper using mainly HTML and CSS.',
    fecha: 'Mar. 2022 - May. 2022',
    date: 'Mar. 2022 - May. 2022'
  }
  ]

const IdiomaProvider = ({children}) => {

    const [ingles, setIngles] = useState(true);


    const cambiarIdioma = () => {
        setIngles(false)
    }
    const changeLanguage = () => {
        setIngles(true)
    }

    return (
        <IdiomaContext.Provider
            value={{
                proyectos,
                conocimientos,
                cursos,
                ingles,
                changeLanguage,
                cambiarIdioma
            }}
        >
            {children}
        </IdiomaContext.Provider>
    )
}


export { IdiomaProvider }
export default IdiomaContext