import { useState } from 'react';
import { Cursor } from './components/Cursor';
import { Footer } from './components/Footer';
import { Header } from './components/header';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Home } from './components/sections/Home';
import { Portfolio } from './components/sections/Portfolio';

const RootLayout = ()=>{
    const [position, setPosition] = useState({x:0,y:0});
    const HandleMouseMove = (e: any)=>{
      setPosition({x:e.clientX,y:e.clientY});
    }
    window.addEventListener("mousemove",(e)=>{
        HandleMouseMove(e)
    });
    return(
        <>
            <Cursor
            x={position.x} 
            y={position.y}
            />
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