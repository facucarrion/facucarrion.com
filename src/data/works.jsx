import { ImHtmlFive } from 'react-icons/im'
import { SiCss3, SiJavascript, SiReact, SiMaterialui } from 'react-icons/si'

export const works = [
  {
    name: 'Foc Solar Page',
    description: 'A landing page for a solar company',
    tech: [
      <ImHtmlFive
        key={1}
        className={'project__icon'}
        color="#e56027"
      />,
      <SiCss3
        key={2}
        className={'project__icon'}
        color="#2760e5"
      />,
      <SiJavascript
        key={3}
        className={'project__icon'}
        color="#ead41c"
      />
    ],
    img: '/img/focsolar.webp',
    deploy: 'https://focsolar.netlify.app',
    github: 'https://www.github.com/facucarrion/focsolar'
  },
  {
    name: 'Coingecko API App',
    description: 'A simple app that uses the Coingecko API',
    tech: [
      <SiReact
        key={1}
        className={'project__icon'}
        color="#61dafb"
      />,
      <SiMaterialui
        key={2}
        className={'project__icon'}
        color="#0081cb"
      />,
      <SiCss3
        key={3}
        className={'project__icon'}
        color="#2760e5"
      />
    ],
    img: '/img/coingecko.webp',
    deploy: 'https://facucarrion-coingecko.netlify.app',
    github: 'https://www.github.com/facucarrion/coingecko-api'
  }
]
