const SocialLink = ({ label, href, children }) => (
  <a
    href={href}
    target='_blank'
    rel='noreferrer'
    className='socialmedia__link'
    title={label}
    aria-label={label}
  >
    {children}
  </a>
)

export { SocialLink }
