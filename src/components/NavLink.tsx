import { motion } from "framer-motion";


interface ILink{
    text: string;
    selected: any;
    setSelected: any
}

export const NavLink= ({text,selected,setSelected,}:ILink) => {
    return (
      <button
        onClick={() => setSelected(text)}
        className={`${selected? "text-white" : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"} text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
      >
        <span className="relative z-10">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 border-b border-white"
          >
          </motion.span>
        )}
      </button>
    );
  };