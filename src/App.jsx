import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { AboutMe } from './pages/AboutMe/AboutMe'
import { Skills } from './pages/Skills/Skills'
import { Footer } from './components/Footer/Footer'

const App = () => (
  <>
    <Header />
    <main className="main">
      <Home />
      <AboutMe />
      <Skills />
    </main>
    <Footer />
  </>
)

export { App }
