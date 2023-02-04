import { AiFillHome } from 'react-icons/ai'
import { BsFillGearFill, BsPersonCircle } from 'react-icons/bs'
import { BiCodeCurly } from 'react-icons/bi'
import { NavItem } from '../NavItem/NavItem'

const Nav = () => (
  <nav className="header__nav">
    <ul className="header__nav__menu">
      <NavItem
        icon={<AiFillHome className="header__nav__item__link__icon" />}
        text={'Home'}
        section={'top'}
      />
      <NavItem
        icon={<BsPersonCircle className="header__nav__item__link__icon" />}
        text={'About Me'}
        section={'about'}
      />
      <NavItem
        icon={<BiCodeCurly className="header__nav__item__link__icon" />}
        text={'Skills'}
        section={'skills'}
      />
      <NavItem
        icon={<BsFillGearFill className="header__nav__item__link__icon" />}
        text={'My Work'}
        section={'works'}
      />
    </ul>
  </nav>
)

export { Nav }
