import { AiFillHome } from 'react-icons/ai'
import { BsFillGearFill, BsPersonCircle } from 'react-icons/bs'
import { BiCodeCurly } from 'react-icons/bi'
import { IoLanguage } from 'react-icons/io5'

import { NavItem } from '../NavItem/NavItem'

import { useContext } from 'react'
import LangContext from '../../context/LangContext'

const Nav = ({ isMenuOpen, handleClick }) => {
  const { translations, handleLang, initialLang } = useContext(LangContext)

  const verifyClass = (state) => {
    if (state) return 'open-menu'
    else return 'close-menu'
  }

  return (
    <nav className={'header__nav ' + verifyClass(isMenuOpen)}>
      <ul className='header__nav__menu'>
        <NavItem
          icon={<AiFillHome className='header__nav__item__link__icon' />}
          text={translations.header.home}
          section='top'
          handleClick={handleClick}
        />
        <NavItem
          icon={<BsPersonCircle className='header__nav__item__link__icon' />}
          text={translations.header.about}
          section='about'
          handleClick={handleClick}
        />
        <NavItem
          icon={<BiCodeCurly className='header__nav__item__link__icon' />}
          text={translations.header.skills}
          section='skills'
          handleClick={handleClick}
        />
        <NavItem
          icon={<BsFillGearFill className='header__nav__item__link__icon' />}
          text={translations.header.works}
          section='bottom'
          handleClick={handleClick}
        />

        <li className='header__nav__item__link' cursor='default'>
          <IoLanguage
            className='header__nav__item__link__icon lang'
          />
          <select onChange={handleLang} className='header__nav__menu__select' defaultValue={initialLang} name='lang'>
            <option value='en'>English</option>
            <option value='es'>Spanish</option>
          </select>
        </li>
      </ul>
    </nav>
  )
}

export { Nav }
