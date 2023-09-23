import { Footer } from './components/Footer';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Home } from './components/sections/Home';
import { Portfolio } from './components/sections/Portfolio';



function App() {

  return (
    <main className="relative font-default">
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
