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
        <div className="absolute top-0 bg-black w-full h-full z-[99]">
            <img
                className="object-scale-down m-auto"
                src={loadingAnimation}
                alt="Loading..." 
            />
        </div>
    )
}

const Layout = () => {
    const [onLoad, setOnload] = useState(true);
    //const [playSounds, setPlaySounds] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setOnload(false);
        },3000);
    },[]);
    
    return (
        <section className="relative">
            {onLoad ?<Loading /> : null}
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