import avatar from '../assets/avatar.png';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <motion.article 
                initial={{opacity: 0, scale: 0}}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "tween", duration: 0.5 }}
                className="light bg-primaryDark w-[90%] md:w-[50%] mx-auto mt-[150px]">
                <div className="flex justify-between itwms-center">
                    <img
                        className="ml-[10px]"
                        src={avatar}
                        alt="avatar image"
                        width={100}
                        height={100}
                    />

                    <button className="bg-primary hover:bg-primaryLight transition ease-in-out duration-300 w-[100px] h-[50px] absolute text-secondary text-center">
                        My Blog
                    </button>
                </div>
                <div className="bg-secondary p-[20px] w-full">
                    <h1 className="text-black text-[2rem]">Care to check out my blog</h1>
                    <p className="text-black text-[1rem] w-[400px] whitespace-wrap w-full ">!!Blog comming soon.., Where i discuss why is UI important, how does a website benefit from having a good ui, how it creates a trust between you and your users, find out more about ui design as i dig deep into it</p>
                </div>
                <h1>Blog comming soon...</h1>
                <Link to={"/"}>Click here to go back to main page</Link>

            </motion.article>
    )
}

export default Blog;