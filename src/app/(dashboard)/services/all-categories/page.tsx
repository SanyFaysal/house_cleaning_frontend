'use client'

import CommonPageTitle from "@/components/ui/CommonPageTitle";
import { authKey } from "@/constants/storageKey";
import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi"
import { useAppSelector } from "@/redux/hook";
import { getFromLocalStorage } from "@/utils/local-storage";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Table, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AllCategories() {
    const token = getFromLocalStorage(authKey);
    const router = useRouter()
    const { user } = useAppSelector(state => state.auth);
    const { data }: any = useGetAllCategoriesQuery(undefined);
    const [deleteCategory] = useDeleteCategoryMutation()

    const handleDeleteCategory = async (id: string) => {
        try {
            const res: any = await deleteCategory({ id, token }).unwrap()
            if (res.status) {
                message.success('Deleted Successfully')
            }
        } catch (error) {
            message.error('Something went wrong')
        }
    }

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
                <button onClick={() => router.push(`/services/edit-category/${record?.id}`)} className="px-2 py-1 border rounded-lg hover:text-white hover:bg-sky-500"><EditOutlined /></button>
                {!record?.service?.length ?
                    <button onClick={() => handleDeleteCategory(record?.id)} className={`px-2 py-1 border rounded-lg hover:text-white hover:bg-red-500 `} ><DeleteOutlined /></button>
                    : <button className="px-2 py-1 border rounded-lg text-gray-300 cursor-not-allowed hover:border-gray-200"><DeleteOutlined /></button>}

            </div>

        },

    ];

    return (
        <>
            <CommonPageTitle title='All Category' items={
                [
                    { title: <Link href={`/${user?.role?.toLocaleLowerCase()}`}>Home</Link> },
                    { title: <p className=''>Edit Category</p> },
                ]
            }>
                <Link href={'/services/add-category'}>  <Button>Add Category</Button></Link>
            </CommonPageTitle>
            <Table columns={columns} dataSource={data?.data} pagination={{ pageSize: 10 }} />
        </>
    )
}
