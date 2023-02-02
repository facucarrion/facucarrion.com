const NavItem = ({ icon, text, section }) => {
  return (
    <li className="header__nav__item">
      <a
        href={`#${section}`}
        className="header__nav__item__link"
      >
        {icon}
        {text}
      </a>
    </li>
  )
}

export { NavItem }
