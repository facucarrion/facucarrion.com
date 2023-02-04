import { SocialMedia } from '../SocialMedia/SocialMedia'

const Footer = () => (
  <footer className="footer">
    <SocialMedia />
    <p className="footer__copy">2023 - {new Date().getFullYear()} &copy; All rights reserved</p>
  </footer>
)

export { Footer }
