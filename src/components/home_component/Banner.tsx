'use client'

import { Select, SelectProps, message } from "antd";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import BannerSearchModal from "./BannerSearchModal";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi";
import BannerSearchDropdown from "./BannerSearchDropdown";

export default function Banner() {
    const [dataFound, setDataFound] = useState([])
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [query, setQuery] = useState<Record<string, any>>({})
    const { data } = useGetAllServiceQuery(query);

    const handleOpen = () => {
        if (!query?.searchTerm?.length) {
            setIsModalOpen(false)
        }
        if (!query?.searchTerm?.length) {
            return message.error('Please write something to filter')
        } else {
            setIsModalOpen(true)
            setDataFound(data?.data)
        }
    }

    useEffect(() => {
        if (!query?.searchTerm) {
            setIsModalOpen(false)
        }
    }, [isModalOpen, query])
    return (
        <div className=' mx-[-48px] py-16 bg-gradient-to-b   lg:bg-gradient-to-bl from-orange-50 via-white to-blue-100 relative bg-cover'
        >
            <div className="flex lg:flex-row flex-col-reverse  justify-between items-center">
                <div className="flex flex-col items-start justify-center h-full pl-14 py-5">
                    <h1 className="lg:text-4xl text-5xl text-start  font-bold text-blue-500 ">Your Personal Assistant</h1>
                    <p className="lg:text-xl text-xl   text-start mt-4 ">One-stop solution for your services. Order any service, anytime.</p>
                    <div className=" w-2/3">
                        <div className=" flex justify-start p-[2px] rounded-full bg-blue-500 mt-12 items-center w-full">
                            <input onChange={(e: any) => setQuery({ searchTerm: e.target.value })} placeholder="Find your service here e.g. AC, Car, Facial …"
                                className="   px-5 py-3 text-blue-500 w-full text-lg rounded-l-full focus:outline-none mx-auto" />
                            <div className="   p-1 bg-blue-500 rounded-r-full">
                                <button onClick={handleOpen} className=" py-2 px-3"><BiSearch className=' text-white  text-xl ' /></button>
                            </div>
                        </div>
                        <div className="relative" >
                            {query?.searchTerm && isModalOpen && <BannerSearchDropdown services={dataFound} />}
                        </div>
                    </div>

                </div>
                <div className="lg:w-[50%] my-auto ">

                    <img src="/images/banner_vector.png" className="w-full lg:pr-10" alt="" />
                </div>
            </div>

            {/* <BannerSearchModal services={data?.data} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}

        </div>
    )
}
