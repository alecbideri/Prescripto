import React from 'react'
import {assets} from "../assets/assets_frontend/assets.js";

const Contact = () => {
    return (
        <div>
            <div className='text-center text-gray-600 font-medium'>
                <p>CONTACT <span className='text-gray-800 font-semibold'>US</span></p>
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="contact image"/>
                <div className='flex flex-col justify-center items-start gap-6 mt-5 text-gray-600 tex-sm'>
                    <p className='font-semibold'>OUR OFFICE</p>
                    <p>54709 Willms Station Suite 350, Washington, USA</p>
                    <p>Tel: (415) 555‑0132 Email: greatstackdev@gmail.com</p>
                    <p className='font-semibold'>CAREERS AT PRESCRIPTO <span className='font-light'> <br/>Learn more about our teams and job openings.</span></p>
                    <button className='border border-black py-4 px-8 tex-sm  hover:bg-primary hover:text-white hover:border-primary'>Explore jobs</button>
                </div>
            </div>
        </div>
    )
}
export default Contact
