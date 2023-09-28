import React, {useState} from 'react';
import {RiMenu5Fill} from 'react-icons/ri';
import {AiOutlineClose} from 'react-icons/ai';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState (false);
  return (
    <div className='mt-4 md:px-10 px-4'>
      <nav className='flex justify-between bg-orange-100 p-5'>
      <h1 className='md:text-2xl text-xl flex items-center'>Jaishree Tiwari</h1>
       <div className='flex items-center'>
       <ul className='md:flex hidden gap-20 '>
       <NavLink to='/' end
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-black' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>HOME</li>
            </NavLink>
            <NavLink to='/about'
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>ABOUT</li>
            </NavLink>
            <NavLink to='/skills'
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>SKILLS</li>
            </NavLink>
            <NavLink to='/contact'
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>CONTACT ME</li>
            </NavLink>
        </ul>
        <div className="flex relative">
    {!menu && (
      <RiMenu5Fill fontSize={28} className="rounded fill-black md:hidden cursor-pointer" onClick={() => setMenu(true)} />
    )}
    {menu && ( 
          <ul
            className="z-10 bg-black/60 fixed -top-0 -right-2 p-12 w-[60vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose className='stroke-2 fill-white' onClick={() => setMenu(false)} /></li>
            <NavLink to='/' end
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-black' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>HOME</li>
            </NavLink>
            <NavLink to='/about'
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>ABOUT</li>
            </NavLink>
            <NavLink to='/skills'
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>SKILLS</li>
            </NavLink>
            <NavLink to='/contact'
               className={({ isActive }) => isActive ? 'text-[#35b6b4] font-bold' : null }
            >
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>CONTACT ME</li>
            </NavLink>
          </ul>
        )}
    </div>
       </div>
      </nav>
    </div>
  )
}

export default Navbar;
