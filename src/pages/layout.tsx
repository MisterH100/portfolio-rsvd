
import Header from '../components/header';
import Landing from '../components/landing';
import Works from '../components/works';
import Contact from '../components/contact';
import Footer from '../components/footer';


const Layout = () => {
    return (
        <section>
            <Header />
            <Landing />
            <Works />
            <Contact/>
            <Footer />
        </section>
    )
}

export default Layout;