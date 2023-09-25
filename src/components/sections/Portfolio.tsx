import { Link } from "react-router-dom";
import {skillData}  from "../../data/data";
import { workData } from "../../data/data";
import arrowup from '../../assets/arrowup.svg';
import { ISkill } from "../../interfaces/Interfaces";
import { IWork } from "../../interfaces/Interfaces";
import { motion } from "framer-motion";
import { varients } from "../../animations/AnimationVarients";

export const Portfolio =()=>{
    return(
        <section id="portfolio" className="w-full h-full flex flex-wrap justify-center md:justify-evenly gap-4 bg-skills bg-center bg-contain bg-no-repeat px-1 sm:px-10 md:px-20 pt-1 sm:pt-10 md:pt-40">
            <article className="w-full md:w-96 p-4 bg-gray-400 rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <div className="h-20 border-b border-gray-10 overflow-hidden">
                    <motion.h1
                        variants={varients}
                        custom={50}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ type: "tween", duration: 1}} 
                        viewport={{once:true}}
                        className="w-full text-center text-4xl text-white font-medium">Portfolio
                    </motion.h1>
                </div>
                <div className="h-20 pt-2 overflow-hidden">
                    <motion.h2
                        variants={varients}
                        custom={50}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ type: "tween", duration: 1, delay:0.5}} 
                        viewport={{once:true}}
                        className="w-full text-2xl text-white font-medium">Skills
                    </motion.h2>
                </div>
                <ul>
                    {skillData.map((skill: ISkill) => 
                        <motion.li
                            variants={varients}
                            custom={50}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ type: "tween", duration: 1, delay:0.2 * skill.id}} 
                            viewport={{once:true}}
                            className="w-full h-10 font-medium flex items-center justify-between border-b border-gray-100 last:border-none text-white"
                            key={skill.id}>
                            {skill.title}
                        </motion.li> 
                    )}
                </ul>
            </article>
            <article className="w-full md:w-[500px] p-4 bg-gray-400 rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <h1 className="w-full text-center h-20 text-4xl text-white font-medium  border-b border-gray-100"></h1>
                <div className="h-20 pt-2 overflow-hidden">
                    <motion.h2
                        variants={varients}
                        custom={50}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ type: "tween", duration: 1, delay:0.5}} 
                        viewport={{once:true}}
                        className="w-full text-2xl text-white font-medium">Projects
                    </motion.h2>
                </div>
                <ul>
                    {workData.map((work: IWork) =>
                        <motion.li
                            variants={varients}
                            custom={50}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ type: "tween", duration: 1, delay:0.2 * work.id}} 
                            viewport={{once:true}}
                            className="relative w-full h-20 flex justify-between gap-2 rounded-sm border border-gray-400 mb-10 last:mb-0 text-white"
                            key={work.id}>
                            <Link
                                to={work.link}
                                target="_blank"
                                className="absolute flex justify-end items-center w-full h-full top-0 left-0 opacity-0 hover:opacity-100">
                                <img 
                                    className="h-full w-[60px] px-4 bg-orange-500 transition-opacity duration-100 object-fill shadow-[-30px_0_10px__rgba(0,0,0,0.3)]"
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
                        </motion.li>
                    )}
                </ul>
            </article>
        </section>
    )
}