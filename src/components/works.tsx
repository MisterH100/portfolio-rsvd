
import { workData } from "../data/data";

const Works = () => {
    return (
        <section className="bg-background bg-cover bg-center bg-no-repeat w-full h-full py-[100px] flex flex-col" id="work">
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
                                <p className="text-secondary whitespace-wrap">{ data.disc }</p>
                            </div>
                        </article>
                    )
                })}

            </div>
        </section>
    )
}

export default Works;