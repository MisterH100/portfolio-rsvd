import { Layout } from './Layout';
import { Header } from './components/Header';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Home } from './components/sections/Home';
import { Portfolio } from './components/sections/Portfolio';



function App() {

  return (
    <main className="font-default">
      <Layout
        children={
          <>
          <Header/>
          <Home/>
          <About/>
          <Portfolio/>
          <Contact/>
          </>
        }
      />
    </main>
  )
}

export default App
