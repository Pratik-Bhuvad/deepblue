import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './css/Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 768);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='flex flex-row w-3/5 bg-red-700 pr-5'>
        <i 
          className={`fa-solid ${isVisible ? 'fa-times' : 'fa-bars'} pr-5 float-right absolute right-0 top-4 sm:hidden`} 
          onClick={toggleVisibility}
        ></i>
        <AnimatePresence>
          {(isVisible || window.innerWidth >= 768) && (
            <motion.nav 
              className='absolute top-7 right-5 w-2/4 h-[50vh] sm:w-2/4 sm:h-full sm:top-0 flex-col items-start justify-evenly pl-5 bg-[#3b7ddb96] sm:flex-row sm:bg-transparent'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link className='link' to='/'>Home</Link>
              <Link className='link' to='/about'>About Us</Link>
              <Link className='link' to='/ecosystem'>Ecosystem</Link>
              <Link className='link' to='/forum'>Forum</Link>
              <Link className='link' to='/products'>Products</Link>
              <Link className='link' to='/news'>News</Link>
              <Link className='link' to='/faq'>FAQ's</Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
