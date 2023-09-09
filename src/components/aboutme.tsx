import { motion } from "framer-motion";
import headshot from "../assets/headshot.png";
const AboutMe = () => {
    return (
        <section className="relative light w-full h-full py-[50px] flex flex-col justify-center items-center">
            <div className="none md:block absolute -z-[10] w-full h-full">
                <img
                    className="w-full h-full object-cover"
                    src={headshot}
                    alt="headshotImage"
                />
            </div>
            <div className="flex items-center w-full justify-center">
                <motion.h1
                    initial={{opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{type: "tween", duration: 0.5}}
                    className="text-[1.5rem] font-bold whitespace-nowrap">About me
                </motion.h1>
            </div>
            <div className="w-full md:flex md:flex-col md:items-end pt-[40px] px-[10px] md:px-[100px]">
                <motion.p
                    initial={{opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{type: "tween", duration: 0.5}}
                    className="whitespace-wrap text-[1.2rem] text-secondary w-full md:w-[55%]">
                    Greetings! I'm <span className="font-black">Handsome Nyathi</span>, a skilled web developer with a keen focus on UI/UX 
                    design exploration.My work revolves around the dynamic <span className="underline">MERN</span> tech stack, enabling me 
                    to craft immersive digital experiences.Backed by years of web development expertise,I'm committed to delivering polished 
                    solutions.My boundlesse enthusiasm for technology drives my continuous learning and innovation.
                    <span className="font-black">Let's collaborate and bring your digital visions to life!</span>.
                </motion.p>
                <ul className="text-[0.8rem] text-primaryLight pt-[40px] underline w-full md:w-[55%]">Glossary:
                    <li>MERN - MongoDb, Express, React, Nodejs</li>
                </ul>
            </div>
        </section>
    )
}
export default AboutMe;