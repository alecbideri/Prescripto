import React from 'react'
import {assets} from "../assets/assets_frontend/assets.js";
import {ArrowRight} from 'lucide-react'

const Header = () => {
    return (
      <div className='flex flex-col md:flex-row flex-wrap  bg-primary rounded px-6 md:px-10 lg:px-20 '>
      {/*    ---Right side---*/}

          <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
             <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight  lg:leading-tight'>Book appointments <br/> with Trusted Doctors</p>
              <div className='flex flex-col md:flex-row items-center gap-3 text-white tex-sm font-light'>
                  <img className='w-28' src={assets.group_profiles} alt="Group Profiles" />
                  <p>Simply browse through our extensive list of trusted doctors,
                      schedule your appointment hassle-free.</p>
              </div>
              <a className='flex items-center gap-2 bg-white px-5 py-4 rounded-full font-semibold cursor-pointer text-gray-500 text-sm md:m-0 hover:scale-105 transition-all duration-300' href="#speciality">Book appointment <ArrowRight size={20}/> </a>
          </div>

      {/*    ---Left side ----*/}

          <div className='md:w-1/2 relative'>
              <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt=""/>
          </div>
      </div>
    )
}
export default Header
