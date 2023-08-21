import avatar from '../assets/avatar.png'
import { useState } from 'react';
import axios from 'axios';

interface IModal{
    modalHeading: string,
    modalMessage: string,
    modalAction: string,
    modalStatus(arg: boolean) : any 

}

const Modal = ({ modalHeading,modalMessage,modalAction,modalStatus}:IModal) =>{
    return (
        <article className="absolute backdrop-blur-sm w-full h-full top-0 text-black flex justify-center items-center">
            <div className=" bg-secondary w-[50%] h-[200px] flex flex-col justify-center items-center shadow-lg">
                <h1 className="text-red text-[2rem]">{modalHeading}</h1>
                <p className="text-black text-[1rem]">{modalMessage}</p>
                <button
                    onClick={() =>modalStatus(false)}
                    className="bg-primary hover:bg-primaryLight transition ease-in-out duration-300 w-[100px] h-[50px] my-10 text-secondary text-center">
                    {modalAction}
                </button>
            </div>
        </article>
    )
}


const Contact = () => {
    const [status, setStatus] = useState<boolean>();
    const [loading, setLoading] = useState<boolean>();
    const [modalText, setModalText] = useState("");
    const [heading, setHeading] = useState("");
    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const HanleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        axios.post("http://localhost:8000/api/emails", {
            name: name,
            lastName: lastName,
            email: email,
            message: message

        })
        .then(function (response) {
            console.log(response);
            setTimeout(() => {
                setStatus(true);
                setLoading(false);
                setHeading("submitted");
                setModalText("form submitted, thank you");
            }, 3000);
        })
        .catch(function (error) {
            console.log(error);
            setTimeout(() => {
                setStatus(true);
                setLoading(false);
                setHeading("Error");
                setModalText("form failed to submit");
            }, 3000);
        });

    }

    return (
        <section className="bg-background bg-cover bg-center bg-no-repeat w-full h-full relative py-[100px]" id="contact">
            <div className="flex items-center px-[10%] md:px-[20%] py-[100px]">
                <h1 className="text-[2rem] font-bold whitespace-nowrap">Contact Me</h1>
            </div>
            <form onSubmit={HanleSubmit} className="flex flex-col gap-[20px] px-[10%] pb-[50px]">
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
                    className="bg-primaryLight w-[200px] h-[50px] text-secondary text-center rounded cursor-pointer"
                    type="submit"
                    disabled = {loading}
                    value={loading? "sending...": "submit"}
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

            {status ?
                <Modal
                    modalHeading={heading}
                    modalMessage={modalText}
                    modalAction="close" modalStatus={setStatus}
                /> : ""};

        </section>
    )
}

export default Contact;