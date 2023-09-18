import { useState } from "react";
import { NavLink } from "./NavLink";


const links = [
    {
        title: "Home",
        path: "#home"
    },
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Portfolio",
        path: "#portfolio"
    },
    {
        title: "Contact",
        path: "#contact"
    }
];

export const Header = () => {
  const [selected, setSelected] = useState(links[0].title);

  return (
    <header className="sticky top-0 z-10 bg-transparent w-full h-20 flex justify-center md:items-center bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-md  bg-opacity-40 border-b border-gray-100">
        <nav className="w-full md:w-3/4 h-14 flex items-center justify-center gap-2">
            {links.map((link) => (
                <a href={link.path}>
                    <NavLink
                    text={link.title}
                    selected={selected === link.title}
                    setSelected={setSelected}
                    key={link.title}
                    />
                </a>
            ))}
        </nav>
    </header>
  );
};





