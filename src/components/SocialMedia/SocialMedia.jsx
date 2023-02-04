import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

const SocialMedia = () => (
  <div className="socialmedia">
    <a
      href="https://www.linkedin.com/in/facucarrion"
      target={'_blank'}
      rel="noreferrer"
      className="socialmedia__link"
      title="LinkedIn"
      aria-label="LinkedIn"
    >
      <BsLinkedin className="socialmedia__icon" />
    </a>
    <a
      href="https://www.github.com/facucarrion"
      target={'_blank'}
      rel="noreferrer"
      className="socialmedia__link"
      title="GitHub"
      aria-label="GitHub"
    >
      <BsGithub className="socialmedia__icon" />
    </a>
    <a
      href="https://www.instagram.com/facucarriondev"
      target={'_blank'}
      rel="noreferrer"
      className="socialmedia__link"
      title="Instagram"
      aria-label="Instagram"
    >
      <BsInstagram className="socialmedia__icon" />
    </a>
    <a
      href="https://www.twitter.com/FacucarrionDev"
      target={'_blank'}
      rel="noreferrer"
      className="socialmedia__link"
      title="Twitter"
      aria-label="Twitter"
    >
      <BsTwitter className="socialmedia__icon" />
    </a>
  </div>
)

export { SocialMedia }
