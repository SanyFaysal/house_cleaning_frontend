
'use client'

import PageLayout from "@/components/layout/PageLayout"
import { useGetServiceByIdQuery } from "@/redux/api/serviceApi"

import { Breadcrumb, Button } from "antd"
import Link from "next/link"
import { useParams } from "next/navigation"
import { BiArrowFromRight, BiBarChartAlt2 } from "react-icons/bi"
import { GoDot, GoDotFill, GoLocation } from 'react-icons/go'
import { MdOutlineStarRate } from "react-icons/md"

export default function ServiceDetails() {
    const params = useParams()
    const { data } = useGetServiceByIdQuery(params?.serviceId)
    const service = data?.data;
    return (
        <PageLayout>
            <div className="text-lg">
                <div className=" flex justify-between items-center bg-gradient-to-r from-white via-gray-100 to-sky-200 pt-10 pb-12 px-12 mx-[-48px] ">
                    <div>
                        <Breadcrumb items={[{ title: <Link href={'/'}>Home</Link> }, { title: <Link href={`/service/category/${service?.category?.title}`}>{service?.category?.title}</Link> }, { title: service?.serviceName }]} />
                        <h1 className="text-5xl font-bold  text-sky-500 mt-5 mb-3">{service?.serviceName}</h1>
                        <h1 className="text-4xl font-bold text-gray-800  mt-5 mb-3">{service?.price} Taka</h1>
                        <div className="  w-fit  py-1 rounded flex gap-4">
                            <h3 className="text-xl flex items-center gap-2 "><BiBarChartAlt2
                                className="text-orange-400 text-3xl " /> {service?.booking?.length} Total Bookings</h3>
                            <h3 className="text-xl flex items-center gap-2 "><MdOutlineStarRate className="text-orange-400 text-3xl " /> {service?.review?.length} Total Reviews</h3>
                        </div>
                    </div>

                    {/* <div className="  w-fit  py-1 rounded"> */}
                    <button className="px-5 py-2 text-sky-500 bg-white rounded">Add Booking </button>
                    {/* </div> */}
                </div>

                <div>
                    <h2 className="text-3xl font-bold my-5 ">Available Locations</h2>
                    <div className="flex items-center gap-5">
                        {JSON.parse(service?.location ?? "[]")?.map((location: string) =>
                            <div
                                className="bg-gray-100   px-3 py-2 rounded   flex flex-col items-center justify-center">
                                {location}
                            </div>)}</div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold my-5">Details</h2>
                    <p className="">{service?.serviceDetails}</p>
                    <h2 className="text-3xl font-bold my-5">Service Features</h2>
                    <p className="ml-4 ">{JSON.parse(service?.serviceFeatures ?? "[]")?.map((feature: string) => <p className="mb-2"><GoDot className='inline mr-2' />
                        {feature}</p>)}</p>
                </div>


                {service?.pricingTerms?.length > 2 && <div className="mb-4">
                    <h2 className="text-3xl font-bold my-5">Pricing Terms</h2>
                    <p className="ml-4 ">{JSON.parse(service?.pricingTerms ?? "[]")?.map((terms: string) => <p className="mb-2"><GoDot className='inline mr-2' />
                        {terms}</p>)}</p>
                </div>
                }
            </div>
        </PageLayout>
    )
}
