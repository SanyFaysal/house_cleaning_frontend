'use client'

import CommonPageTitle from "@/components/ui/CommonPageTitle";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi"
import { useAppSelector } from "@/redux/hook";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import Link from "next/link";

export default function AllServices() {
    const { user } = useAppSelector(state => state.auth)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'serviceName',
            width: 150,
        },
        {
            title: 'Price (TK)',
            dataIndex: 'price',
            width: 150,
        },
        {
            title: 'location',
            dataIndex: 'location',
            render: (location: any) => <p>
                {location}</p>,
            width: 150,
        },
        {
            title: 'Booking',
            dataIndex: 'booking',
            render: (booking: any) => <p> {booking?.length}</p>,
            width: 150,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: 150,
            render: (_: any, record: { key: React.Key }) => <div className="flex gap-2">
                <button className=" px-2 border rounded-xl bg-slate-100 ">Ongoing</button>

            </div>

        },
        {
            title: 'Action',
            dataIndex: 'action',
            width: 150,
            render: (_: any, record: { key: React.Key }) => <div className="flex gap-2">
                <button className="px-2 py-1 border rounded-lg hover:bg-blue-500 hover:text-white"><EyeOutlined /></button>
                <button className="px-2 py-1 border rounded-lg hover:bg-sky-500 hover:text-white"><EditOutlined /></button>
                <button onClick={() => handleDeleteService(record)} className="px-2 py-1 border rounded-lg hover:bg-red-500 hover:text-white"><DeleteOutlined /></button>
            </div>

        },

    ];


    const { data } = useGetAllServiceQuery(undefined);

    const handleDeleteService = (data: any) => {
        console.log({ data })
    }

    return (
        <>
            <CommonPageTitle title='All Services' items={
                [
                    { title: <Link href={`/${user?.role?.toLocaleLowerCase()}`}>Home</Link> },
                    {
                        title: <p className='text-gray-400'>All new Services</p>
                    },
                ]
            }>
                <Link href={'/services/ add - service'}>  <Button>Add Service</Button></Link>
            </CommonPageTitle >
            <Table columns={columns} bordered dataSource={data?.data} pagination={{ pageSize: 10 }} />
        </>
    )
}
