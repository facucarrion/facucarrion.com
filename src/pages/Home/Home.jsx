import { useContext } from 'react'
import { SocialMedia } from '../../components/SocialMedia/SocialMedia'
import LangContext from '../../context/LangContext'

const Home = () => {
  const { translations } = useContext(LangContext)

  return (
    <section
      className='home'
      id='home'
    >
      <div className='home__container'>
        <h1 className='home__title'>
          {translations.home.title} <span className='home__title--decorated'>Facundo Carrion</span>
          {translations.home.developer}
        </h1>
        <SocialMedia />
      </div>

      <img
        src='/img/code-illustration.svg'
        className='home__img'
        alt='coding illustration'
      />
    </section>
  )
}

export { Home }
