import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Skills } from './pages/Skills/Skills'
import { Footer } from './components/Footer/Footer'
import { Works } from './pages/Works/Works'
import { LangProvider } from './context/LangContext'

const App = () => (
  <LangProvider>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Works />
    </main>
    <Footer />
  </LangProvider>
)

export { App }
