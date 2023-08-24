
import { workData } from "../data/data";

const Works = () => {
    return (
        <section className="bg-background5 bg-center  w-full h-full flex flex-col" id="work">
            <div className="flex items-center px-[10%] md:px-[20%] py-[100px]">
                <h1 className="text-[2rem] font-bold whitespace-nowrap">My Work</h1>
            </div>
            <div className="flex gap-[20px] flex-wrap justify-center px-[50px] md:px-[50px]">
                {workData.map((data) => {
                    return (
                        <article key={data.id}>
                            <div className="bg-secondary w-[400px] min-w-[250px] h-[200px]">
                                <img
                                    className="w-full h-full cursor-pointer"
                                    src ={data.img}
                                    alt={data.title}
                                />
                            </div>
                            <div className="bg-secondaryDark w-[400px] min-w-[250px] p-[20px] md:p-[10px] border-b-[1px] border-secondary">
                                <p className="text-secondary whitespace-wrap w-full underline text-white">{data.title}</p>
                                <p className="text-secondary whitespace-wrap h-[150px] w-full text-white">{ data.disc }</p>
                            </div>
                        </article>
                    )
                })}

            </div>
        </section>
    )
}

export default Works;