import { AiFillHome } from 'react-icons/ai'
import { BsFillGearFill, BsPersonCircle } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'
import { NavItem } from '../NavItem/NavItem'

const Nav = () => {
  return (
    <nav className="header__nav">
      <ul className="header__nav__menu">
        <NavItem
          icon={
            <AiFillHome
              className="header__nav__item__link__icon"
              size={'20px'}
            />
          }
          text={'Home'}
        />
        <NavItem
          icon={
            <BsPersonCircle
              className="header__nav__item__link__icon"
              size={'20px'}
            />
          }
          text={'Home'}
        />
        <NavItem
          icon={
            <BsFillGearFill
              className="header__nav__item__link__icon"
              size={'20px'}
            />
          }
          text={'Home'}
        />
        <NavItem
          icon={
            <IoMail
              className="header__nav__item__link__icon"
              size={'20px'}
            />
          }
          text={'Home'}
        />
      </ul>
    </nav>
  )
}

export { Nav }
