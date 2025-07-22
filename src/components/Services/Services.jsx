import React from 'react'
import {  animate, motion, stagger } from 'framer-motion'
import Coffee1 from '../../assets/coffee/coffee1.png'
import Coffee3 from '../../assets/coffee/coffee3.png'


const serviceData=[
  {
    id:1,
    image:Coffee1,
    title:"Black Coffee",
    subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id:2,
    image:Coffee3,
    title:"Hot Coffee",
    subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id:3,
    image:Coffee1,
    title:"Cold Coffee",
    subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

]

const cardVarients={
  hidden:{y:20, opacity:0},
  visible:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      ease:"easeInOut",
      type:"spring",
      damping:10,
      stiffness:150,
      delay:0.2
    },
  },
};

const containerVarients={
  hidden:{
    opacity:0, 
  },
  visible:{
    opacity:1,
    transition:{
      delay:0.2,
      duration:0.5
    },
  },
};

const Services = () => {
  return (
    <div className='container my-16 space-y-4'>
       <div className='text-center max-w-lg mx-auto space-y-2'>
        <motion.h1 
        
        initial={{
            scale: 0,
            opacity: 0,
        }}
       whileInView={{
            scale:1,
            opacity:1 
      }}
        transition={{
            duration: 0.5,
            type: "spring",
            damping: 10,
            delay: 0.2,
            stiffness: 100,
        }}

        className='lg:text-3xl text-2xl font-bold text-gray-700'>
            Fresh and <span className='text-orange-400'>Tasty Coffees</span> 
        </motion.h1>
        <motion.p 
        initial={{
          scale:0.5,
          opacity: 0,
      }}
     whileInView={{
          scale:1,
          opacity:1 
    }}
      transition={{
          duration: 0.5,
          type: "spring",
          damping: 10,
          delay: 0.4,
          stiffness: 100,
      }} 
        className='text-gray-600 lg:text-sm text-xs opacity-50'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ad neque non et natus repellendus quia excepturi nisi impedit eaque architecto.</motion.p>
       </div>
      <motion.div 
      variants={containerVarients}
      initial="hidden"
      whileInView={"visible"}
      viewport={{amount:0.3}}
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>
        {serviceData.map((service)=>{
          return(
            <motion.div
            variants={cardVarients}
            whileInView={"visible"}
            initial="hidden"
            viewport={{amount:0.9}}
            animate='show'
            key={service.id}
            className='text-center rounded-lg  p-4 space-y-6'>
              <motion.img 
              transition={{duration:.5, delay:.2, ease:"linear" }}
              whileHover={{scale:1.1}} 
              className='img-shadow2 mx-auto max-w-[200px] cursor-pointer' src={service.image} alt="" />
              <div className='space-y-2'>
                <h1 className='lg:text-2xl text-xl font-bold text-orange-400'>{service.title}</h1>
                <p className='text-gray-600 text-xs lg:textsm'>{service.subtitle}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Services