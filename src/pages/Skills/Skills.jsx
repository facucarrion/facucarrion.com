import { Skill } from '../../components/Skill/Skill'

import { FaSass } from 'react-icons/fa'
import { ImHtmlFive, ImGit } from 'react-icons/im'
import { BsTerminalFill, BsGithub } from 'react-icons/bs'
import { TbBrandReactNative } from 'react-icons/tb'
import { SiCss3, SiJavascript, SiReact, SiMaterialui, SiBootstrap, SiNotion, SiMarkdown } from 'react-icons/si'

const techSkills = [
  {
    name: 'HTML',
    icon: (
      <ImHtmlFive
        className="skill__icon"
        color="#e56027"
      />
    )
  },
  {
    name: 'CSS',
    icon: (
      <SiCss3
        className="skill__icon"
        color="#2760e5"
      />
    )
  },
  {
    name: 'JavaScript',
    icon: (
      <SiJavascript
        className="skill__icon"
        color="#ead41c"
      />
    )
  },
  {
    name: 'React',
    icon: (
      <SiReact
        className="skill__icon"
        color="#61dafb"
      />
    )
  },
  {
    name: 'Sass',
    icon: (
      <FaSass
        className="skill__icon"
        color="#c76494"
      />
    )
  },
  {
    name: 'Material UI',
    icon: (
      <SiMaterialui
        className="skill__icon"
        color="#0081cb"
      />
    )
  },
  {
    name: 'Bootstrap',
    icon: (
      <SiBootstrap
        className="skill__icon"
        color="#7e46d4"
      />
    )
  },
  {
    name: 'React Native',
    icon: (
      <TbBrandReactNative
        className="skill__icon"
        color="#61dafb"
      />
    )
  }
]

const toolSkills = [
  {
    name: 'Terminal',
    icon: (
      <BsTerminalFill
        className="skill__icon"
        color="#efefef"
      />
    )
  },
  {
    name: 'GitHub',
    icon: (
      <BsGithub
        className="skill__icon"
        color="#7e46d4"
      />
    )
  },
  {
    name: 'Git',
    icon: (
      <ImGit
        className="skill__icon"
        color="#f14e32"
      />
    )
  },
  {
    name: 'Notion',
    icon: (
      <SiNotion
        className="skill__icon"
        color="#efe"
      />
    )
  },
  {
    name: 'Markdown',
    icon: (
      <SiMarkdown
        className="skill__icon"
        color="#259fe9"
      />
    )
  }
]

const Skills = () => (
  <section
    className="skills"
    id="skills"
  >
    <section className="skills__tech">
      <h2 className="skills__title">Technologies</h2>
      <div className="skills__grid">
        {techSkills.map(({ icon, name }, index) => (
          <Skill
            icon={icon}
            title={name}
            key={index}
          />
        ))}
      </div>
    </section>
    <section className="skills__tools">
      <h2 className="skills__title">Tools</h2>
      <div className="skills__grid">
        {toolSkills.map(({ icon, name }, index) => (
          <Skill
            icon={icon}
            title={name}
            key={index}
          />
        ))}
      </div>
    </section>
  </section>
)

export { Skills }
