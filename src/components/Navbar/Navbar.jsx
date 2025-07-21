import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import MenuContext from "../../context/MenuContext";

const Navbar = () => {
 
  const { isDropdownOpen, setIsDropdownOpen } = React.useContext(MenuContext);

  return (
    <nav className="absolute top-0 w-full left-0 pt-10  text-white z-20 ">
      <div className=" relative container">
        <div className="flex items-center justify-between">
          <motion.h1
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              type: "spring",
              damping: 10,
              delay: 1.2,
              stiffness: 70,
            }}
            className="text-2xl font-semibold uppercase"
          >
            Coders <span className="text-amber-400">Coffee</span>
          </motion.h1>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              type: "spring",
              damping: 10,
              delay: 1.2,
              stiffness: 70,
            }}
            className="cursor-pointer"
          >
            <button
            className="cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {isDropdownOpen ? <ChevronRight /> : <ChevronLeft />}
            </button>
          </motion.div>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
