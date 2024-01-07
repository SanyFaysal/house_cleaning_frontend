'use client'

import CommonPageTitle from "@/components/ui/CommonPageTitle";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi"
import { useAppSelector } from "@/redux/hook";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import Link from "next/link";

export default function AllCategories() {
    const { user } = useAppSelector(state => state.auth)
    const columns = [
        {
            title: 'Title',
            dataIndex: 'serviceName',

        },
        {
            title: 'Total Services',
            dataIndex: 'price',

        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',

        },

        {
            title: 'Action',
            dataIndex: 'action',
            width: 150,
            render: (_: any, record: { key: React.Key }) => <div className="flex gap-2">
                <button className="px-2 py-1 border rounded-lg hover:text-sky-500 hover:border-sky-500"><EditOutlined /></button>
                <button className="px-2 py-1 border rounded-lg hover:text-red-500 hover:border-red-500"><DeleteOutlined /></button>
            </div>

        },

    ];


    const { data } = useGetAllServiceQuery(undefined);



    return (
        <>
            <CommonPageTitle title='All Services' items={
                [
                    { title: <Link href={`/${user?.role?.toLocaleLowerCase()}`}>Home</Link> },
                    { title: <Link href={'/dashboard'}>All Categories</Link> },
                ]
            }>
                <Link href={'/services/add-service'}>  <Button>Add Service</Button></Link>
            </CommonPageTitle>
            <Table columns={columns} dataSource={data?.data} pagination={{ pageSize: 10 }} />
        </>
    )
}
