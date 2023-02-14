import { BsGithub, BsTerminalFill } from 'react-icons/bs'
import { FaSass } from 'react-icons/fa'
import { ImGit, ImHtmlFive } from 'react-icons/im'
import {
  SiBootstrap,
  SiCss3,
  SiJavascript,
  SiMarkdown,
  SiMaterialui,
  SiNotion,
  SiReact
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

export const techSkills = [
  {
    name: 'HTML',
    icon: (
      <ImHtmlFive
        className='skill__icon'
        color='#e56027'
      />
    )
  },
  {
    name: 'CSS',
    icon: (
      <SiCss3
        className='skill__icon'
        color='#2760e5'
      />
    )
  },
  {
    name: 'JavaScript',
    icon: (
      <SiJavascript
        className='skill__icon'
        color='#ead41c'
      />
    )
  },
  {
    name: 'React',
    icon: (
      <SiReact
        className='skill__icon'
        color='#61dafb'
      />
    )
  },
  {
    name: 'Sass',
    icon: (
      <FaSass
        className='skill__icon'
        color='#c76494'
      />
    )
  },
  {
    name: 'Material UI',
    icon: (
      <SiMaterialui
        className='skill__icon'
        color='#0081cb'
      />
    )
  },
  {
    name: 'Bootstrap',
    icon: (
      <SiBootstrap
        className='skill__icon'
        color='#ab3dff'
      />
    )
  },
  {
    name: 'React Native',
    icon: (
      <TbBrandReactNative
        className='skill__icon'
        color='#61dafb'
      />
    )
  }
]

export const toolSkills = [
  {
    name: 'Terminal',
    icon: (
      <BsTerminalFill
        className='skill__icon'
        color='#efefef'
      />
    )
  },
  {
    name: 'GitHub',
    icon: (
      <BsGithub
        className='skill__icon'
        color='#7e46d4'
      />
    )
  },
  {
    name: 'Git',
    icon: (
      <ImGit
        className='skill__icon'
        color='#f14e32'
      />
    )
  },
  {
    name: 'Notion',
    icon: (
      <SiNotion
        className='skill__icon'
        color='#efe'
      />
    )
  },
  {
    name: 'Markdown',
    icon: (
      <SiMarkdown
        className='skill__icon'
        color='#259fe9'
      />
    )
  }
]
