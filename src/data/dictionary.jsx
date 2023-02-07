import { Fragment } from 'react'

export const dictionary = {
  es: {
    header: {
      home: 'Inicio',
      about: 'Sobre Mí',
      skills: 'Habilidades',
      works: 'Proyectos'
    },
    home: {
      title: 'Hola 👋! Soy',
      developer: 'Desarrollador Frontend'
    },
    about: {
      title: 'Sobre Mí',
      text: [
        <Fragment key={1}>Soy <strong className='aboutme__text--decorated'>Desarrollador Web 👨🏻‍💻</strong>, me apasiona combinar lo técnico con lo estético para crear interfaces amigables e intuitivas con el mejor rendimiento.</Fragment>,
        <Fragment key={2}>Desarrollo interfaces dinámicas con React y SASS. También, presto especial atención a la Optimización <strong className='aboutme__text--decorated'>(SEO)</strong> para que tu web se posicione en la cúspide 🔝 de Internet.</Fragment>,
        <Fragment key={3}>Estoy en busca de Experiencia realizando proyectos como <strong className='aboutme__text--decorated'>Freelance</strong>, Colaborando 👥 con colegas de la industria.</Fragment>,
        <Fragment key={4}>Mi método de <strong className='aboutme__text--decorated'>Trabajo</strong> se basa en la Cooperación y en la Organización 🗃️, sin dejar de lado la Eficiencia.</Fragment>,
        <Fragment key={5}>Me gusta <strong className='aboutme__text--decorated'>Aprender</strong> cosas nuevas todos los días, para renovar mis maneras de trabajar y ser capaz de encontrar la mejor Solución 💡.</Fragment>
      ]
    },
    skills: {
      tech: 'Tecnologías',
      tool: 'Herramientas'
    },
    works: {
      title: 'Proyectos'
    }
  },
  // prettier-ignore
  en: {
    header: {
      home: 'Home',
      about: 'About Me',
      skills: 'Skills',
      works: 'My Projects'
    },
    home: {
      title: 'Hi 👋! I\'m',
      developer: 'Frontend Developer'
    },
    about: {
      title: 'About Me',
      text: [
        <Fragment key={1}>I&#39;m <strong className='aboutme__text--decorated'>Web Developer 👨🏻‍💻</strong>, passionate about combining technicality with aesthetics to create user-friendly and intuitive interfaces with the best performance.</Fragment>,
        <Fragment key={2}>I specialize in developing dynamic interfaces using React and SASS, with a focus on Optimization <strong className='aboutme__text--decorated'>(SEO)</strong> to position your website at the forefront 🔝 of the Internet.</Fragment>,
        <Fragment key={3}>I am seeking experience as a <strong className='aboutme__text--decorated'>Freelancer</strong>, working on projects with other industry professionals 👥.</Fragment>,
        <Fragment key={4}>My <strong className='aboutme__text--decorated'>Work</strong> approach is based on Cooperation and Organization 🗃️, while maintaining Efficiency.</Fragment>,
        <Fragment key={5}>I enjoy <strong className='aboutme__text--decorated'>Learning</strong> new things every day to refresh my work methods and be able to find the best Solution 💡.</Fragment>
      ]
    },
    skills: {
      tech: 'Technologies',
      tool: 'Tools'
    },
    works: {
      title: 'My Projects'
    }
  }
}
