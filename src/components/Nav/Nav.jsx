import { AiFillHome } from 'react-icons/ai'
import { BsFillGearFill, BsPersonCircle } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'
import { NavItem } from '../NavItem/NavItem'

const Nav = () => {
  return (
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
          icon={<BsFillGearFill className="header__nav__item__link__icon" />}
          text={'My Work'}
        />
        <NavItem
          icon={<IoMail className="header__nav__item__link__icon" />}
          text={'Contact'}
        />
      </ul>
    </nav>
  )
}

export { Nav }
