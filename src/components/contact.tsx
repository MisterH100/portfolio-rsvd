import avatar from '../assets/avatar.png'
import Modal from './modal';
import { useState } from 'react';
import axios from 'axios';



const Contact = () => {
    const [status, setStatus] = useState<boolean>();
    const [loading, setLoading] = useState<boolean>();
    const [modalText, setModalText] = useState("");
    const [heading, setHeading] = useState("");
    
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        message: "",
    });

    const HandleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const HanleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)

        axios.post("http://localhost:8000/api/emails", {
            name: formData.name,
            lastName: formData.lastName,
            email: formData.email,
            message: formData.message

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
        <section className="bg-background5 bg-center w-full h-full relative " id="contact">
            <div className="flex items-center px-[10%] md:px-[20%] py-[100px]">
                <h1 className="text-[2rem] font-bold whitespace-nowrap">Contact Me</h1>
            </div>
            <form onSubmit={HanleSubmit} className="flex flex-col gap-[20px] px-[10%] pb-[50px] items-center lg:items-start">
                <label
                    className="w-[200px] md:w-[400px]"
                    htmlFor="name">Name
                    <input
                        className="block w-full bg-secondary p-[6px] text-black"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name:"
                        maxLength={20}
                        required
                        onChange={HandleChange}
                    />
                </label>

                <label
                    className="w-[200px] md:w-[400px]"
                    htmlFor="lastname">Lastname
                    <input
                        className="block w-full bg-secondary p-[6px] text-black"
                        type="text"
                        id="lastname"
                        name="lastName"
                        placeholder="Last name:"
                        maxLength={20}
                        onChange={HandleChange}
                    />
                </label>
                
                <label
                    className="w-[200px] md:w-[400px]"
                    htmlFor="email">Email
                    <input
                        className="block w-full bg-secondary p-[6px] text-black"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email:"
                        required
                        onChange={HandleChange}
                    />
                </label>
                <label
                    className="w-[200px] md:w-[400px] h-[100px]">Message
                    <textarea
                        className="block bg-secondary p-[6px] w-full h-full text-black resize-none"
                        name="message"
                        maxLength={200}
                        onChange={HandleChange}
                    />
                </label>
                <input
                    className="bg-primaryLight w-[200px] h-[50px] mt-[20px] text-secondary text-center rounded cursor-pointer"
                    type="submit"
                    disabled = {loading}
                    value={loading? "sending...": "submit"}
                />
            </form>

            <div className="bg-primaryDark w-[500px] absolute top-[200px] right-[10px] hidden lg:block -z-[10px]">

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
                    modalAction="close"
                    modalStatus={setStatus}
                /> : ""}

        </section>
    )
}

export default Contact;