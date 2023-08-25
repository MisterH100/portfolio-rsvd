import { motion } from "framer-motion";
import {useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const varients = {
    hover: {
      y: -2,
    },
    tap: {
      y: 2
    }
  }

  window.addEventListener("scroll", () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50) {
      setisScrolled(true)
    }
    else if (scrolled < 50){
      setisScrolled(false)
    }
  })
    return (
      
      <header className={isScrolled?"bg-primaryDark sticky top-0 z-[100] w-full h-[120px] flex flex-col lg:flex-row justify-center overflow-hidden lg:px-[80px] lg:justify-between items-center": "sticky top-0 z-[100] w-full h-[120px] flex flex-col lg:flex-row justify-center overflow-hidden lg:px-[80px] lg:justify-between items-center"}>
        <motion.h1
          initial={{opacity: 0}}
          whileInView={{ opacity: 1, x:[200, 200, 150, 100, 50, 0] }}
          transition={{ type: "spring", duration: 7}}
          viewport={{ once: true }}
          className="text-[3rem] text-secondary font-light cursor-pointer"><a href="/">handsome.<span className="font-extrabold">dev</span></a>
        </motion.h1>

        <motion.nav
          initial={{opacity: 0}}
          whileInView={{ opacity: 1, x:[-200, 0] }}
          transition={{ type: "spring", delay: 2 }}
          viewport={{ once: true }}
          className="w-full px-[20px] lg:px-[10px] flex justify-center lg:justify-end">
          <ul className="flex gap-[20px] lg:gap-[30px] font-normal text-[1.5rem] lg:text-[2rem]">

            <motion.li
              whileHover="hover"
              whileTap="tap"
              variants={varients}>
              <a href="#home">Home</a>
            </motion.li>

            <motion.li
              whileHover="hover"
              whileTap="tap"
              variants={varients} c
              lassName="cursor-pointer">
              <a href="#work">Work</a>
            </motion.li>

            <motion.li
              whileHover="hover"
              whileTap="tap"
              variants={varients}
              className="cursor-pointer">
              <a href="#contact">Contact</a>
            </motion.li>

            <Link to={"/blog"}>
              <motion.li
                whileHover="hover"
                whileTap="tap"
                variants={varients}
                className="cursor-pointer">
                Blog
              </motion.li>
            </Link>

          </ul>
        </motion.nav>

      </header>

    )
}
  
export default Header;