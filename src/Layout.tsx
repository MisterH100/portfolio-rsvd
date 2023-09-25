import { Footer } from './components/Footer';
import { Header } from './components/header';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Home } from './components/sections/Home';
import { Portfolio } from './components/sections/Portfolio';

const RootLayout = ()=>{
    return(
        <>
            <Header/>
            <Home/>
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default RootLayout;