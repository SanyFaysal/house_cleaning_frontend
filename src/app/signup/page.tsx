"use client"

import Image from "next/image";
import login_image from '../../../public/login-image.png';
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";

type FieldType = {
    fullName?: string,
    email?: string;
    password?: string;


};
export default function page() {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className="grid lg:grid-cols-2 justify-items-center content-center h-fit ">
            <Image src={login_image} alt="login" width={500} height={100} />
            <div className="h-full w-full flex flex-col justify-center items-start">
                <h1 className="text-2xl mb-5">Sinup your new Account</h1>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    layout="vertical"
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className="mx-4 w-3/4"
                >
                    <Form.Item<FieldType>
                        label="Full Name"
                        name="fullName"
                        rules={[{ required: true, message: 'Please input email' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input email' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item className="" >
                        <Button type="primary" htmlType="submit">
                            Sign up
                        </Button>
                    </Form.Item>
                    <p>Already have an account ? <Link href={'/login'}>Singin</Link> </p>

                </Form>
            </div>


        </div>
    )
}
