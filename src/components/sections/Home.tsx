import { socialsData } from "../../data/data"
import { Link } from "react-router-dom";
import { Button } from "../Button";




export const Home =()=>{
    return(
        <section id="home" className="relative file:flex flex-col w-full h-screen bg-home bg-center bg-cover px-10 md:px-20">
            <article className="w-full flex flex-col items-start md:items-end">
                <div className="w-full md:w-2/5 p-4 mt-10 md:mt-40 bg-gray-400 rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                    <h1 className="w-full text-center h-20 text-4xl text-white font-medium  border-b border-gray-100">Hello</h1>
                    <div className="text-center pt-4">
                        <h1 className="text-primary text-sm sm:text-4xl uppercase">Handsome</h1>
                        <h2 className="text-primary text-4xl sm:text-7xl font-extrabold uppercase">Nyathi</h2>
                        <p className="text-primary text-sm sm:text-2xl font-thin sm:tracking-[0.5rem]">Web Developer</p>
                    </div>
                </div>
                <div className="w-full md:w-2/5 flex justify-center py-10">
                    <Button text="Download" />
                </div>
                <div className="absolute w-full top-[80%] left-0 md:px-10 flex flex-col items-center md:items-start">
                    <h3 className="text-primary hidden sm:block">follow:</h3>
                    <ul className="flex items-center sm:py-2 gap-10">
                        {socialsData.map(social=>
                            <li key={social.id} className="active:scale-90"><Link to={social.link} target="_blank"><img src={social.logo}/></Link></li>
                        )}
                    </ul>
                </div>
            </article>
        </section>
    )
}