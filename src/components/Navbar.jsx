import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaStore, FaBars } from "react-icons/fa6";
import { navLinks } from '../utils/data';
import { FaTimes } from 'react-icons/fa';


const Navbar = ({navIsOpen, handleNav}) => {

  return (
      <nav className='navbar w-full h-20 grid place-items-center sticky top-0 shadow-xl'>
          <div className="container main-container flex items-center justify-between">
              <Link to='/' className='flex items-center gap-x-1 text-2xl lg:text-3xl px-2 py-1 rounded-md bg-[#3B82F6] shadow-lg'>
                  MarketPlaceX <span><FaStore /></span>
              </Link>
              <ul className='hidden lg:flex items-center gap-x-1'>
                  {navLinks.map((link) => {
                      const { id, title, path } = link
                      return (
                          <li key={id} >
                              <NavLink to={path} className='px-4 py-2 text-lg xl:text-xl tracking-wide roboto-medium rounded-lg'>
                                  {title}
                              </NavLink>
                          </li>
                      )
                  })}
              </ul>
              <div className='grid place-items-center lg:hidden'>
                  {navIsOpen ? (
                      <button type='button' className='white-color' onClick={handleNav}>
                          <FaTimes size={27} />
                  </button>
                  ) : (
                    <button type='button' className='white-color' onClick={handleNav}>
                    <FaBars size={27} />
            </button>
                  )}
              </div>
              <div className='hidden lg:flex  items-center gap-2 white-color'>
              <button className='px-8 py-2 rounded-lg text-lg tracking-wide transition-all ease-in-out duration-150 bg-[#10B981] hover:bg-transparent hover:border hover:border-[#10B981] roboto-medium'>Log in</button>
              <button className='px-8 py-2 rounded-lg text-lg tracking-wide transition-all ease-in-out duration-150 border border-[#10B981] hover:bg-[#10B981] roboto-medium'>Sign in</button>
          </div>
          </div>
    </nav>
  )
}

export default Navbar