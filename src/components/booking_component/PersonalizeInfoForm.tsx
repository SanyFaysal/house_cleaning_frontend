"use client"

import { useAppSelector } from "@/redux/hook";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";

export default function PersonalizeInfoForm({ setGoNext }: { setGoNext: any }) {
    const { user }: any = useAppSelector(state => state.auth);

    const getBookingData: any = getFromLocalStorage('bookingData')?.length ? JSON.parse(getFromLocalStorage('bookingData') as string) : {};

    const handleAddInfo = (values: any) => {

        const bookingData = {
            ...getBookingData,
            user: values
        }
        setToLocalStorage('bookingData', JSON.stringify(bookingData));
        setGoNext(true)
        message.success('Address added')
    }

    useEffect(() => {
        if (!getBookingData?.user) {
            setGoNext(false)
        }
    }, [])
    return (
        <div className="">
            <h1 className="text-xl font-bold  text-center text-gray-800">Contact Person</h1>
            <h3 className="text-lg font-semibold text-center">
                Whose this service ordered for?
            </h3>
            <div className=" flex justify-center mt-5 mx-auto">
                <Form
                    name="basic"
                    initialValues={getBookingData?.user ? getBookingData?.user : user}
                    onFinish={handleAddInfo}
                    layout="vertical"
                    autoComplete="off"
                    className="grid grid-cols-2 gap-x-4 w-2/3 mx-auto"
                >
                    <Form.Item
                        label="Full Name "
                        name="fullName"
                        rules={[{ required: true, message: 'Please input your full name' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email "
                        name="email"
                        rules={[{ required: true, message: 'Please provide your email' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[{ required: true, message: 'Contact Number is required' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Additional Notes (Optional) "
                        name="additionalNotes"

                    >
                        <TextArea rows={1} />
                    </Form.Item>
                    <div></div>
                    <Form.Item className="flex justify-end">
                        <Button type="primary" htmlType="submit">
                            Add Info
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
