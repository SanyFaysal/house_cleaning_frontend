'use client'

import CommonPageTitle from "@/components/ui/CommonPageTitle";
import { authKey } from "@/constants/storageKey";
import { useAddScheduleMutation, useGetServiceByIdQuery } from "@/redux/api/serviceApi";
import { useAppSelector } from "@/redux/hook";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Button, DatePicker, Form, TimePicker, message } from "antd";
import { Dayjs } from "dayjs";
import Link from "next/link";
import { useParams } from "next/navigation"
import { useState } from "react";

export default function page() {
    const token = getFromLocalStorage(authKey)
    const [startTime, setStartTime] = useState<string>();
    const [endTime, setEndTime] = useState<string>();
    const { user } = useAppSelector(state => state.auth);
    const params = useParams();
    const serviceId = params?.serviceId;
    const { data: response } = useGetServiceByIdQuery(serviceId)
    const serviceData = response?.data;

    const handleStartTime = (time: any, timeString: string) => {
        setStartTime(timeString)
    }
    const handleEndTime = (time: any, timeString: string) => {
        setEndTime(timeString)
    }

    const [addSchedule] = useAddScheduleMutation();
    const handleAddSchedule = async (values: any) => {
        try {
            const data = {
                ...values,
                startTime,
                endTime,
                serviceId
            }
            const res: any = await addSchedule({ data, token }).unwrap();
            if (res.status) {
                message.success("Successfully added")
            }
        } catch (error) {
            message.error('Something went wrong')
        }

    };
    return (<div>
        <CommonPageTitle title='Add Schedule ' items={
            [
                { title: <Link href={`/${user?.role?.toLocaleLowerCase()}`}>Home</Link> },
                {
                    title: <p className='text-gray-400'>All new Services</p>
                },
            ]
        } />
        <div className="bg-white p-4 rounded-lg">
            <h3 className="mb-4 text-xl">{serviceData?.serviceName}</h3>

            <Form layout="vertical" onFinish={handleAddSchedule} className="grid grid-cols-3 gap-4">

                <Form.Item label='Select Schedule Date' name={'date'} rules={[{ required: true, message: 'Please a date' }]}>
                    <DatePicker className="w-full" />
                </Form.Item>


                <Form.Item label='Start Time' name={'startTime'} rules={[{ required: true, message: 'Please Choose a time' }]}>
                    <TimePicker className="w-full" onChange={handleStartTime} />
                </Form.Item>
                <Form.Item label='End Time' name={'endTime'} rules={[{ required: true, message: 'Please Choose a time' }]}>
                    <TimePicker className="w-full" onChange={handleEndTime} />
                </Form.Item>
                <Form.Item className="col-span-3 ml-auto flex justify-end">
                    <Button type="primary" htmlType="submit">Add Schedule</Button>
                </Form.Item>
            </Form>

        </div>
    </div>
    )
}
