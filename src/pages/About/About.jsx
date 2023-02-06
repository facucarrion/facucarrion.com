import { useContext } from 'react'
import LangContext from '../../context/LangContext'

const About = () => {
  const { translations } = useContext(LangContext)
  return (
    <section
      className='aboutme'
      id='about'
    >
      <h2 className='aboutme__title'>{translations.about.title}</h2>

      <div className='aboutme__textcont'>
        {translations.about.text.map((element, index) => (
          <p
            className='aboutme__text'
            key={index}
          >
            {element}
          </p>
        ))}
      </div>
    </section>
  )
}

export { About }
