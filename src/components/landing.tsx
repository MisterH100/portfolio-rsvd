
import github from '../assets/github.svg';
import linkedIn from '../assets/linkedIn.svg';
import twitter from '../assets/twitter.svg';
import { skillData } from '../data/data';
const Landing = () => {


    return(
      <section className="bg-background2 bg-no-repeat bg-center sm:bg-right bg-scroll w-full h-[100vh] flex" id="home">
        <div className="w-[20%] h-full opacity-0 sm:opacity-[6] flex justify-center items-center px-[40px] pt-[100px] lg:pt-[360px]">
          <h3 className="rotate-90 lg:rotate-0 text-[0.8rem]"><a href="mailto:handsomenyathi1@gmail.com">handsomenyathi1@gmail.com</a></h3>
        </div>
  
        <div className="w-[60%] h-full flex flex-col py-[40px] items-center gap-[40px] md:items-start md:justify-center lg:px-[40px]">
          <h2 className="text-[2rem]">hello, i am Handsome</h2>
          <h1 className="text-[3rem] md:text-[4rem]">using code to bring <span className="font-black">websites</span> to life.</h1>
          <div className="flex flex-wrap gap-[10px] pt-[10px]">
            <p>My Array of Skills [ </p>
            {skillData.map((item) => {
              return (
                <li
                  className="list-none underline cursor-pointer"
                  key={item.id}
                >
                  {item.title}
                </li>
              )
            })}
            <span>]</span>
          </div>

        </div>
  
  
        <div className="w-[20%] h-full flex flex-col items-center justify-center gap-[50px] whitespace-nowrap pt-[40px]">
          <h3 className="rotate-90"> follow me</h3>
          <div className="w-[1px] h-[100px] bg-secondary">
  
          </div>
            <a href="https://github.com/misterh100" target="_blank">
                <img
                    src={github}
                    alt="github"
                    width={20}
                    height={20}
                />
            </a>

            <a href="https://linkedin.com/in/handsome-nyathi-9a3116275" target="_blank">      
                <img
                    src={linkedIn}
                    alt="linkedin"
                    width={20}
                    height={20}
                />
            </a>

            <a href="https://twitter.com/handsome_nyathi" target="_blank">
                <img
                    src={twitter}
                    alt="twitter"
                    width={20}
                    height={20}
                />
                
            </a>  
        </div>
      </section>
    )
}
  
export default Landing;