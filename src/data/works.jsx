import { ImHtmlFive } from 'react-icons/im'
import { SiCss3, SiJavascript, SiReact, SiMaterialui, SiTailwindcss, SiTypescript } from 'react-icons/si'

export const works = [
  {
    name: 'Foc Solar',
    description: {
      es: 'Una web para una empresa de energía solar. Para mostrar sus trabajos.',
      en: 'A web for a solar energy company. To show their work.'
    },
    tech: [
      <ImHtmlFive
        key={1}
        className='project__icon'
        color='#e56027'
      />,
      <SiCss3
        key={2}
        className='project__icon'
        color='#2760e5'
      />,
      <SiJavascript
        key={3}
        className='project__icon'
        color='#ead41c'
      />
    ],
    img: '/img/focsolar.webp',
    deploy: 'https://focsolar.com.ar',
    github: 'https://www.github.com/facucarrion/focsolar'
  },
  {
    name: 'Coingecko API Web',
    description: {
      es: 'Una web que consume la API de Coingecko y muestra los datos de las criptomonedas',
      en: 'A web that consumes the Coingecko API and shows the data of the cryptocurrencies'
    },
    tech: [
      <SiReact
        key={1}
        className='project__icon'
        color='#61dafb'
      />,
      <SiMaterialui
        key={2}
        className='project__icon'
        color='#0081cb'
      />,
      <SiCss3
        key={3}
        className='project__icon'
        color='#2760e5'
      />
    ],
    img: '/img/coingecko.webp',
    deploy: 'https://facucarrion-coingecko.netlify.app',
    github: 'https://www.github.com/facucarrion/coingecko-api'
  },
  {
    name: 'TypeScript To-Do App',
    description: {
      es: 'Una aplicación de tareas hecha con TypeScript',
      en: 'A to-do app made with TypeScript'
    },
    tech: [
      <SiReact
        key={1}
        className='project__icon'
        color='#61dafb'
      />,
      <SiTailwindcss
        key={2}
        className='project__icon'
        color='#06b6d4'
      />,
      <SiTypescript
        key={3}
        className='project__icon'
        color='#007acc'
      />
    ],
    img: '/img/ts-todo.webp',
    deploy: 'https://ts-todo-app-facucarrion.netlify.app',
    github: 'https://github.com/facucarrion/ts-todo-app'
  }
]
