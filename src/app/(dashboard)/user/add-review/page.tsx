'use client'

import AddReviewForm from "@/components/service_details_component/AddReviewForm";
import { authKey } from "@/constants/storageKey";
import { formateDateWithYear } from "@/helpers/formate_date_time";
import { useGetAvailableServiceForReviewQuery } from "@/redux/api/serviceApi"
import { IService } from "@/types/data";
import { getFromLocalStorage } from "@/utils/local-storage"
import { Button, Form, Input, Modal, Table } from "antd";

import { useState } from "react";

export default function AddReview() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [serviceId, setServiceId] = useState<any>();
    const token = getFromLocalStorage(authKey);
    const { data } = useGetAvailableServiceForReviewQuery(token);
    const services = data?.data;
    const handleAddReview = (id: string) => {
        setServiceId(id);
        setIsModalOpen(true)

    }
    const columns = [
        {
            key: 1,
            title: 'Service Name',
            dataIndex: 'service',
            render: ((service: any) => <p>{service?.serviceName}</p>)
        },
        {
            key: 2,
            title: 'Take on',
            dataIndex: 'createdAt',
            render: ((service: any) => <p>{formateDateWithYear(service?.createdAt)}</p>)
        },
        {
            key: 3,
            title: 'Status',
            dataIndex: 'status',
            render: (status: any) => <p className="text-green-500 rounded-full bg-green-100 w-fit px-2 font-medium">
                {status}
            </p>
        },
        {
            key: 3,
            title: 'Action',

            render: (service: any) => <div>
                <button onClick={() => handleAddReview(service?.serviceId)} className=" px-3 py-2  bg-orange-400 text-white  rounded">Make Review</button>
            </div>
        },

    ]




    return (
        <div>
            <h1 className="mt-5 text-xl">Available Services</h1>
            <p>Please share your experience by making a review</p>
            <div className="mt-4">
                <Table columns={columns} bordered caption dataSource={services} />
            </div>

            <AddReviewForm isModalOpen={isModalOpen} serviceId={serviceId} setIsModalOpen={setIsModalOpen} />
        </div>
    )
}
