import { Button } from "../Button"


export const Contact =()=>{
    return(
        <section id="contact" className="w-full md:h-screen flex justify-center items-center bg-contact bg-center bg-cover md:bg-contain bg-no-repeat px-1 sm:px-10 md:px-20 pt-10 md:pt-40 py-40 md:py-0">
            <article className="w-full md:w-[500px] p-4 bg-gray-400 rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <h1 className="w-full text-center h-20 text-4xl text-white font-medium  border-b border-gray-100">Contact Me</h1>
                <form className="text-base font-medium">
                    <label 
                        htmlFor="name"
                        className="block w-full h-20 text-white">
                        Name
                        <input 
                            type="text"
                            id="name"
                            name="name" 
                            placeholder="Name"
                            autoComplete="true"
                            required
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
                            placeholder="Email adress"
                            autoComplete="true"
                            required
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
                            className="block resize-none w-full p-2 bg-white text-black outline-none border-2 border-white focus:border-orange-500"
                            cols={30}
                            rows={5}
                        ></textarea>
                    </label>
                    <div className="w-full h-20 flex justify-center items-center">
                        <Button text="Send"/>
                    </div>
                </form>
            </article>
        </section>
    )
}