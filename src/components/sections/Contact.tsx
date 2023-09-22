import { useState } from "react";
import { Button } from "../Button"
import { motion } from "framer-motion";
import { alertVarients, varients } from "../../animations/AnimationVarients";
import axios from "axios";


export const Contact =()=>{
    const [loading, setLoading] = useState(false);
    const [formVerify, setFormVerify] = useState(true);
    const [failed, setFailed] = useState(false);
    const [isSent, setIsSent] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const HandleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }


    const HandleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!formData.name && !formData.email){
            setFormVerify(false)
        }
        else{
            setLoading(true);
            setFormVerify(true);
            axios.post("http://localhost:8000/api/emails", {
                name: formData.name,
                email: formData.email,
                message: formData.message
    
            })
            .then((response) =>{
                console.log("form data sent", response.status);
                setTimeout(()=>{
                    setLoading(false);
                    setFailed(false)
                    setIsSent(true)
                },3000);
            })
            .catch((error) =>{
                console.log(error);
                setTimeout(()=>{
                    setLoading(false);
                    setFailed(true);
                },3000);
            });
        }

    }

    return(
        <section id="contact" className="w-full h-full flex justify-center items-center bg-contact bg-center bg-cover md:bg-contain bg-no-repeat px-1 sm:px-10 md:px-20 pt-10 md:pt-40 py-40">
            <article className="w-full md:w-[500px] p-4 bg-gray-400 rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <div className="h-20 border-b border-gray-100">
                    <motion.h1 
                        variants={varients}
                        custom={50}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ type: "tween", duration: 1}} 
                        viewport={{once:true}}
                        className="w-full text-center text-4xl text-white font-medium ">Contact Me
                    </motion.h1>
                </div>
                <form className="text-base font-medium">
                    <label 
                        htmlFor="name"
                        className="block w-full h-20 text-white">
                        Name
                        <input 
                            type="text"
                            id="name"
                            name="name" 
                            placeholder={"Name"}
                            autoComplete="true"
                            required
                            onChange={HandleChange}
                            className="block w-full h-10 p-2 bg-white text-black outline-none border-2 border-white focus:border-orange-500"
                        />
                    </label>
                    <label 
                        htmlFor="email"
                        className="block w-full h-20 text-white">
                        Email
                        <input 
                            type="email"
                            id="email"
                            name="email" 
                            placeholder={"Email address"}
                            autoComplete="true"
                            required
                            onChange={HandleChange}
                            className="block w-full h-10 p-2 bg-white text-black outline-none border-2 border-white focus:border-orange-500"
                        />
                    </label>
                    <label 
                        htmlFor="message"
                        className="block w-full text-white">
                        Message
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            onChange={HandleChange}
                            className="block resize-none w-full p-2 bg-white text-black outline-none border-2 border-white focus:border-orange-500"
                            cols={30}
                            rows={5}
                        ></textarea>
                    </label>
                    <div className="w-full h-20 flex justify-center items-center">
                        <Button text={!loading? 'send':
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin fill-orange-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        } 
                        action={HandleSubmit}/>
                    </div>
                </form>
                {!formVerify?
                        <motion.div
                            variants={alertVarients}
                            initial="hidden"
                            whileInView="visible"
                            transition={{type:"tween", duration:0.5}}
                            className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-orange-500" role="alert">
                            <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span className="sr-only">Info</span>
                            <p>
                                <span className="font-medium">Alert!</span>  Please input your name or input valid email address.
                            </p>
                        </motion.div>:null
                }
                {failed?
                    <motion.div 
                        variants={alertVarients}
                        initial="hidden"
                        whileInView="visible"
                        transition={{type:"tween", duration:0.5}}
                        className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                        <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Error alert!</span>Form failed to submit, Please use my email: handsomenyathi1@gmail.com
                        </div>
                    </motion.div>:isSent?
                    <motion.div 
                        variants={alertVarients}
                        initial="hidden"
                        whileInView="visible"
                        transition={{type:"tween", duration:0.5}}
                        className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
                        <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Success alert!</span> Form submitted, Thank you.
                        </div>
                    </motion.div>:null
                }
            </article>
        </section>
    )
}