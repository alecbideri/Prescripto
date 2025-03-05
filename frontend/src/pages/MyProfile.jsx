import React from 'react'
import {assets} from "../assets/assets_frontend/assets.js";

const MyProfile = () => {

    const [userData, setUserData] = React.useState({
        name : 'Bideri Alec',
        image : assets.profile_pic,
        email : 'richard@gmail.com',
        phone : '+1 123 456 7890',
        address : {
            line1 : '57th Cross, Richmond ',
            line2 : 'Circle, Church Road, London'
        },

        gender : 'male',
        dob : '2000-01-20'
    });

    const [isEdit , setEdit] = React.useState(false);

    return (
        <div className='max-w-lg flex flex-col gap-2 text-sm'>
            <img className='w-36 rounded' src={userData.image} alt=""/>

            {
                isEdit
                    ? <input className='bg-gray-50 text-xl font-medium max-w-60 mt-4 px-2 py-1 border border-primary rounded-lg  focus:outline-none cursor-pointer' type="text" value={userData.name} onChange={e=>setUserData(prev => ({...prev,name: e.target.value}))}/>
                    : <p className='font-medium text-2xl text-neutral-800 mt-4'>{userData.name}</p>
            }

            <hr className='bg-zinc-400 h-[1px] border-none'/>

            <div>
                <p className='text-neutral-700 underline mt-3'>Contact Information</p>
                <div className='grid grid-cols-[1fr_3fr] mt-3 gap-2.5 text-neutral-700'>
                    <p className='font-medium'>Email id:</p>
                    <p className='text-blue-500'>{userData.email}</p>
                    <p className='font-medium'>phone:</p>
                    {
                        isEdit
                            ? <input className='bg-gray-50 text-sm font-medium max-w-40 mt-4 px-2 py-1 border border-primary rounded-lg  focus:outline-none cursor-pointer'  type="text" value={userData.phone} onChange={e=>setUserData(prev => ({...prev,phone: e.target.value}))}/>
                            : <p className='text-blue-500'>{userData.phone}</p>
                    }

                    <p className='font-medium'>Addresses:</p>
                    {
                      isEdit
                       ? <p className='flex gap-2'>
                              <input className='bg-gray-50 text-sm font-medium max-w-50 px-2 mt-4 py-1 border border-primary rounded-lg  focus:outline-none cursor-pointer' type="text" onChange={(e)=>setUserData(prev=> ({...prev, address: {...prev.address, line1: e.target.value}}))} value={userData.address.line1}/>
                              <input className='bg-gray-50 text-sm font-medium max-w-50 px-2 mt-4 py-1 border border-primary rounded-lg  focus:outline-none cursor-pointer' type="email" onChange={(e)=>setUserData(prev=> ({...prev, address: {...prev.address, line2: e.target.value}}))} value={userData.address.line2}/>
                         </p>

                       : <p className='font-medium'>
                              {userData.address.line1}
                              <br/>
                              {userData.address.line2}
                         </p>
                    }

                </div>
            </div>
            <div>
                <p className='text-neutral-700 underline mt-3'>Basic information</p>
                <div className='grid grid-cols-[1fr_3fr] mt-3 gap-2.5 text-neutral-700'>
                    <p>Gender:</p>
                    {
                        isEdit
                            ? <select className='bg-gray-50 text-sm font-medium max-w-50 px-2 mt-4 py-1 border border-primary rounded-lg  focus:outline-none cursor-pointer' onChange={(e)=>setUserData(prev=>({...prev , gender: e.target.value}))} value={userData.gender} >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            : <p>{userData.gender}</p>
                    }

                    <p>Date of birth:</p>

                    {
                        isEdit
                            ? <input className='bg-gray-50 text-sm font-medium max-w-50 px-2 mt-4 py-1 border border-primary rounded-lg  focus:outline-none cursor-pointer' type="date" onChange={(e)=>setUserData(prev=>({...prev , dob: e.target.value}))} value={userData.dob}/>
                            : <p>{userData.dob}</p>
                    }

                </div>
            </div>
            <div className='mt-3'>
                {
                    isEdit
                    ? <button className='bg-primary max-w-50 px-10 py-2 text-white rounded'  onClick={()=> setEdit(false)}>Save information</button>
                    : <button className='bg-primary max-w-30 px-10 py-2 text-white rounded' onClick={()=> setEdit(true)}>Edit</button>
                }
            </div>
        </div>
    )
}
export default MyProfile
