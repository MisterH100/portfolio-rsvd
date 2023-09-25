import { motion } from "framer-motion";
import { varients} from "../../animations/AnimationVarients";
import { Link } from "react-router-dom";

export const About =()=>{
    return(
        <section id="about" className="flex flex-wrap flex-col md:flex-row items-center md:justify-evenly w-full h-full min-h-screen bg-about bg-center bg-cover px-1 sm:px-10 md:px-20 pt-10 py-40 md:py-0">
            <article className="w-full md:w-[500px] p-4 bg-gray-400 rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <div className="h-20 border-b border-gray-100 overflow-hidden">
                    <motion.h1 
                        variants={varients}
                        custom={50}
                        initial="hidden"
                        whileInView="visible"
                        transition={{type: "tween", duration: 1}}
                        viewport={{once:true}}
                        className="w-full text-center text-4xl text-white font-medium ">About
                    </motion.h1>
                </div>
                <div>
                    <motion.p 
                        variants={varients}
                        custom={50}
                        initial="hidden"
                        whileInView="visible"
                        transition={{type: "tween", duration: 1, delay: 0.5}}
                        viewport={{once:true}}
                        className="text-base md:text-lg tracking-wide pt-4 text-white">
                        Greetings! I'm <span className="font-black">Handsome Nyathi</span>, a skilled web developer with a keen focus on UI/UX 
                        design exploration.My work revolves around the dynamic <span className="underline">MERN</span> tech stack, enabling me 
                        to craft immersive digital experiences.Backed by years of web development expertise,I'm committed to delivering polished 
                        solutions.My boundlesse enthusiasm for technology drives my continuous learning and innovation.
                        <span className="font-black">Let's collaborate and bring your digital visions to life!</span>
                    </motion.p>
                </div>
            </article>
            <article className="w-full md:w-[500px] mt-2">
                <div className="w-full md:px-4">
                    <h2 className="mb-2 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl">Collab with me on my blog app</h2>
                    <p className="mb-2 text-md tracking-tight leading-tight text-center text-white">I have a blog that revolves around learning about web development, UI/UX designing and everything under the umbrella of creativity and tech click on the link and lets share ideas</p>
                    <Link 
                        to="/collab"
                        className="w-fit h-fit p-4 mx-auto flex justify-center items-center border text-white border-white rounded-full  bg-orange-500 hover:bg-white hover:text-black active:scale-90 transition-all">
                        Lets Collab!                
                    </Link>
                </div>
            </article>
        </section>
    )
}