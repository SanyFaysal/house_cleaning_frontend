import { useAppSelector } from '@/redux/hook';
import { IUser } from '@/types/data';
import { icons } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Profile = () => {
    const { user }: { user: IUser } = useAppSelector((state) => state.auth)

    return (
        <div className=" mx-auto  rounded p-5 bg-white">
            <h1 className='text-3xl font-semibold text-center  mb-2'>Account Information</h1>
            <p className='text-center text-3xl uppercase'>({user.role})</p>
            <div className='flex flex-col items-center my-5'>
                <Image
                    src={user?.image}
                    alt={`${user?.fullName}'s avatar`}
                    height={200}
                    width={100}
                    className='rounded-lg'
                />

                <div className=' grid grid-cols-2 gap-5 text-md w-full pt-3 '>
                    <div className=' text-end '>
                        <h3>Name : </h3>
                        <h3>Email Information : </h3>
                        <h3>Phone Number : </h3>
                        <h3>Address :</h3>
                    </div>
                    <div className=' '>
                        <h3>Abu Sani Faysal</h3>
                        <h3>tfoysalahmed@gamil.com</h3>
                        <h3>01634319696</h3>
                        <h3>Gazipur Dhaka, Kadma</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;


// Thank you nasir uddin vai.
// i was told to build up a logo and I completed it
// and we all of our team members were in metting for almost 4 hours and we discussed about


