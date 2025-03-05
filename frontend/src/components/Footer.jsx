import React from 'react'
import { assets } from "../assets/assets_frontend/assets.js";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    {/*Left section*/}
                    <img className='w-40 mb-5' src={assets.logo} alt="logo image" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                {/*--center side section*/}

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li><a className='hover:text-primary cursor-pointer' onClick={() => { navigate('/'); scrollTo(0, 0) }}>Home</a></li>
                        <li><a className='hover:text-primary cursor-pointer' onClick={() => { navigate('/about'); scrollTo(0, 0) }}>About us</a></li>
                        <li><a className='hover:text-primary cursor-pointer' onClick={() => { navigate('/contact'); scrollTo(0, 0) }}>Contact us</a></li>
                        <li><a className='hover:text-primary cursor-pointer' onClick={() => { navigate('/'); scrollTo(0, 0) }}>Privacy policy</a></li>
                    </ul>
                </div>

                {/*--Right side section*/}

                <div>
                    <p className='font-medium text-xl mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>prescripto@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-gray-800'>
                <hr className='text-gray-200' />
                <p className='text-sm text-center mb-2 font-medium mt-5'>Copyright © 2025 Prescripto - All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Footer
