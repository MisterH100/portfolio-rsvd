import { motion } from "framer-motion";
import { workData } from "../data/data";

const Works = () => {
    return (
        <section className="bg-background5 bg-center  w-full h-full flex flex-col" id="work">
            <div className="flex items-center w-full justify-center py-[50px]">
                <motion.h1
                    initial={{opacity: 0}}
                    whileInView={{ x: [-200, 0],opacity: 1 }}
                    transition={{type: "tween", duration: 0.5}}
                    className="text-[2rem] font-bold whitespace-nowrap">My Work
                </motion.h1>
            </div>
            <div className="flex gap-[20px] flex-wrap justify-center px-[50px] md:px-[50px]">
                {workData.map((data) => {
                    return (
                        <motion.article
                            initial={{opacity: 0, scale: 0}}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -3}}
                            transition={{ type: "tween", duration: 0.5 }}
                            className="light"
                            key={data.id}>

                            <div className="bg-secondary w-[400px] min-w-[250px] h-[200px]">
                                <img
                                    className="w-full h-full cursor-pointer"
                                    src ={data.img}
                                    alt={data.title}
                                />
                            </div>
                            <div className="w-[400px] min-w-[250px] p-[20px] md:p-[10px]">
                                <p className="text-secondary whitespace-wrap w-full underline text-white font-bold">{data.title}</p>
                                <p className="text-secondary whitespace-wrap h-[150px] w-full text-white">{ data.disc }</p>
                            </div>
                        </motion.article>
                    )
                })}

            </div>
        </section>
    )
}

export default Works;