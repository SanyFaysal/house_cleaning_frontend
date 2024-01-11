'use client'

import CommonPageTitle from "@/components/ui/CommonPageTitle";
import { authKey } from "@/constants/storageKey";
import { useDeleteServiceMutation, useGetAllServiceQuery } from "@/redux/api/serviceApi"
import { useAppSelector } from "@/redux/hook";
import { getFromLocalStorage } from "@/utils/local-storage";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Table, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdMoreTime } from "react-icons/md";


export default function AllServices() {
    const router = useRouter()
    const { user } = useAppSelector(state => state.auth);
    const token = getFromLocalStorage(authKey)
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
                {JSON.parse(location).map((place: string) => <span className="underline mr-2">{place} </span>)}</p>,
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
            render: (_: any, record: any) => <div className="flex gap-2">
                <button className=" px-2 border rounded-xl bg-slate-100 ">Ongoing</button>

            </div>

        },
        {
            title: 'Action',
            dataIndex: 'action',
            width: 150,
            render: (_: any, record: any) => <div className="flex gap-2">
                <button onClick={() => router.push(`/services/add-schedule/${record?.id}`)} className="px-2 py-1  border rounded-lg hover:bg-blue-500 hover:text-white"><MdMoreTime />
                </button>
                <button className="px-2 py-1  border rounded-lg hover:bg-blue-500 hover:text-white"><EyeOutlined /></button>
                <button onClick={() => router.push(`/services/edit-service/${record?.id}`)} className="px-2 py-1 border rounded-lg hover:bg-sky-500 hover:text-white"><EditOutlined /></button>
                <button onClick={() => handleDeleteService(record)} className="px-2 py-1 border rounded-lg hover:bg-red-500 hover:text-white"><DeleteOutlined /></button>
            </div>

        },

    ];


    const { data } = useGetAllServiceQuery(undefined);

    const [deleteService] = useDeleteServiceMutation();
    const handleDeleteService = async (data: any) => {
        try {
            console.log(data)
            if (data?.booking?.length) {
                return message.error('Already have bookings')
            }
            const res: any = await deleteService({ id: data?.id, token }).unwrap()
            if (res.status) {
                message.success(res.message)
            }

        } catch (error: any) {

            const errorMessage: any = error?.data?.message
            message.error(errorMessage)
        }
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
