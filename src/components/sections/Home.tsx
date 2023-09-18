import { socialsData } from "../../data/data"
import { Link } from "react-router-dom";
import { Button } from "../Button";




export const Home =()=>{
    return(
        <section id="home" className="relative w-full h-screen bg-home bg-center bg-cover px-10 md:px-20">
            <article className="w-full md:w-2/4 flex justify-center md:justify-start pt-16 md:pt-40">
                <div className="text-center md:text-left">
                    <h1 className="text-primary text-sm sm:text-4xl uppercase">Handsome</h1>
                    <h2 className="text-primary text-4xl sm:text-7xl font-extrabold uppercase">Nyathi</h2>
                    <p className="text-primary text-sm sm:text-2xl font-thin sm:tracking-[0.5rem]">Web Developer</p>
                </div>
            </article>
            <div className="w-full md:w-2/4 flex justify-center md:justify-start py-10">
                <Button text="Download" />
            </div>
            <div className="w-full md:w-2/4 flex items-center flex-col md:items-start pt-1 md:pt-28 gap-2">
                <h3 className="text-primary hidden sm:block">follow:</h3>
                <ul className="flex items-center sm:py-2 gap-10">
                    {socialsData.map(social=>
                        <li key={social.id} className="active:scale-90"><Link to={social.link} target="_blank"><img src={social.logo}/></Link></li>
                    )}
                </ul>
            </div>
        </section>
    )
}