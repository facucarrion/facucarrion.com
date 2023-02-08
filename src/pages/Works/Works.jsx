import { useContext } from 'react'
import { Project } from '../../components/Project/Project'
import { works } from '../../data/works'
import LangContext from '../../context/LangContext'

const Works = () => {
  const { translations, language } = useContext(LangContext)
  return (
    <section
      className='works'
      id='works'
    >
      <h2 className='works__title'>{translations.works.title}</h2>
      <div className='works__grid'>
        {works.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description[language]}
            tech={project.tech}
            img={project.img}
            deploy={project.deploy}
            github={project.github}
          />
        ))}
      </div>
    </section>
  )
}

export { Works }
