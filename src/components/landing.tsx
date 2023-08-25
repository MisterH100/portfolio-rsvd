import { motion } from "framer-motion"
import github from '../assets/github.svg';
import linkedIn from '../assets/linkedIn.svg';
import twitter from '../assets/twitter.svg';
import envelope from '../assets/envelope.svg';
import { skillData } from '../data/data';

const Landing = () => {

    return(
      <section className="bg-background5 bg-center bg-opacity-0 w-full h-full flex" id="home">
        
        <div className="w-[20%] h-full opacity-0 sm:opacity-[6] flex flex-col justify-center items-center pt-[200px]">
          <motion.a
            initial={{opacity: 0}}
            whileInView={{ opacity: 1, y:[-100, 0] }}
            transition={{ type: "spring", delay: 2.3 }}
            viewport={{ once: true }}
            href="mailto:handsomenyathi1@gmail.com">
            <img
              className="opacity-0 lg:opacity-[6]"
              src={envelope}
              alt="envelope"
              width={50}
              height={50}
            />
            </motion.a>
          <motion.h3
            initial={{opacity: 0}}
            whileInView={{ opacity: 1, y:[-100, 0] }}
            transition={{ type: "spring", delay: 2.3 }}
            viewport={{ once: true }}
            className="rotate-90 lg:rotate-0 text-[0.8rem]"><a href="mailto:handsomenyathi1@gmail.com">handsomenyathi1@gmail.com</a></motion.h3>
        </div>
  
        <div className="w-[60%] h-full flex flex-col py-[40px] items-center gap-[40px] md:items-start md:justify-center lg:px-[40px]">
          <motion.h2
            initial={{opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ type: "spring", delay: 3 }}
            viewport={{ once: true }}
            className="text-[2rem]">hello, i am Handsome
          </motion.h2>

          <motion.h1
            initial={{opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ type: "spring", delay: 3}}
            viewport={{ once: true }}
            className="text-[2rem] md:text-[4rem]">using code to bring <span className="font-black">websites</span> to life.
          </motion.h1>
          
          <motion.div
            initial={{opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", delay: 3}}
            viewport={{ once: true }}
            className="flex flex-wrap gap-[10px] pt-[10px]">
            {skillData.map((item) => {
              return (
                <li
                  className="list-none underline cursor-pointer"
                  key={item.id}
                  title={item.title}
                >
                  {item.title}
                </li>
              )
            })}
          </motion.div>

        </div>
  
  
        <motion.div
          initial={{opacity: 0}}
          whileInView={{ opacity: 1, y:[-100, 0] }}
          transition={{ type: "spring", delay: 2.3}}
          viewport={{ once: true }}
          className="w-[20%] h-full flex flex-col items-center justify-center gap-[40px] whitespace-nowrap pt-[100px]">
          <h3 className="rotate-90"> follow me</h3>
          <motion.div
            whileInView={{height: [0, 50]}}
            transition={{ type: "spring", delay: 3 }}
            viewport={{ once: true }}
            className="w-[1px] h-[50px] bg-secondary">
  
          </motion.div>
            <motion.a
              whileHover={{ scale: 1.5 }}
              whileTap={{rotate: [0,-45, 0, 45,0]}}
              href="https://github.com/misterh100" target="_blank">
                <img
                    src={github}
                    alt="github"
                    width={20}
                    height={20}
                />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.5 }}
              whileTap={{rotate: [0,-45, 0, 45,0]}}
                href="https://linkedin.com/in/handsome-nyathi-9a3116275" target="_blank">      
                <img
                    src={linkedIn}
                    alt="linkedin"
                    width={20}
                    height={20}
                />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.5 }}
              whileTap={{rotate: [0,-45, 0, 45,0]}}
              href="https://twitter.com/handsome_nyathi" target="_blank">
                <img
                    src={twitter}
                    alt="twitter"
                    width={20}
                    height={20}
                />
                
            </motion.a>  
        </motion.div>
      </section>
    )
}
  
export default Landing;