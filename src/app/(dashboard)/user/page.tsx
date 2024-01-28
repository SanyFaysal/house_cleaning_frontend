'use client'
import DashboardProfile from "@/components/profile_component/DashboardProfile";
import Profile from "@/components/profile_component/Profile";
import CommonPageTitle from "@/components/ui/CommonPageTitle";
import { authKey } from "@/constants/storageKey";
import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import { useGetAllUserQuery } from "@/redux/api/userApi";
import { useAppSelector } from "@/redux/hook";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Button, Table, message } from "antd";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";




export default function UserDashboardHome() {
    const token = getFromLocalStorage(authKey);
    const { user } = useAppSelector(state => state.auth);
    const { data }: any = useGetAllCategoriesQuery(undefined);
    const { data: allUserData } = useGetAllUserQuery(token);

    // const handleDeleteCategory = async (id: string) => {
    //     try {
    //         const res: any = await deleteCategory({ id, token }).unwrap()
    //         if (res.status) {
    //             message.success('Deleted Successfully')
    //         }
    //     } catch (error) {
    //         message.error('Something went wrong')
    //     }
    // }

    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'fullName',


        },

        {
            title: 'Email',
            dataIndex: 'email',

        },

        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            width: 150,
        },

        {
            title: 'Role',
            dataIndex: 'role',
            width: 150,


        },


    ];

    return (
        <>
            <CommonPageTitle title='All Category' items={
                [
                    { title: <Link href={`/${user?.role?.toLocaleLowerCase()}`}>Home</Link> },
                    { title: <p className=''>All Users</p> },
                ]
            }>
                <Link href={'/services/add-category'}>  <Button>Add Category</Button></Link>
            </CommonPageTitle>
            <Table columns={columns} dataSource={allUserData?.data} pagination={{ pageSize: 10 }} />
        </>
    )
}
