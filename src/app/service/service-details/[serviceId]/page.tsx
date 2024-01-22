
'use client'

import PageLayout from "@/components/layout/PageLayout"
import ReviewsAndComments from "@/components/service_details_component/ReviewsAndComments"

import ServiceDetailsBanner from "@/components/service_details_component/ServiceDetailsBanner"
import FaqSection from "@/components/shared/FaqSection"
import { useGetServiceByIdQuery } from "@/redux/api/serviceApi"

import { Breadcrumb, Button } from "antd"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { BiArrowFromRight, BiBarChartAlt2 } from "react-icons/bi"
import { GoDot, GoDotFill, GoLocation } from 'react-icons/go'
import { MdOutlineStarRate } from "react-icons/md"

export default function ServiceDetails() {
    const router = useRouter()
    const params = useParams()
    const { data } = useGetServiceByIdQuery(params?.serviceId)
    const service = data?.data;
    return (
        <PageLayout>
            <div className="text-lg">
                <ServiceDetailsBanner service={service} />

                <div>
                    <h2 className="text-2xl font-bold my-5 ">Available Locations</h2>
                    <div className="flex items-center gap-5">
                        {JSON.parse(service?.location ?? "[]")?.map((location: string) =>
                            <div
                                className="bg-gray-100   px-3 py-2 rounded   flex flex-col items-center justify-center">
                                {location}
                            </div>)}</div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold my-5">Details</h2>
                    <p className="">{service?.serviceDetails}</p>
                    <h2 className="text-2xl font-bold my-5">Service Features</h2>
                    <p className="ml-4 ">{JSON.parse(service?.serviceFeatures ?? "[]")?.map((feature: string) => <p className="mb-2"><GoDot className='inline mr-2' />
                        {feature}</p>)}</p>
                </div>


                {service?.pricingTerms?.length > 2 && <div className="mb-4">
                    <h2 className="text-2xl font-bold my-5">Pricing Terms</h2>
                    <p className="ml-4 ">{JSON.parse(service?.pricingTerms ?? "[]")?.map((terms: string) => <p className="mb-2"><GoDot className='inline mr-2' />
                        {terms}</p>)}</p>
                </div>
                }
                <FaqSection />
                <div>
                    <ReviewsAndComments service={service} />
                </div>
            </div>
        </PageLayout>
    )
}
