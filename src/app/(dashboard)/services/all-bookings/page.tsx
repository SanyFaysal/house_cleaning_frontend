'use client'

import CommonPageTitle from "@/components/ui/CommonPageTitle";
import { authKey } from "@/constants/storageKey";
import { formateDate, formateDateWithYear } from "@/helpers/formate_date_time";
import { useGetAllBookingQuery } from "@/redux/api/booking.api"
import { useAppSelector } from "@/redux/hook";

import { IService } from "@/types/data";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Button, Table } from "antd";
import Link from "next/link";


export default function AllBookings() {
    const token = getFromLocalStorage(authKey)
    const { user } = useAppSelector(state => state.auth);
    const { data } = useGetAllBookingQuery(token);
    const bookings = data?.data;

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
            render: (booking: any) => <p className={`${booking?.status === 'PENDING' ? ' text-orange-500 font-semibold' : 'bg-green-100 text-green-500'}`}>{booking?.status}</p>

        },


        {
            title: 'Action',
            dataIndex: 'action',
            width: 150,
            render: (_: any, record: any) => <div className="flex gap-2">
                <button className="px-2 py-1 border rounded-lg  hover:border-gray-200">Cancel</button>
                <button className="px-2 py-1 border rounded-lg  hover:border-gray-200">Accept</button>
            </div>

        },

    ];
    console.log({ bookings })
    return (
        <>
            <CommonPageTitle title='All Bookings' items={
                [
                    { title: <Link href={`/${user?.role?.toLocaleLowerCase()}`}>Home</Link> },
                    { title: <p className='text-gray-400'>All Bookings</p> },
                ]
            }>
                <Link href={'/services/add-category'}>  <Button>Add Category</Button></Link>
            </CommonPageTitle>
            <Table columns={columns} bordered dataSource={bookings} pagination={{ pageSize: 10 }} />
        </>
    )
}
