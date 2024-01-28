'use client'

import { useAppSelector } from '@/redux/hook';
import { IUser } from '@/types/data';

import Image from 'next/image';
import React from 'react';


export default function Profile() {
    const { user }: { user: IUser } = useAppSelector((state) => state.auth)

    return (
        <div className=" mx-auto  rounded p-5 bg-white">
            <h1 className='text-3xl font-semibold text-center  mb-2'>Account Information</h1>
            <p className='text-center text-3xl uppercase'>({user.role})</p>
            <div className='flex flex-col items-center my-5'>
                <Image
                    src={user?.image !== "NULL" ? user?.image : '/images/default-profile.webp'}
                    alt={`${user?.fullName}'s avatar`}
                    height={200}
                    width={100}
                    className='rounded-lg'
                />

                <div className=' grid lg:grid-cols-2 lg:gap-5 text-md text-start w-full '>

                    <h3 className='lg:text-end'>Name  </h3>
                    <h3>{user?.fullName}</h3>
                    <h3 className='lg:text-end'>Email  </h3>
                    <h3>{user?.email}</h3>
                    <h3 className='lg:text-end'>Number  </h3>
                    <h3 >{user?.phoneNumber ?? <span className='text-gray-500'>Not added yet</span>}</h3>
                    <h3 className='lg:text-end'>Address </h3>
                    <h3 >{user?.address ?? <span className='text-gray-500'>Not added yet</span>}</h3>






                </div>
            </div>

        </div >
    );
};



// Thank you nasir uddin vai.
// i was told to build up a logo and I completed it
// and we all of our team members were in metting for almost 4 hours and we discussed about


