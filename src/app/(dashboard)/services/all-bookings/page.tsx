'use client'

import CommonPageTitle from "@/components/ui/CommonPageTitle";
import { authKey } from "@/constants/storageKey";
import { formateDate, formateDateWithYear } from "@/helpers/formate_date_time";
import { useCancelBookingMutation, useGetAllBookingQuery, useUpdateBookingStatusMutation } from "@/redux/api/booking.api"
import { useAppSelector } from "@/redux/hook";

import { IService } from "@/types/data";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Button, Table, message } from "antd";
import Link from "next/link";
import { useState } from "react";


export default function AllBookings() {
    const [query, setQuery] = useState<any>({});
    const token = getFromLocalStorage(authKey)
    const { user } = useAppSelector(state => state.auth);
    const { data }: any = useGetAllBookingQuery({ token, query });
    const [updateBooking] = useUpdateBookingStatusMutation();
    const [cancelBooking] = useCancelBookingMutation();
    const bookings = data?.data;




    const handleUpdateBooking = async (id: string, status: string) => {
        try {
            const data = { status: status };
            const res: any = await updateBooking({ id, data, token });
            if (res.status) {
                message.success('Successful')
            }
        } catch (error: any) {
            message.success(error?.data?.message)
        }

    }
    const handleCancelBooking = async (id: string) => {
        try {

            const res: any = await updateBooking({ id, token });
            if (res.status) {
                message.success('Cancelled Success')
            }
        } catch (error: any) {
            message.success(error?.data?.message)
        }

    }


    const columns = [
        {
            title: 'Service Name',
            dataIndex: 'service',
            render: (service: IService) => <div className="flex gap-2">
                <p>{service?.serviceName}</p>
            </div>

        },

        {
            title: 'Customer',

            render: (booking: any) => <div className="">
                <p>{booking?.fullName}</p>
                <p>{booking?.email}</p>
                <p>{booking?.phoneNumber}</p>
            </div>
        },
        {
            title: 'Created At',

            render: (booking: any) => <div className="">
                <p>{formateDateWithYear(booking?.createdAt)}</p>

            </div>
        },
        {
            title: 'Status',
            render: (booking: any) =>
                <p
                    className={` font-semibold
                    ${booking?.status === 'PENDING'
                            ?
                            ' text-yellow-500 font-semibold'
                            :
                            booking?.status === 'DELIVERED'
                                ?
                                'text-green-500 font-semibold' :
                                booking?.status === 'CANCELLED'
                                    ?
                                    'text-red-500 font-semibold'
                                    :
                                    'text-sky-500 font-semibold'
                        }`}
                >

                    {booking?.status}</p>

        },


        {
            title: 'Action',
            width: 150,
            render: (booking: any) => <div className="flex gap-2">
                {

                    booking?.status === 'PENDING' ?
                        <>

                            <button onClick={() => handleCancelBooking(booking.id)} className="px-2 py-1 border rounded-lg  text-red-500 border-red-200 bg-red-100 hover:bg-red-500 hover:text-white">Cancel</button>
                            <button onClick={() => handleUpdateBooking(booking.id, 'CONFIRMED')} className="px-2 py-1 border rounded-lg  text-sky-500 bg-sky-50 hover:bg-sky-500 hover:text-white border-green-200">CONFIRM</button>
                        </> :
                        booking?.status === 'CONFIRMED' ?
                            <>
                                <button onClick={() => handleUpdateBooking(booking.id, 'DELIVERED')} className="px-2 py-1  rounded-lg border border-green-300  hover:bg-green-500 hover:text-white bg-green-50 text-green-500 ">Delivered</button>

                            </> :
                            booking?.status === 'DELIVERED' ?
                                <>
                                    <button className="px-2 py-1 border rounded-lg text-gray-200 hover:border-gray-200">Delivered</button>

                                </> :
                                <>

                                </>
                }
            </div>

        },

    ];

    return (
        <>
            <CommonPageTitle title='All Bookings' items={
                [
                    { title: <Link href={`/${user?.role?.toLocaleLowerCase()}`}>Home</Link> },
                    { title: <p className=''>All Bookings</p> },
                ]
            }>
                <button onClick={() => setQuery({})} className={` p-3 py-2 mt-5 rounded  mr-3 border ${!query.status ? 'bg-black text-white' : ""} `} >All</button>

                <button onClick={() => setQuery({ status: 'PENDING' })} className={`   px-3 py-2  mt-5 rounded   ${query?.status === 'PENDING' ? 'bg-yellow-500 text-white' : 'bg-orange-100 text-orange-500'}`}>Pending</button>
                <button onClick={() => setQuery({ status: 'CONFIRMED' })} className={` px-3 py-2  mt-5 rounded  mx-3 ${query?.status === 'CONFIRMED' ? 'bg-sky-500 text-white' : "bg-sky-100 text-sky-500"}`}>Confirmed</button>
                <button onClick={() => setQuery({ status: 'DELIVERED' })} className={` px-3 py-2  mt-5 rounded  ${query?.status === 'DELIVERED' ? 'bg-green-500 text-white' : 'bg-green-100 text-green-500'}`}>Delivered</button>
            </CommonPageTitle>
            <Table columns={columns} bordered dataSource={bookings} pagination={{ pageSize: 10 }} />
        </>
    )
}
