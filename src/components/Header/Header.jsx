import { AiFillHome } from 'react-icons/ai'
import { BsFillGearFill, BsPersonCircle } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'

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
              <AiFillHome
                className="header__nav__item__link__icon"
                size={'16px'}
              />
              Home
            </a>
            <span className="header__nav__item__decoration"></span>
          </li>
          <li className="header__nav__item">
            <a
              href="#"
              className="header__nav__item__link"
            >
              <BsPersonCircle
                className="header__nav__item__link__icon"
                size={'16px'}
              />
              About Me
            </a>
            <span className="header__nav__item__decoration"></span>
          </li>
          <li className="header__nav__item">
            <a
              href="#"
              className="header__nav__item__link"
            >
              <BsFillGearFill
                className="header__nav__item__icon"
                size={'16px'}
              />
              My Works
            </a>
            <span className="header__nav__item__decoration"></span>
          </li>
          <li className="header__nav__item">
            <a
              href="#"
              className="header__nav__item__link"
            >
              <IoMail
                className="header__nav__item__icon"
                size={'16px'}
              />
              Contact Me
            </a>
            <span className="header__nav__item__decoration"></span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
