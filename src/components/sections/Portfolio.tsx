import {skillData}  from "../../data/data";
import { ISkill } from "../../interfaces/Interfaces";
import { motion } from "framer-motion";
import { varients } from "../../animations/AnimationVarients";
import {ImageCarousel}  from "../Carousel";




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
                <ul className="flex flex-wrap gap-4">
                    {skillData.map((skill: ISkill) => 
                        <motion.li
                            variants={varients}
                            custom={50}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{y:[0,-5,0,-5,0],transition:{delay:0}}}
                            transition={{ type: "tween", duration: 0.5, delay:0.2 * skill.id}} 
                            viewport={{once:true}}
                            className="min-w-[60px] w-fit h-10 p-2 font-medium flex items-center justify-center border border-gray-100 text-white rounded-2xl bg-orange-500 shadow-lg cursor-pointer"
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
                <ImageCarousel/>
            </article>
        </section>
    )
}

