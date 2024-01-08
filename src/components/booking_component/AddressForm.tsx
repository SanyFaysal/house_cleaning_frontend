"use client"

import { useAppSelector } from "@/redux/hook";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";

export default function AddressForm({ setGoNext }: { setGoNext: any }) {
    const { user }: any = useAppSelector(state => state.auth);

    const getBookingData: any = JSON.parse(getFromLocalStorage('bookingData') as string);

    const handleAddInfo = (values: any) => {

        const bookingData = {
            ...getBookingData,
            address: values
        }
        setToLocalStorage('bookingData', JSON.stringify(bookingData));
        setGoNext(true)
        message.success('Address added')
    }

    useEffect(() => {
        if (!getBookingData?.address) {
            setGoNext(false)
        }
    }, [])
    return (
        <div className="">
            <h1 className="text-xl font-bold  text-center text-gray-800">Address</h1>
            <h3 className="text-lg font-semibold text-center">
                Expert will arrive at the address given below
            </h3>
            <div className=" flex justify-center mt-5 mx-auto">
                <Form
                    name="basic"
                    initialValues={getBookingData?.address}
                    onFinish={handleAddInfo}
                    layout="vertical"
                    autoComplete="off"
                    className="grid grid-cols-2 gap-x-4 w-2/3 mx-auto"
                >
                    <Form.Item
                        label="House No."
                        name="houseNo"
                        rules={[{ required: true, message: 'House No is required' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Road No."
                        name="roadNo"
                        rules={[{ required: true, message: 'Road No is required' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Block No."
                        name="blockNo"
                        rules={[{ required: true, message: 'Block No is required' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Sector No."
                        name="sectorNo"
                        rules={[{ required: true, message: 'Sector No is required' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Area"
                        name="area"
                        rules={[{ required: true, message: 'Area is required' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item className="flex justify-end items-end mt-3">
                        <Button type="primary" htmlType="submit">
                            Add Address
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
