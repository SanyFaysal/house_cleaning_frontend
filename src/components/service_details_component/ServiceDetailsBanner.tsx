'use client'

import { IService } from "@/types/data"
import { Breadcrumb } from "antd"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BiBarChartAlt2 } from "react-icons/bi"
import { MdOutlineStarRate } from "react-icons/md"
import './serviceBanner.css';
export default function ServiceDetailsBanner({ service }: { service: IService }) {
    const router = useRouter();
    return (
        // <div className="grid grid-cols-2  justify-between items-center bg-gradient-to-r from-white via-gray-100 to-sky-200  pl-12 mx-[-48px] ">
        //     <div className="pt-10 pb-12">
        //         <Breadcrumb items={[{ title: <Link href={'/'}>Home</Link> }, { title: <Link href={`/service/category/${service?.category?.title}`}>{service?.category?.title}</Link> }, { title: service?.serviceName }]} />
        //         <h1 className="text-5xl font-bold  text-sky-500 mt-5 mb-3">{service?.serviceName}</h1>
        //         <h1 className="text-4xl font-bold text-gray-800  mt-5 mb-3">{service?.price} Taka</h1>
        //         <div className="  w-fit  py-1 rounded flex gap-4">
        //             <h3 className="text-xl flex items-center gap-2 "><BiBarChartAlt2
        //                 className="text-orange-400 text-3xl " /> {service?.booking?.length} Total Bookings</h3>
        //             <h3 className="text-xl flex items-center gap-2 "><MdOutlineStarRate className="text-orange-400 text-3xl " /> {service?.review?.length} Total Reviews</h3>
        //         </div>
        //         <button onClick={() => router.push(`/booking/${service?.id}`)} className="px-5 py-2 text-orange-500 mt-5 bg-black  rounded">Add Booking </button>
        //     </div>

        //     <div className=" h-[57vh] w-full rounded">
        //         <img className="h-full w-full" src={service?.image} />
        //     </div>
        // </div>


        <div
            style={{
                width: '100%',
                position: 'relative',
            }}
            className="mx-[-48px] "
        >
            <img
                src={service?.image}
                alt="Service Image"
                style={{
                    width: '900px',
                    height: '350px',
                    position: 'relative',
                    left: "40%"

                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, white 40%, rgba(255, 255, 255, 0) 100%)',
                }}
            >

                <div className="lg:pl-12 py-10">
                    <Breadcrumb items={[{ title: <Link href={'/'}>Home</Link> }, { title: <Link href={`/service/category/${service?.category?.title}`}>{service?.category?.title}</Link> }, { title: service?.serviceName }]} />
                    <h1 className="text-5xl font-bold  text-sky-500 mt-5 mb-3">{service?.serviceName}</h1>
                    <h1 className="text-4xl font-bold text-gray-800  mt-5 mb-3">{service?.price} Taka</h1>
                    <div className="  w-fit  py-1 rounded flex gap-4">
                        <h3 className="text-xl flex items-center gap-2 "><BiBarChartAlt2 />{service?.booking?.length} Total Bookings</h3>
                        <h3 className="text-xl flex items-center gap-2 "><MdOutlineStarRate className="text-orange-400 text-3xl " /> {service?.review?.length} Total Reviews</h3>
                    </div>
                    <button onClick={() => router.push(`/booking/${service?.id}`)} className="px-5 py-2 text-sky-500 mt-5 font-semibold bg-sky-100  rounded">Add Booking </button>
                </div>
            </div>
        </div>

    )
}
