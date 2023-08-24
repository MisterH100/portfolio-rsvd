
const Header = () => {
    return (

      <header className="light sticky top-0 z-[100] bg-primaryDark w-full h-[120px] flex flex-col lg:flex-row justify-center overflow-hidden lg:px-[80px] lg:justify-between items-center">
        <h1 className="text-[3rem] text-secondary font-light cursor-pointer"><a href="/">handsome.<span className="font-extrabold">dev</span></a></h1>
        <nav className="w-full px-[20px] lg:px-[10px] flex justify-center lg:justify-end">
          <ul className="flex gap-[20px] lg:gap-[30px] font-normal text-[1.5rem] lg:text-[2rem]">
            <li className="cursor-pointer"><a href="#home">Home</a></li>
            <li className="cursor-pointer"><a href="#work">Work</a></li>
            <li className="cursor-pointer"><a href="#contact">Contact</a></li>
            <li className="cursor-pointer"><a href="#contact">Blog</a></li>
          </ul>
        </nav>
      </header>

    )
}
  
export default Header;