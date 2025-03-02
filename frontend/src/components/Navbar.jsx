import React from 'react'
import {assets} from "../assets/assets_frontend/assets.js";
import {NavLink, useNavigate} from "react-router-dom";
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu , setShowMenu] = React.useState(false);
    const [token, setToken] = React.useState(true);
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-4 border-b border-b-gray-400'>
            <img className='w-44 cursor-pointer' src={assets.logo} alt="Logo for prescripto"/>
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1 text-p1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token ?
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img className='w-10 rounded-full ' src={assets.profile_pic} alt="Profile pic dummy for the profile pic"/>
                            <ChevronDown size={20} />
                            <div className='absolute top-0 righ-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                               <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                   <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My profile</p>
                                   <p onClick={()=>navigate('/my-appointment')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                   <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                               </div>
                            </div>
                        </div>
                        :  <button onClick={()=>navigate('/login')} className='bg-primary text-white rounded-full cursor-pointer px-6 py-3 font-light hidden md:block'>Create account</button>

                }

            </div>
        </div>
    )
}
export default Navbar
