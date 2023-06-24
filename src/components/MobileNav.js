import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuVariants = {
    hidden: {
      x: '100%'
    },
    show: {
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    }
  }

  return (
    <nav className='text-primary xl:hidden'>
      <div onClick={() => setOpenMenu(true)}
        className='text-3xl cursor-pointer'>
        <CgMenuRight />
      </div>

      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='
        bg-white
        w-full h-screen
        max-w-xs
        absolute 
        top-0 
        right-0
        shadow-2xl
        z-20'>
        <div onClick={() => setOpenMenu(false)}
          className='
          text-primary
          text-4xl
          absolute
          left-4 top-14
          z-30
          cursor-pointer'>
          <IoMdClose />
        </div>

        <ul className='
          h-full
          flex flex-col
          justify-center
          items-center
          gap-y-8
          text-primary
          font-bold
          text-3xl'>
          <li>
            <Link to={'/'} onClick={() => setOpenMenu(false)} >Home</Link>
          </li>
          <li>
            <Link to={'/about'} onClick={() => setOpenMenu(false)}>About</Link>
          </li>
          <li>
            <Link to={'/portfolio'} onClick={() => setOpenMenu(false)}>Portfolio</Link>
          </li>
          <li>
            <Link to={'/contact'} onClick={() => setOpenMenu(false)}>Contact</Link>
          </li>
        </ul>

      </motion.div>
    </nav>
  );
};

export default MobileNav;
