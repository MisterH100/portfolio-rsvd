import avatar from '../assets/avatar.png';
import { motion } from "framer-motion";

const Blog = () => {
    return (
        <motion.article 
                initial={{opacity: 0, scale: 0}}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "tween", duration: 0.5 }}
                className="light bg-primaryDark w-[50%] mx-auto mt-[150px]">

                <img
                    className="ml-[10px]"
                    src={avatar}
                    alt="avatar image"
                    width={100}
                    height={100}
                />
                <div className="bg-secondary p-[20px]">
                    <h1 className="text-black text-[2rem]">Care to check out my blog</h1>
                    <p className="text-black text-[1rem] w-[400px] whitespace-wrap">!!Blog comming soon.., Where i discuss why is UI important, how does a website benefit from having a good ui, how it creates a trust between you and your users, find out more about ui design as i dig deep into it</p>
                </div>
                <button className="bg-primary hover:bg-primaryLight transition ease-in-out duration-300 w-[100px] h-[50px] absolute top-[50px] right-[50px] text-secondary text-center">
                    My Blog
                </button>
                <h1>Blog comming soon...</h1>
            </motion.article>
    )
}

export default Blog;