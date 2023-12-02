import { socialsData } from "../../data/data"
import { Link } from "react-router-dom";
import HandsomeCv from '../../assets/HandsomeNyathiCv.pdf';
import { motion } from "framer-motion";
import { varients } from "../../animations/AnimationVarients";



export const Home =()=>{

    return(
        <section id="home" className="relative flex flex-col w-full h-screen bg-home bg-center bg-cover px-10 md:px-20">
            <article className="w-full flex flex-col items-start md:items-end">
                <div className="w-full md:w-[400px] p-4 mt-10 md:mt-40 bg-gray-400 rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">

                    <div className=" h-20 border-b border-gray-100 overflow-hidden">
                        <motion.h1
                            variants={varients}
                            custom={50}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ type: "tween", duration: 1}} 
                            viewport={{once:true}}
                            className="w-full text-center text-4xl text-white font-medium ">Hello
                        </motion.h1>
                    </div>

                    <div className="text-center pt-4 overflow-hidden">
                        <motion.h1 
                            variants={varients}
                            custom={50}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ type: "tween", duration: 1, delay: 0.5}} 
                            viewport={{once:true}}
                            className="text-primary text-sm sm:text-4xl uppercase">Handsome
                        </motion.h1>

                        <motion.h2
                            variants={varients}
                            custom={50}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ type: "tween", duration: 1, delay:0.6}} 
                            viewport={{once:true}}
                            className="text-primary text-4xl sm:text-7xl font-extrabold uppercase">Nyathi
                        </motion.h2>

                        <motion.p 
                            variants={varients}
                            custom={20}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ type: "tween", duration: 1, delay:0.7}} 
                            viewport={{once:true}}
                            className="text-primary text-sm sm:text-lg font-thin">Meet your next creative Web Developer
                        </motion.p>
                    </div>
                </div>
                <div className="w-full md:w-[400px] flex justify-center py-10 px-4">
                    <a 
                        href={HandsomeCv}
                        download='Handsome-Nyathi-CV'
                        className="w-40 border border-primary rounded-3xl p-2 mx-auto text-primary text-center font-bold hover:bg-orange-500 active:scale-90 transition-all">Download CV
                    </a>
                </div>
                <div className="absolute w-full h-20 top-[80%] left-0  md:px-10 flex flex-col items-center md:items-start">
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