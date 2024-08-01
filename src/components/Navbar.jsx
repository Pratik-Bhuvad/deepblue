import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './css/Navbar.css';

const Navbar = () => {
  // Set visibility based on wider range to include tablets
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 1280);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
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

  const handleLinkClick = () => {
    // Close navbar for screens smaller than 1280px when a link is clicked
    if (window.innerWidth < 1280) {
      setIsVisible(false);
    }
  };

  return (
    <>
      <div className='flex flex-row w-3/5 bg-red-700 pr-5'>
        <i 
          className={`fa-solid ${isVisible ? 'fa-times' : 'fa-bars'} pr-5 float-right absolute right-0 top-4 lg:hidden`} 
          onClick={toggleVisibility}
        ></i>
        <AnimatePresence>
          {(isVisible || window.innerWidth >= 1280) && (
            <motion.nav 
              className='absolute top-7 right-5 w-2/4 h-[50vh] lg:w-2/5 lg:h-full lg:top-0 flex-col items-start justify-evenly pl-5 bg-[#3b7ddb96] lg:flex-row lg:bg-transparent'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link className='link' to='/' onClick={handleLinkClick}>Home</Link>
              {/* <Link className='link' to='/aboutUs'>About Us</Link> */}
              <Link className='link' to='/ecosystem' onClick={handleLinkClick}>Ecosystem</Link>
              <Link className='link' to='/forum' onClick={handleLinkClick}>Forum</Link>
              <Link className='link' to='/products' onClick={handleLinkClick}>Products</Link>
              {/* <Link className='link' to='/news'>News</Link> */}
              <Link className='link' to='/faq' onClick={handleLinkClick}>FAQ's</Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
