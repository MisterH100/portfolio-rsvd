import { Link } from "react-router-dom";

const Header = () => {
    return (
      <>
        <header className="bg-primaryDark w-full min-w-full h-[120px] flex justify-center overflow-hidden lg:px-[80px] lg:justify-between items-center">
          <h1 className="text-[3rem] text-secondary font-light">handsome.<span className="font-extrabold">dev</span></h1>
          <nav className="w-full hidden px-[10px] lg:flex lg:justify-end">
            <ul className="flex gap-[30px] font-normal text-[2rem]">
              <li className="cursor-pointer"><Link to="/">Home</Link></li>
              <li className="cursor-pointer"><Link to="work">Work</Link></li>
              <li className="cursor-pointer"><Link to="contact">Blog</Link></li>
              <li className="cursor-pointer"><Link to="contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
      </>
    )
}
  
export default Header;