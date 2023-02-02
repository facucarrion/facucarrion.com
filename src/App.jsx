import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { Footer } from './components/Footer/Footer'
import { AboutMe } from './pages/AboutMe/AboutMe'

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <AboutMe />
      </main>
      <Footer />
    </>
  )
}

export default App
