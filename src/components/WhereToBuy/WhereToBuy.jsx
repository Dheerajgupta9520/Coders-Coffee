import React from "react";
import WorldMap from "../../assets/world-map.png";
import { motion } from "framer-motion";

const WhereToBuy = () => {
  return (
    <>
      <div className="container my-36">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          <div className="space-y-8">
            <motion.h1
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 10,
                delay: 0.2,
                stiffness: 100,
              }}
              className="text-4xl font-bold text-gray-900 font-serif"
            >
              Buy Our products From Anywhere
            </motion.h1>
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 10,
                delay: 0.3,
                stiffness: 100,
              }}
              className="flex items-center gap-4"
            >
              <input
                type="text"
                placeholder="Name"
                className="input-style w-full lg:w-[150px] "
              />
              <input
                type="email"
                placeholder="Email"
                className="input-style w-full  "
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 10,
                delay: 0.4,
                stiffness: 100,
              }}
              className="flex items-center gap-4"
            >
              <input
                type="text"
                placeholder="Country"
                className="input-style w-full  "
              />
              <input
                type="text"
                placeholder="ZipCode"
                className="input-style w-full lg:w-[150px] "
              />
            </motion.div>
            <motion.button
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 10,
                delay: 0.5,
                stiffness: 100,
              }}
              className="primary-btn w-full"
            >
              Buy Now
            </motion.button>
          </div>
          <div className="col-span-2">
            <motion.img
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 10,
                delay: 0.6,
                stiffness: 100,
              }}
              src={WorldMap}
              alt=""
              className="w-full sm:w-[500px] mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereToBuy;
