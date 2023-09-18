
export const About =()=>{
    return(
        <section id="about" className="flex items-center w-full h-screen bg-about bg-center bg-cover px-10 md:px-20 pt-10">
            <article className="w-full md:w-2/5  md:h-3/4 p-4 bg-gray-400 rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <h1 className="w-full text-center h-20 text-4xl text-white font-medium  border-b border-gray-100">About</h1>
                <p className="text-base md:text-lg tracking-wide pt-4">
                    Greetings! I'm <span className="font-black">Handsome Nyathi</span>, a skilled web developer with a keen focus on UI/UX 
                    design exploration.My work revolves around the dynamic <span className="underline">MERN</span> tech stack, enabling me 
                    to craft immersive digital experiences.Backed by years of web development expertise,I'm committed to delivering polished 
                    solutions.My boundlesse enthusiasm for technology drives my continuous learning and innovation.
                    <span className="font-black">Let's collaborate and bring your digital visions to life!</span>
                </p>
            </article>
        </section>
    )
}