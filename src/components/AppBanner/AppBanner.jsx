import React from "react";
import bannerImg from "../../assets/coffee-cover.jpg";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import { motion } from "framer-motion";

const BannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const AppBanner = () => {
  return (
    <div className="container overflow-hidden my-14">
      <motion.div

        initial={{
          opacity: 0,
          x: 50,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          x: 0,
        }}
        transition={{
          type: "spring",
          damping: 5,
          delay: 0.2,
          stiffness: 100,
        }}
        

        style={BannerStyle}
        className="sm:min-h-[500px] sm:flex sm:justify-end sm:items-center rounded-xl"
      >
        <div>
          <div className="space-y-4 max-w-xl mx-auto">
            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                damping: 10,
                delay: 0.2,
                stiffness: 100,
              }}
              className="lg:text-3xl text-xl font-bold text-center sm:teaxt-4xl"
            >
              Download Our App
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                damping: 10,
                delay: 0.3,
                stiffness: 100,
              }}
              className="text-center text-sm lg:text-lg sm:px-20 pl-30 "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              
            </motion.p>

            <div className="flex justify-center gap-4 items-center">
              <a href="#">
                {" "}
                <motion.img
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    delay: 0.4,
                    stiffness: 100,
                  }}
                  className=" max-w-[120px] md:max-w-[200px] "
                  src={PlayStoreImg}
                  alt=""
                />
              </a>
              <a href="#">
                {" "}
                <motion.img
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    delay: 0.5,
                    stiffness: 100,
                  }}
                  className=" max-w-[120px] md:max-w-[200px] "
                  src={AppStoreImg}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppBanner;
