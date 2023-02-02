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
    </li>
  )
}

export { NavItem }
