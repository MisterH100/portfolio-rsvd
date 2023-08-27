import avatar from '../assets/avatar.png';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section className="flex justify-center items-center w-full h-screen">
            <motion.article 
                initial={{opacity: 0, scale: 0}}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "tween", duration: 0.5 }}
                className="light bg-primaryDark w-[90%] md:w-[50%] ">
                <div className="flex justify-between items-center">
                    <img
                        className="ml-[10px]"
                        src={avatar}
                        alt="avatar image"
                        width={100}
                        height={100}
                    />
                    <Link to={"/"}>
                        <button className="bg-primary hover:bg-primaryLight transition ease-in-out duration-300 w-[200px] h-[50px] text-secondary text-center mr-[50px]">
                            Back to main page
                        </button>
                    </Link>
                </div>
                <div className="bg-secondary p-[20px] w-full">
                    <h1 className="text-black text-[2rem]">Care to check out my blog</h1>
                    <p className="text-black text-[1rem] w-[400px] whitespace-wrap w-full ">!!Blog comming soon.., Where i discuss why is UI important, how does a website benefit from having a good ui, how it creates a trust between you and your users, find out more about ui design as i dig deep into it</p>
                </div>
            </motion.article>
        </section>
    )
}

export default Blog;