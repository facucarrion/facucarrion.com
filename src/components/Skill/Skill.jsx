const Skill = ({ icon, title }) => (
  <article className='skill'>
    {icon}
    <strong className='skill__title'>{title}</strong>
  </article>
)

export { Skill }
