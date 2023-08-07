import avatar from '../assets/avatar.png'

const Contact = () => {
    return (
        <section className="bg-background bg-cover bg-center bg-no-repeat w-full h-screen relative" id="contact">
            <div className="flex items-center px-[20%]">
                <h1 className="text-[2rem] font-bold whitespace-nowrap">Contact Me</h1>
            </div>
            <div className="flex flex-col gap-[20px] px-[10%] md:px-[20%] py-[100px]">
                <label
                    className="flex gap-[10px] items-center"
                    htmlFor="name">
                    <input
                        className="bg-secondary w-[200px] md:w-[400px] p-[6px] text-black"
                        type="text"
                        id="name"
                        placeholder="Name:"
                        maxLength={20}
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
                        maxLength={40}
                    />Email
                </label>
                <label
                    className="flex gap-[10px]">
                    <textarea
                        className="bg-secondary p-[6px] w-[200px] md:w-[400px] h-[100px] text-black resize-none"
                        maxLength={200}
                    />Message
                </label>
                <input
                    className="bg-primaryLight w-[200px] h-[50px] text-secondary text-center rounded cursor-pointer"
                    type="submit"
                />
            </div>

            <div className="bg-primaryDark w-[500px] absolute top-[100px] right-[10px] hidden lg:block -z-[10px]">
                <div>
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
                    <button className="bg-primary w-[100px] h-[50px] absolute top-[50px] right-[50px] text-secondary text-center">
                        My Blog
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact;