import {motion} from 'framer-motion'
import { useEffect, useRef, useState } from 'react';



export const Cursor = ({x,y}:{x:number,y:number})=>{
    const cursor = useRef<HTMLDivElement | any>(null);
    const [scale, setScale] = useState({scaleX: 20,scaleY: 20});
    const [varient, setVarient] = useState("normal");

    const links = window.document.querySelectorAll("a");
    const buttons = window.document.querySelectorAll("button");
    const interactiveElements = [links,buttons];

    const onHover =(elements:NodeListOf<HTMLElement>)=>[
        elements.forEach((el: HTMLElement)=>{
            el.addEventListener("mouseenter",()=>{
                setScale({scaleX: 60, scaleY: 60});
                const elementName = el.nodeName;
                
                if(elementName == "A"){
                    setVarient("linkhover")
                }
                if(elementName == "BUTTON"){
                    setVarient("buttonhover");

                }
            })
            el.addEventListener("mouseleave",()=>{
                setScale({scaleX: 20, scaleY: 20});
                setVarient("normal")
            })
            
        })
    ]


    useEffect(()=>{
        interactiveElements.forEach((interactiveElement)=>{
            onHover(interactiveElement)
        })
    },[interactiveElements])

    return(
        <motion.div 
            transition={{duration: 0.1, delay: 0,type: "tween"}}
            variants={{
                normal: {
                    width:scale.scaleX, 
                    height: scale.scaleY,
                },
                linkhover: {
                    width: scale.scaleX,
                    height: scale.scaleY,
                },
                buttonhover:{
                    scale:0,
                    opacity: 0,
                    transition: {duration: 0.3, delay: 0,type: "tween"},
                },
                move:{
                    top:y,
                    left:x
                }
            }}
            initial={"normal"}
            animate={[varient,"move"]}
            ref={cursor}
            className={`pointer-events-none fixed z-50 w-10 h-10 rounded-full bg-transparent -translate-x-[50%] -translate-y-[50%] origin-center flex justify-center items-center overflow-hidden ${varient == "normal"? "border border-white": "border-none"}`}
            >
            <motion.div
                className="w-fit h-fit"
                initial={{
                    opacity:0,
                    width: 0,
                    height: 0,
                }}
                whileInView={{
                    opacity: 1,                     
                    width: 20,
                    height: 20,
                }}
                transition={{duration: 0.2, delay: 0,type: "tween"}}
                >
            </motion.div>
            {varient == "normal"?null:
                <div className="absolute w-full h-full -z-10 bg-white bg-opacity-50">
                </div>
            }
        </motion.div>
    )
}