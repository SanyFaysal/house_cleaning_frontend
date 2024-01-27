'use client'

import { Select, SelectProps, message } from "antd";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import BannerSearchModal from "./BannerSearchModal";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi";

export default function Banner() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [query, setQuery] = useState<Record<string, any>>({})
    const handleOpen = () => {
        if (!query?.searchTerm?.length) {
            return message.error('Please write something to filter')
        } else {
            setIsModalOpen(true)
        }
    }
    const { data } = useGetAllServiceQuery(query);




    return (
        <div className=' mx-[-48px] py-28   relative bg-cover'
            style={{ backgroundImage: `url('/images/banner.png')`, backgroundSize: '', backgroundRepeat: 'no-repeat' }}>
            <div className="flex flex-col items-start justify-center h-full pl-14 ">
                <h1 className="lg:text-4xl text-4xl text-start text-white font-bold ">Your Personal Assistant</h1>
                <p className="lg:text-xl text-xl  text-white text-start mt-4">One-stop solution for your services. Order any service, anytime.</p>
                <div className=" flex justify-start  mt-12 items-center lg:w-1/3">
                    <input onChange={(e: any) => setQuery({ searchTerm: e.target.value })} placeholder="Find your service here e.g. AC, Car, Facial …"
                        className=" bg-white px-5 py-4 w-full text-lg rounded-l-lg focus:outline-none mx-auto" />
                    <div className=" bg-white  p-2 rounded-r-lg">
                        <button onClick={handleOpen} className="text-white p-3 bg-blue-500 rounded-lg"><BiSearch className='bg-blue-500  text-xl' /></button>
                    </div>
                </div>
                <BannerSearchModal services={data?.data} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            </div>
        </div>
    )
}
