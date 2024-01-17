'use client'

import { useGetAllBookingsIdQuery } from "@/redux/api/booking.api"
import { useGetAllReviewIdsQuery } from "@/redux/api/reveiw.api";
import { useGetAllServiceIdsQuery } from "@/redux/api/serviceApi";


import CountUp from 'react-countup';

export default function TotalCalculation() {
    const { data: bookingData }: any = useGetAllBookingsIdQuery(undefined);
    const bookings = bookingData?.data;
    const { data: serviceData }: any = useGetAllServiceIdsQuery(undefined);
    const services = serviceData?.data;
    const { data: reviewData }: any = useGetAllReviewIdsQuery(undefined);
    const reviews = reviewData?.data;

    return (


        <div className="grid grid-cols-3 text-center my-12 p-5 bg-gray-50">
            <div>
                <p className="text-5xl">   <CountUp end={services?.length} duration={3} separator="," /> +</p>
                <h1>Service Providers</h1>
            </div>
            <div className="border-x-4 border-gray-200">
                <p className="text-5xl">   <CountUp end={bookings?.length} duration={3} separator="," /> +</p>
                <h1>Order Served</h1>
            </div>
            <div>
                <p className="text-5xl">   <CountUp end={reviews?.length} duration={3} separator="," /> +</p>
                <h1>Total Reviews</h1>
            </div>

        </div>

    )
}
