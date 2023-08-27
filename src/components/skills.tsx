import { motion } from "framer-motion";
import { skillData } from '../data/data';

const Skills = () => {
    return (
        <section className="light w-full h-full py-[50px] bg-primaryDark flex flex-col justify-center items-center">
            <div className="flex items-center w-full justify-center">
                <motion.h1
                    initial={{opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{type: "tween", duration: 0.5}}
                    className="text-[1.5rem] font-bold whitespace-nowrap">Skills
                </motion.h1>
            </div>
            <div
                className="flex flex-wrap gap-[10px] p-[10px] w-[50%] h-[50%] justify-center md:justify-start">
                {skillData.map((item) => {
                return (
                    <motion.li
                    initial={{opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{type: "tween", duration: 0.5}}
                    className="list-none cursor-pointer w-[100px] h-[50px] p-[10px] bg-primary text-center"
                    key={item.id}
                    title={item.title}
                    >
                    {item.title}
                    </motion.li>
                )
                })}
            </div>
            
        </section>
    )
}

export default Skills;