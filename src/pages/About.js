import React, { useContext } from 'react';
import woman from '../img/about/woman.png'
import { Link } from 'react-router-dom';
// animation
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

import { CursorContext } from '../context/CursorContext';


const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'>
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container h-full mx-auto relative'>
        <div className='
          flex flex-col
          lg:flex-row
          h-full
          items-center
          justify-center
          gap-x-24
          text-center
          lg:text-left
          lg:pt-16
          '>
          {/* image */}
          <div className='
            flex-1 
            max-h-96 lg:max-h-max
            order-2 lg:order-none
            overflow-hidden
            '>
            <img src={woman} alt='' />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '80%' }}
            transition={transition1}
            className='
            flex-1
            flex flex-col
            pt-36 pb-14
            lg:pt-0 lg:w-auto
            z-10
            justify-center
            items-center
            lg:items-start'>
            <h1 className='h1'>About Me</h1>
            <p className='mb-12 max-w-sm '>
              Lorem Ipsum is simply dummy text of the <b>printing
                and typesetting</b> industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
            <Link className='btn'
              to={'/portfolio'}>
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
