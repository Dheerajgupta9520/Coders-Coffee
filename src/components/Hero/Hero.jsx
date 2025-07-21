import React from "react";
import BgImage from "../../assets/bg-slate.png";
import CoffeeMain from "../../assets/black.png";
import "../Hero/Hero.css";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import MenuContext from "../../context/MenuContext";
import { Facebook, Instagram, Twitter } from "lucide-react";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  const { isDropdownOpen } = React.useContext(MenuContext);

  return (
    <main style={bgImage}>
      <div className="relative overflow-hidden min-h-[750px] w-full">
        <div className="container ">
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-3 place-items-center min-h[850px]">
            {/* textcontent section  */}
            <div className=" text-gray-200 mt-[100px] md:mt-20 p-4 space-y-28">
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
                  duration: 0.5,
                  type: "spring",
                  damping: 10,
                  delay: 0.8,
                  stiffness: 100,
                }}
                className="lg:text-7xl text-4xl leading-tight font-bold ml-14"
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  damping: 10,
                  delay: 1,
                  stiffness: 100,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl ">Black Lifestyle Lovers</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam cum ex pariatur delectus quisquam veritatis?
                    Sequi, voluptas, omnis repudiandae a molestiae labore modi
                    dignissimos quidem
                  </h1>
                </div>
                <div className="absolute -top-6 -left-5 w-[250px] h-[160px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            <div className="relative">
              <motion.img
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  type: "spring",
                  damping: 10,
                  delay: 1.2,
                  stiffness: 100,
                }}
                className="relative  z-40 h-[400px] md:h-[600px]
                img-shadow"
                src={CoffeeMain}
                alt=""
              />
              <motion.div
                initial={{
                  y: 100,
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
                  delay: 0.8,
                  stiffness: 100,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-amber-400 rounded-full z-10 border-[20px]"
              ></motion.div>
              <div className="absolute top-5 left-[200px] z-[1]">
                <motion.h1
                  initial={{
                    x: -100,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    damping: 10,
                    delay: 1.5,
                    stiffness: 100,
                  }}
                  className="text-[100px] scale-150 font-bold text-gray-800/50 leading-none"
                >
                  {" "}
                  Blvck Tumbler
                </motion.h1>
              </div>
            </div>
            <div className=" text-gray-200 mt-[100px] md:mt-20 p-4 space-y-28">
              <h1 className="hidden text-7xl leading-tight font-bold ml-14">
                Blvck Tumbler
              </h1>
              <motion.div
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  damping: 10,
                  delay: 1,
                  stiffness: 100,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl ">Blvck Tumbler </h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam cum ex pariatur delectus quisquam veritatis?
                  </h1>
                </div>
                <div className="absolute -top-6 left-20 w-[250px] h-[150px] bg-gray-900/50"></div>
              </motion.div>
            </div>
          </div>
        </div>
        {isDropdownOpen && (
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              damping: 10,
              delay: 0.1,
              stiffness: 100,
            }}
            className=" absolute top-0 right-0 w-[80px] h-full bg-gradient-to-b from-orange-400/70 to-orange-600/70 backdrop-blur-sm z-10"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white flex flex-col justify-center items-center  gap-6">
                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="cursor-pointer inline-block p-2 rounded-full border border-white">
                  <Facebook className="text-2xl" />
                </div>
                <div className="cursor-pointer inline-block p-2 rounded-full border border-white">
                  <Twitter className="text-2xl" />
                </div>
                <div className="cursor-pointer inline-block p-2 rounded-full border border-white">
                  <Instagram className="text-2xl" />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default Hero;
