import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className="socialmedia">
      <a
        href="https://www.linkedin.com/in/facucarrion"
        target={'_blank'}
        rel="noreferrer"
      >
        <BsLinkedin className="socialmedia__icon" />
      </a>
      <a
        href="https://www.github.com/facucarrion"
        target={'_blank'}
        rel="noreferrer"
      >
        <BsGithub className="socialmedia__icon" />
      </a>
      <a
        href="https://www.instagram.com/facucarriondev"
        target={'_blank'}
        rel="noreferrer"
      >
        <BsInstagram className="socialmedia__icon" />
      </a>
      <a
        href="https://www.twitter.com/FacucarrionDev"
        target={'_blank'}
        rel="noreferrer"
      >
        <BsTwitter className="socialmedia__icon" />
      </a>
    </div>
  )
}

export { SocialMedia }
