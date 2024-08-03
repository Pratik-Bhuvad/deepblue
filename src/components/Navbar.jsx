import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon} from '@heroicons/react/20/solid'
import './css/Navbar.css';

const Navbar = () => {
  // Set visibility based on wider range to include tablets
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 1024);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
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
    if (window.innerWidth < 1024) {
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
              className='absolute top-7 right-5 w-2/4 h-[50vh] lg:w-2/5 lg:h-full lg:top-0 flex-col items-start justify-evenly pl-5 bg-[#3b7ddb96] lg:flex-row lg:items-center lg:bg-transparent *:w-full lg:*:w-auto md:*:text-lg'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link className='link' to='/' onClick={handleLinkClick}>Home</Link>
              <Link className='link' to='/ecosystem' onClick={handleLinkClick}>Ecosystem</Link>
              <Link className='link' to='/forum' onClick={handleLinkClick}>Forum</Link>
              <Link className='link' to='/products' onClick={handleLinkClick}>Products</Link>
              <Menu as="div" className="relative inline-block text-left ">
                <div>
                  <MenuButton className="inline-flex text-lg w-full items-center gap-x-1.5 rounded-md text-white px-3 py-2 font-semibold shadow-sm">
                    Others
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                  </MenuButton>
                </div>

                <MenuItems transition className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                  <div className="py-1">
                    <MenuItem>
                      <Link to="/donate" className="block text-lg px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">Donate</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="aboutus" className="block text-lg px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">About Us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/login" className="block text-lg px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">Log In</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="signin" className="block text-lg px-4 py-2 text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">Sign Up</Link>
                    </MenuItem>
                      <MenuItem>
                        <button type="submit"className="block text-lg w-full px-4 py-2 text-left  text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">Sign out</button>
                      </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
