import { BsGithub, BsLink45Deg } from 'react-icons/bs'

const Project = ({ name, description, tech, img, deploy, github }) => (
  <article className='project'>
    <img
      src={img}
      alt=''
      className='project__img'
    />
    <div className='project__filter'>
      <h3 className='project__name'>{name}</h3>
      <p className='project__description'>{description}</p>
      <div className='project__icons'>
        <ul className='project__techlist'>
          {tech.map((item, index) => (
            <li
              key={index}
              className='project__tech'
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className='project__techlist'>
          <li className='project__tech'>
            <a
              href={github}
              target='_blank'
              rel='noreferrer'
            >
              <BsGithub
                className='project__icon project__icon--link'
                color='#7e46d4'
                role='img'
              />
            </a>
          </li>
          <li className='project__tech'>
            <a
              href={deploy}
              target='_blank'
              rel='noreferrer'
            >
              <BsLink45Deg
                className='project__icon project__icon--link'
                color='#efefef'
                role='img'
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </article>
)

export { Project }
