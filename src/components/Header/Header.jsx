const Header = () => {
  return (
    <header className="header">
      <title className="header__title">
        <img
          className="header__img"
          src="/img/white-logo-transparent.png"
          alt="Facucarrion Dev"
        />
        <h1 className="header__name">Facucarrion Dev</h1>
      </title>
      <nav className="header__nav">
        <ul className="header__nav__menu">
          <li className="header__nav__item">
            <a
              href="#"
              className="header__nav__item__link"
            >
              Home
            </a>
            <span className="header__nav__item__decoration"></span>
          </li>
          <li className="header__nav__item">
            <a
              href="#"
              className="header__nav__item__link"
            >
              Home
            </a>
            <span className="header__nav__item__decoration"></span>
          </li>
          <li className="header__nav__item">
            <a
              href="#"
              className="header__nav__item__link"
            >
              Home
            </a>
            <span className="header__nav__item__decoration"></span>
          </li>
          <li className="header__nav__item">
            <a
              href="#"
              className="header__nav__item__link"
            >
              Home
            </a>
            <span className="header__nav__item__decoration"></span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
