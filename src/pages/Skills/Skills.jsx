import { Skill } from '../../components/Skill/Skill'

import { techSkills, toolSkills } from '../../data/skills'

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
