const NavItem = ({ icon, text, section, handleClick }) => (
  <li className='header__nav__item'>
    <a
      href={`#${section}`}
      className='header__nav__item__link'
      onClick={handleClick}
    >
      {icon}
      {text}
    </a>
  </li>
)

export { NavItem }
