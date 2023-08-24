import { useState } from 'react';
import loadingAnimation from '../assets/loading.gif';
import Header from '../components/header';
import Landing from '../components/landing';
import Works from '../components/works';
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
    window.addEventListener("load", () => {
        setTimeout(() => {
            setOnload(false);
        }, 2000);
    })
 
    
    return (
        <section className="relative">
            {onLoad? <Loading/>: ""}
            <Header />
            <Landing />
            <Works />
            <Contact/>
            <Footer />
        </section>
    )
}

export default Layout;