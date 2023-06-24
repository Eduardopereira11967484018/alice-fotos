import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image1 from "../img/portfolio/1.png";
import image2 from "../img/portfolio/2.png";
import image3 from "../img/portfolio/3.png";
import image4 from "../img/portfolio/4.png";
// animation
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='
          flex flex-col
          lg:flex-row gap-x-24
          h-full
          items-center
          justify-start
          text-center
          lg:text-left
          pt-24 lg:pt-36
          pb-8'>
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm '>
              Lorem Ipsum is simply dummy text of the <b>printing
                and typesetting</b> industry. when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the <b>printingand typesetting</b> industry.
            </p>
            <Link to={'/contact'}
              className='btn mx-auto lg:mx-0 mb-[30px]'>
              Hire me
            </Link>
          </motion.div>
          {/* image grid */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='grid grid-cols-2 lg:gap-2'>
            {/* image */}
            <div className='
              max-w-[250px] lg:max-w-[320px]
              h-[187px] lg:h-[220px]
              bg-accent
              overflow-hidden'>
              <img className='
                object-cover
                h-full lg:h-[220px]
                hover:scale-110
                transition-all
                duration-500'
                src={image1} alt='' />
            </div>
            <div className='
              max-w-[250px] lg:max-w-[320px]
              h-[187px] lg:h-[220px]
              bg-accent
              overflow-hidden'>
              <img className='
                object-cover
                h-full lg:h-[220px]
                hover:scale-110
                transition-all
                duration-500'
                src={image2} alt='' />
            </div>
            <div className='
              max-w-[250px] lg:max-w-[320px]
              h-[187px] lg:h-[220px]
              bg-accent
              overflow-hidden'>
              <img className='
                object-cover
                h-full lg:h-[220px]
                hover:scale-110
                transition-all
                duration-500'
                src={image3} alt='' />
            </div>
            <div className='
              max-w-[250px] lg:max-w-[320px]
              h-[187px] lg:h-[220px]
              bg-accent
              overflow-hidden'>
              <img className='
                object-cover
                h-full lg:h-[220px]
                hover:scale-110
                transition-all
                duration-500'
                src={image4} alt='' />
            </div>
          </div>
        </div>
      </div>

    </motion.section>
  );
};

export default Portfolio;
