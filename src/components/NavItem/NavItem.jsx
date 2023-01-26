const NavItem = ({ icon, text }) => {
  return (
    <li className="header__nav__item">
      <a
        href="#"
        className="header__nav__item__link"
      >
        {icon}
        {text}
      </a>
      <span className="header__nav__item__decoration"></span>
    </li>
  )
}

export { NavItem }
