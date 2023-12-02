import { Link } from "react-router-dom";
import { workData } from "../data/data";
import { IWork } from "../interfaces/Interfaces";
import { Carousel } from 'flowbite-react';
import visit from "../assets/arrowup.svg";

export const ImageCarousel =()=>{

    return(
        <Carousel pauseOnHover slide className="w-full h-[300px]">
            {workData.map((work: IWork) =>
                <Link 
                    key={work.id}
                    to={work.link} 
                    target="_blank"
                    className="group relative h-[300px]"
                    >
                    <img
                        className="mx-auto object-contain"
                        src={work.img}
                        width={200}
                        height={200}
                    />
                    <span className="bg-orange-500 w-full font-bold text-lg absolute bottom-0 right-0 text-center">
                        {work.title}
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-orange-500 text-center transition-[height] overflow-hidden">
                        <span className="absolute top-0 right-0 p-1">
                            <img
                            src={visit}
                            width={20}
                            height={20}
                            />
                        </span>
                        <p className="font-bold text-lg">{work.title}</p>
                        <p className="text-sm">{work.disc}</p>
                    </div>
                </Link>
            )}
        </Carousel>
        
    )
} 