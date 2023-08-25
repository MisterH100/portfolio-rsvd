import { motion } from "framer-motion";
import { useState } from "react";

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
    if (scrolled > 100) {
      setisScrolled(true)
    }
    else if (scrolled < 100){
      setisScrolled(false)
    }
  })
    return (
      
      <header className={isScrolled?"bg-primaryDark sticky top-0 z-[100] w-full h-[120px] flex flex-col lg:flex-row justify-center overflow-hidden lg:px-[80px] lg:justify-between items-center": "sticky top-0 z-[100] w-full h-[120px] flex flex-col lg:flex-row justify-center overflow-hidden lg:px-[80px] lg:justify-between items-center"}>
        <h1 className="text-[3rem] text-secondary font-light cursor-pointer"><a href="/">handsome.<span className="font-extrabold">dev</span></a></h1>
        <nav className="w-full px-[20px] lg:px-[10px] flex justify-center lg:justify-end">
          <ul className="flex gap-[20px] lg:gap-[30px] font-normal text-[1.5rem] lg:text-[2rem]">
            <motion.li whileHover="hover" whileTap="tap" variants={varients} className="cursor-pointer"><a href="#home">Home</a>
            </motion.li>

            <motion.li whileHover="hover" whileTap="tap" variants={varients} className="cursor-pointer"><a href="#work">Work</a>
            </motion.li>

            <motion.li whileHover="hover" whileTap="tap" variants={varients} className="cursor-pointer"><a href="#contact">Contact</a>
            </motion.li>

            <motion.li whileHover="hover" whileTap="tap" variants={varients} className="cursor-pointer"><a href="#contact">Blog</a>
            </motion.li>

          </ul>
        </nav>
      </header>

    )
}
  
export default Header;