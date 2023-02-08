import { useContext } from 'react'
import { SocialMedia } from '../SocialMedia/SocialMedia'
import LangContext from '../../context/LangContext'

const Footer = () => {
  const { translations } = useContext(LangContext)
  const actualYear = new Date().getFullYear()

  return (
    <footer className='footer' id='bottom'>
      <SocialMedia />
      <p className='footer__copy'>{actualYear === 2023 ? '2023' : `2023 - ${actualYear}`} <span className='footer__copy--icon'>&copy;</span>{translations.footer.copy}</p>
    </footer>
  )
}

export { Footer }
