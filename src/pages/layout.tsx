import { useState, useEffect } from 'react';
import loadingAnimation from '../assets/loading.gif';
import Header from '../components/header';
import Landing from '../components/landing';
import Skills from '../components/skills';
import Works from '../components/works';
import AboutMe from '../components/aboutme';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Loading = () => {
    return (
        <div className="absolute top-0 bg-black w-full h-full flex z-[99] justify-center pt-[30%] lg:pt-[20%] ">
            <img src={ loadingAnimation} alt="Loading..." className="w-[200px] h-[200px]"/>
        </div>
    )
}

const Layout = () => {
    const [onLoad, setOnload] = useState(true);
    /* const [cursor, setCursor] = useState({
        x: 0,
        y: 0
    })*/

    /*window.addEventListener("mousemove", (e) => {
        setCursor( {...cursor,x: e.clientX, y: e.clientY})
    })
    const styles = { 
        transform: `translate(${cursor.x}px, ${cursor.y}px)` 
    };*/

    useEffect(() => {
        setTimeout(() => {
            setOnload(false);
        }, 2000);
    },[]);
    
    return (
        <section className="relative">
            {onLoad ? <Loading /> : ""}
            {/*<div className="absolute w-[50px] h-[50px] rounded-[50%] bg-white" style={styles}>
            </div>*/}
            <Header />
            <Landing />
            <Skills/>
            <Works /> 
            <AboutMe/>
            <Contact/>
            <Footer />
        </section>
    )
}

export default Layout;