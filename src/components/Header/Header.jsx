import { Nav } from '../Nav/Nav'

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__img"
        src={'/img/white-logo-transparent.png'}
        alt="Facucarrion Dev"
      />
      <Nav />
    </header>
  )
}

export { Header }
