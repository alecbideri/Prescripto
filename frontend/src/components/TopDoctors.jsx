import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const TopDoctors = () => {

    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);
    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='w-full grid grid-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {doctors.slice(0.10).map((item, index) => (
                    <div onClick={() => navigate(`appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                        <img className='bg-blue-50' src={item.image} alt="Doctors image" />
                        <div className='px-4 pt-4'>
                            <div className='flex items-center gap-2 text-sm text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 px-4 pb-4'>
                            <p className='font-semibold text-lg'>{item.name}</p>
                            <p className='text-sm text-gray-500 font-medium'>{item.speciality}</p>
                        </div>

                    </div>

                ))}
            </div>
            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-blue-50 px-8 py-4 rounded-full mt-12 cursor-pointer'>More</button>
        </div>

    )
}
export default TopDoctors
