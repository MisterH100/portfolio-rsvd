import { Link } from "react-router-dom"
import { socialsData } from "../data/data"
import handsomeDevLogo from '../assets/handsomedevLogo.png';
export const Footer =()=>{
    return(
    <footer className="w-full h-[200px] flex items-center justify-center flex-wrap border-t">
        <aside className="w-full md:w-2/4 px-10 pt-10">
            <img
                src={handsomeDevLogo}
                alt="HandsomeDev Logo"
            />
            <p>Handsome dev.<br/>copyright 2023</p>
        </aside> 
        <nav className="w-full md:w-2/5 px-10 pt-10">
            <header className="text-2xl font-medium text-white">Social</header> 
            <ul className="h-10 mt-10 flex items-center gap-4">
                {socialsData.map(social=>
                    <li key={social.id} className="active:scale-90">
                        <Link to={social.link} target="_blank"><img src={social.logo}/>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    </footer>
    )
}