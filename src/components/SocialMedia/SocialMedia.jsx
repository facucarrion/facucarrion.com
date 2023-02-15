import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { SocialLink } from '../SocialLink/SocialLink'
import { GiPalmTree } from 'react-icons/gi'

const SocialMedia = () => (
  <div className='socialmedia'>
    <SocialLink
      label='LinkedIn'
      href='https://www.linkedin.com/in/facucarrion'
    >
      <BsLinkedin className='socialmedia__icon' />
    </SocialLink>
    <SocialLink
      label='GitHub'
      href='https://www.github.com/facucarrion'
    >
      <BsGithub className='socialmedia__icon' />
    </SocialLink>
    <SocialLink
      href='https://www.instagram.com/facucarriondev'
      label='Instagram'
    >
      <BsInstagram className='socialmedia__icon' />
    </SocialLink>
    <SocialLink
      href='https://www.twitter.com/FacucarrionDev'
      label='Twitter'
    >
      <BsTwitter className='socialmedia__icon' />
    </SocialLink>
    <SocialLink
      href='https://www.linktr.ee/facucarrionn'
      label='LinkTree'
    >
      <GiPalmTree className='socialmedia__icon' />
    </SocialLink>
  </div>
)

export { SocialMedia }
