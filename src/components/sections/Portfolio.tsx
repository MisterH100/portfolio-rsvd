import { Link } from "react-router-dom";
import {skillData}  from "../../data/data";
import { workData } from "../../data/data";
import arrowup from '../../assets/arrowup.svg';

interface ISkill{
    id: number;
    title: string;
    exp: number;
    disc?: string;
    img?: string;
}
interface IWork{
    id: number;
    title: string;
    disc: string;
    img?: string;
}
export const Portfolio =()=>{
    return(
        <section id="portfolio" className="w-full h-full flex flex-wrap justify-center md:justify-between gap-4 bg-skills bg-center bg-contain bg-no-repeat px-1 sm:px-10 md:px-20 pt-1 sm:pt-10 md:pt-40">
            <article className="w-full md:w-[500px] p-4 bg-gray-400 rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <h1 className="w-full text-center h-20 text-4xl text-white font-medium  border-b border-gray-100">Portfolio</h1>
                <h2 className="w-full h-20 text-2xl pt-2 text-white font-medium">Skills</h2>
                <ul>
                    {skillData.map((skill: ISkill) => 
                        <li 
                            className="w-full h-10 font-medium flex items-center justify-between border-b border-gray-100 last:border-none"
                            key={skill.id}>
                            {skill.title}
                            <progress 
                                defaultValue={skill.exp}
                                value={skill.exp}
                                max={100}
                                className="w-2/3 h-1 bg-white text-orange-500"
                            />
                        </li> 
                    )}
                </ul>
            </article>
            <article className="w-full md:w-[800px] p-4 bg-gray-400 rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <h1 className="w-full text-center h-20 text-4xl text-white font-medium  border-b border-gray-100"></h1>
                <h2 className="w-full h-20 text-2xl pt-2 text-white font-medium">Projects</h2>
                <ul>
                    {workData.map((work: IWork) =>
                        <li
                           
                            className="relative w-full h-20 flex justify-between gap-2 rounded-sm border border-gray-400 mb-10 last:mb-0"
                            key={work.id}>
                            <Link
                                to={'https://www.google.com'}
                                target="_blank"
                                className="absolute flex justify-end items-center w-full h-full top-0 left-0 opacity-0 hover:opacity-100">
                                <img 
                                    className="h-full w-[60px] px-4 bg-orange-500 transition-opacity duration-100 object-fill"
                                    src={arrowup}
                                    alt={`Link to ${work.title}`}
                                />
                            </Link>
                            <img
                                className="object-fill"
                                src={work.img}
                                width={80}
                                height={50}
                            />
                            <span className="w-full truncate">
                                <h3>{work.title}</h3>
                                <p className="w-full truncate">{work.disc}</p>
                            </span>
                        </li>
                    )}
                </ul>
            </article>
        </section>
    )
}