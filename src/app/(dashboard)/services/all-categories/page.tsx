'use client'

import CommonPageTitle from "@/components/ui/CommonPageTitle";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi"
import { useAppSelector } from "@/redux/hook";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import Link from "next/link";

export default function AllCategories() {
    const { user } = useAppSelector(state => state.auth)
    const columns = [
        {
            title: 'Category Title',
            dataIndex: 'title',

        },

        {
            title: 'Total Service',
            dataIndex: 'services',
            render: (_: any, record: any) => <div className="flex gap-2">
                <p>{record?.service?.length}</p>
            </div>
        },


        {
            title: 'Action',
            dataIndex: 'action',
            width: 150,
            render: (_: any, record: any) => <div className="flex gap-2">
                <button className="px-2 py-1 border rounded-lg hover:text-white hover:bg-sky-500"><EditOutlined /></button>
                {!record?.service?.length ? <button onClick={() => console.log({ clicked: true })} className={`px-2 py-1 border rounded-lg hover:text-white hover:bg-red-500 `} ><DeleteOutlined /></button>
                    : <button className="px-2 py-1 border rounded-lg text-gray-300 cursor-not-allowed hover:border-gray-200"><DeleteOutlined /></button>}

            </div>

        },

    ];


    const { data } = useGetAllCategoriesQuery(undefined);



    return (
        <>
            <CommonPageTitle title='All Categories' items={
                [
                    { title: <Link href={`/${user?.role?.toLocaleLowerCase()}`}>Home</Link> },
                    { title: <p className='text-gray-400'>All Categories</p> },
                ]
            }>
                <Link href={'/services/add-category'}>  <Button>Add Category</Button></Link>
            </CommonPageTitle>
            <Table columns={columns} dataSource={data?.data} pagination={{ pageSize: 10 }} />
        </>
    )
}
