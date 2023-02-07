import { SocialMedia } from '../SocialMedia/SocialMedia'

const Footer = () => {
  const actualYear = new Date().getFullYear()

  return (
    <footer className='footer' id='bottom'>
      <SocialMedia />
      <p className='footer__copy'>{actualYear === 2023 ? '2023' : `2023 - ${actualYear}`} <span className='footer__copy--icon'>&copy;</span> All rights reserved</p>
    </footer>
  )
}

export { Footer }
