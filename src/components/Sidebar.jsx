import React from 'react'
import { navLinks } from '../utils/data'
import { NavLink } from 'react-router-dom'

const Sidebar = ({navIsOpen, handleNav}) => {
  return (
      <aside className={`
        lg:hidden fixed top-20 bg-[#111827] white-color p-6
         ${navIsOpen ? '  inset-0  translate-x-0 ease-in-out duration-150 z-[99]' : '  inset-0   translate-x-[-100%] ease-in-out duration-150 z-0'}
        `}>
          <ul className='grid gap-y-3'>
              {navLinks.map((link) => {
                  const { id, title, path } = link
                  return (
                      <li key={id} className=' w-full'>
                          <NavLink to={path} className='block py-1 pl-1 rounded-lg text-lg tracking-wide roboto-medium transition-all ease-in-out duration-150 hover:pl-2 hover:tracking-widest hover:border-b hover:border-b-[#3B82F6]'>
                              {title}
                          </NavLink>
                      </li>
                  )
              })}
          </ul>
          <div className='grid place-items-center'>
          <div className='mt-8 flex  items-center gap-2'>
              <button className='px-8 py-2 rounded-lg text-lg tracking-wide transition-all ease-in-out duration-150 bg-[#10B981] hover:bg-transparent hover:border hover:border-[#10B981] roboto-medium'>Log in</button>
              <button className='px-8 py-2 rounded-lg text-lg tracking-wide transition-all ease-in-out duration-150 border border-[#10B981] hover:bg-[#10B981] roboto-medium'>Sign in</button>
          </div>
          </div>
        </aside>
  )
}

export default Sidebar