import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { Footer } from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
