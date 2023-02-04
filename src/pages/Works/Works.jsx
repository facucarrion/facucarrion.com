import { Project } from '../../components/Project/Project'
import { works } from '../../data/works'

const Works = () => (
  <section
    className="works"
    id="works"
  >
    <h2 className="works__title">My Works</h2>
    <div className="works__grid">
      {works.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          tech={project.tech}
          img={project.img}
          deploy={project.deploy}
          github={project.github}
        />
      ))}
    </div>
  </section>
)

export { Works }
