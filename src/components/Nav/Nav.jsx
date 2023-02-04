import { AiFillHome } from 'react-icons/ai'
import { BsFillGearFill, BsPersonCircle } from 'react-icons/bs'
import { BiCodeCurly } from 'react-icons/bi'
import { IoLanguage } from 'react-icons/io5'

import { NavItem } from '../NavItem/NavItem'

import { useContext } from 'react'
import LangContext from '../../context/LangContext'

const Nav = () => {
  const { translations, handleLang } = useContext(LangContext)

  return (
    <nav className="header__nav">
      <ul className="header__nav__menu">
        <NavItem
          icon={<AiFillHome className="header__nav__item__link__icon" />}
          text={translations.header.home}
          section={'top'}
        />
        <NavItem
          icon={<BsPersonCircle className="header__nav__item__link__icon" />}
          text={translations.header.about}
          section={'about'}
        />
        <NavItem
          icon={<BiCodeCurly className="header__nav__item__link__icon" />}
          text={translations.header.skills}
          section={'skills'}
        />
        <NavItem
          icon={<BsFillGearFill className="header__nav__item__link__icon" />}
          text={translations.header.works}
          section={'works'}
        />

        <li className="header__nav__item lang">
          <IoLanguage
            onClick={handleLang}
            className="header__nav__item__link__icon lang"
          />
        </li>
      </ul>
    </nav>
  )
}

export { Nav }
