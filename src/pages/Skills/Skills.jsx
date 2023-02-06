import { useContext } from 'react'
import { Skill } from '../../components/Skill/Skill'
import LangContext from '../../context/LangContext'

import { techSkills, toolSkills } from '../../data/skills'

const Skills = () => {
  const { translations } = useContext(LangContext)

  return (
    <section
      className='skills'
      id='skills'
    >
      <section className='skills__tech'>
        <h2 className='skills__title'>{translations.skills.tech}</h2>
        <div className='skills__grid'>
          {techSkills.map(({ icon, name }, index) => (
            <Skill
              icon={icon}
              title={name}
              key={index}
            />
          ))}
        </div>
      </section>
      <section className='skills__tools'>
        <h2 className='skills__title'>{translations.skills.tool}</h2>
        <div className='skills__grid tools'>
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
}

export { Skills }
