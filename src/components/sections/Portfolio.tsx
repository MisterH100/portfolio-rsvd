

export const Portfolio =()=>{
    return(
        <section id="portfolio" className="w-full min-h-screen flex flex-wrap justify-between gap-4 bg-skills bg-center bg-contain bg-no-repeat px-1 sm:px-10 md:px-20 pt-1 sm:pt-10 md:pt-40">
            <article className="w-full md:w-[500px] p-4 bg-gray-400 rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <h1 className="w-full text-center h-20 text-4xl text-white font-medium  border-b border-gray-100">Portfolio</h1>
                <h2>Skills</h2>
            </article>
            <article className="w-full md:w-[800px] p-4 bg-gray-400 rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <h1 className="w-full text-center h-20 text-4xl text-white font-medium  border-b border-gray-100"></h1>
                <h2>Projects</h2>
            </article>
        </section>
    )
}