import avatar from '../assets/avatar.png'
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [succsess, setSuccess]= useState(false)
    const [color, setColor] = useState("#4D4242")
    const [text, setText] = useState("Submit");
    const [isDisabled, setIsDisabled] = useState(false)
    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const HanleSubmit = () => {
        axios.post("http://localhost:8000/api/emails", {
            name: name,
            lastName: lastName,
            email: email,
            message: message

        })
         .then(function (response) {
            console.log(response);
            setText("Sent");
            setColor("#00f");
            setIsDisabled(true);
            setSuccess(true);
        })
        .catch(function (error) {
            console.log(error);
            setText("uh oh error!!");
            setColor("#f00");
            setSuccess(false);
        });


    }

    return (
        <section className="bg-background bg-cover bg-center bg-no-repeat w-full h-full relative py-[100px]" id="contact">
            <div className="flex items-center px-[10%] md:px-[20%] py-[100px]">
                <h1 className="text-[2rem] font-bold whitespace-nowrap">Contact Me</h1>
            </div>
            <form action={ succsess?"/thankyou":"/error"} className="flex flex-col gap-[20px] px-[10%] pb-[50px]">
                <label
                    className="flex gap-[10px] items-center"
                    htmlFor="name">
                    <input
                        className="bg-secondary w-[200px] md:w-[400px] p-[6px] text-black"
                        type="text"
                        id="name"
                        placeholder="Name:"
                        maxLength={20}
                        required
                        onChange={(e)=> setName(e.target.value)}
                    />Name
                </label>

                <label
                    className="flex gap-[10px] items-center"
                    htmlFor="lastname">
                    <input
                        className="bg-secondary w-[200px] md:w-[400px] p-[6px] text-black"
                        type="text"
                        id="lastname"
                        placeholder="Last name:"
                        maxLength={20}
                        onChange={(e)=> setlastName(e.target.value)}
                    />Lastname
                </label>
                
                <label
                    className="flex gap-[10px] items-center"
                    htmlFor="email">
                    <input
                        className="bg-secondary w-[200px] md:w-[400px] p-[6px] text-black"
                        type="email"
                        id="email"
                        placeholder="email:"
                        required
                        onChange={(e)=> setEmail(e.target.value)}
                    />Email
                </label>
                <label
                    className="flex gap-[10px]">
                    <textarea
                        className="bg-secondary p-[6px] w-[200px] md:w-[400px] h-[100px] text-black resize-none"
                        maxLength={200}
                        onChange={(e)=> setMessage(e.target.value)}
                    />Message
                </label>
                <input
                    //bg-primaryLight
                    style={{backgroundColor: color}}
                    className="w-[200px] h-[50px] text-secondary text-center rounded cursor-pointer"
                    type="submit"
                    disabled = {isDisabled}
                    value={text}
                    onSubmit={HanleSubmit}
                />
            </form>

            <div className="bg-primaryDark w-[500px] absolute top-[300px] right-[10px] hidden lg:block -z-[10px]">

                <img
                    className="ml-[10px]"
                    src={avatar}
                    alt="avatar image"
                    width={100}
                    height={100}
                />
                <div className="bg-secondary p-[20px]">
                    <h1 className="text-black text-[2rem]">Care to check out my blog</h1>
                    <p className="text-black text-[1rem] w-[400px] whitespace-wrap">Why is UI important, how does a website benefit from having a good ui, how it creates a trust between you and your users, find out more about ui design as i dig deep into it</p>
                </div>
                <button className="bg-primary hover:bg-primaryLight transition ease-in-out duration-300 w-[100px] h-[50px] absolute top-[50px] right-[50px] text-secondary text-center">
                    My Blog
                </button>
 
            </div>
        </section>
    )
}

export default Contact;