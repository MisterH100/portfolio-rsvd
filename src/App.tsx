import { Footer } from './components/Footer';
import { Header } from './components/header';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Home } from './components/sections/Home';
import { Portfolio } from './components/sections/Portfolio';



function App() {

  return (
    <main className="relative font-default">
      <Header/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
