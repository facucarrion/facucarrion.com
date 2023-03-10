import { Nav } from '../Nav/Nav'
import { MdClose, MdMenu } from 'react-icons/md'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const verifyClass = (actual, icon) => {
    if (actual) return icon === 'close' ? 'open-toggle' : 'hidden-toggle'
    else return icon === 'close' ? 'hidden-toggle' : 'open-toggle'
  }

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='header'>
      <a
        href='#top'
        className='header__wrapper'
      >
        <img
          className='header__img'
          src='/img/facucarriondev.png'
          alt='Facucarrion Dev'
        />
        <h2 className='header__title'>
          Facu<span className='header__title--decorated'>.dev</span>
        </h2>
      </a>
      <Nav
        isMenuOpen={isMenuOpen}
        handleClick={handleClick}
      />
      <MdClose
        className={
          'header__responsive__icon ' + verifyClass(isMenuOpen, 'close')
        }
        color='#ffe134'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        cursor='pointer'
        size='28px'
      />
      <MdMenu
        className={
          'header__responsive__icon ' + verifyClass(isMenuOpen, 'open')
        }
        color='#ffe134'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        cursor='pointer'
        size='28px'
      />
    </header>
  )
}

export { Header }
