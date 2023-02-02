import { Nav } from '../Nav/Nav'

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          className="header__img"
          src={'/img/white-logo-transparent.png'}
          alt="Facucarrion Dev"
        />
        <h2 className="header__title">
          Facu<span className="header__title--decorated">.dev</span>
        </h2>
      </div>
      <Nav />
    </header>
  )
}

export { Header }
