import { motion } from "framer-motion"
import tap from '../assets/tap.wav';
import github from '../assets/github.svg';
import linkedIn from '../assets/linkedIn.svg';
import twitter from '../assets/twitter.svg';



const Landing = () => {
  const tapSound = new Audio(tap);

  const playSound = () => {
    tapSound.play().then();
  }
    return(
      <section className="bg-background4 bg-center bg-cover bg-opacity-0 w-full h-screen flex flex-col md:flex-row py-[50px]" id="home">
  
        <div className="w-full md:w-[60%] h-full flex flex-col py-[40px] items-start justify-center px-[50px] lg:px-[100px]">
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
        </div>

        <div className="w-full md:w-[40%] h-full flex flex-col py-[40px] gap-[40px] items-start justify-center px-[50px] lg:px-[100px]">
          <motion.div
            initial={{opacity: 0}}
            whileInView={{ opacity: 1, y:[-100, 0] }}
            transition={{ type: "spring", delay: 2.3}}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-[40px] whitespace-nowrap">

            <h3 className="hidden lg:block text-[1rem]"> follow me</h3>

            <motion.div
              whileInView={{height: [0, 50]}}
              transition={{ type: "spring", delay: 3 }}
              viewport={{ once: true }}
              className="w-[1px] h-[50px] bg-secondary">
            </motion.div>

              <motion.a
                whileHover={{ scale: 1.5 }}
                whileTap={{rotate: [0,-45, 0, 45,0]}}
                href="https://github.com/misterh100" target="_blank"
                onClick={playSound}
              >
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
                href="https://linkedin.com/in/handsome-nyathi-9a3116275" target="_blank"
                onClick={playSound}
              >      
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
                href="https://twitter.com/handsome_nyathi" target="_blank"
                onClick={playSound}
              >
                <img
                  src={twitter}
                  alt="twitter"
                  width={20}
                  height={20}
                />
                  
              </motion.a>
               
              <motion.div
              whileInView={{height: [0, 50]}}
              transition={{ type: "spring", delay: 3 }}
              viewport={{ once: true }}
              className="w-[1px] h-[50px] bg-secondary">
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
}
  
export default Landing;