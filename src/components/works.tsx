import { motion } from "framer-motion";
import { workData } from "../data/data";

const Works = () => {
    return (
        <section className="bg-background5 bg-center  w-full h-full flex flex-col py-[50px]" id="work">
            <div className="flex items-center w-full justify-center py-[50px]">
                <motion.h1
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1 }}
                    transition={{type: "tween", duration: 0.5}}
                    className="text-[2rem] font-bold whitespace-nowrap">My Work
                </motion.h1>
            </div>
            <div className="w-full flex gap-[20px] flex-wrap justify-center md:px-[50px]">
                {workData.map((data) => {
                    return (
                        <motion.article
                            initial={{opacity: 0}}
                            whileInView={{ opacity: 1 }}
                            transition={{ type: "tween", duration: 0.5 }}
                            
                            className="light bg-primaryDark"
                            key={data.id}>

                            <div className="bg-secondary w-full md:w-[400px] min-w-[250px] h-[200px]">
                                <img
                                    className="w-full h-full cursor-pointer"
                                    src ={data.img}
                                    alt={data.title}
                                />
                            </div>
                            <div className="w-full md:w-[400px] min-w-[250px] p-[20px] md:p-[10px]">
                                <p className="whitespace-wrap w-full underline text-white font-bold">{data.title}</p>
                                <p className="whitespace-wrap h-[150px] w-full text-white">{ data.disc }</p>
                            </div>
                        </motion.article>
                    )
                })}

            </div>
        </section>
    )
}

export default Works;