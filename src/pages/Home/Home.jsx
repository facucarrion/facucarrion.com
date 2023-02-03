import { SocialMedia } from '../../components/SocialMedia/SocialMedia'

const Home = () => (
  <section
    className="home"
    id="home"
  >
    <div className="home__container">
      <h1 className="home__title">
        Hi👋! I&#39;m <span className="home__title--decorated">Facundo Carrion</span>Frontend Developer
      </h1>
      <SocialMedia />
    </div>

    <img
      src={'/img/code-illustration.svg'}
      className="home__img"
    />
  </section>
)

export { Home }
