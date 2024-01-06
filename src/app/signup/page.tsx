"use client"

import Image from "next/image";
import login_image from '../../../public/login-image.png';
import { Button, Checkbox, Form, Input, message } from "antd";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useSignupMutation } from "@/redux/api/userApi";
import { isLoggedIn, setToLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type FieldType = {
    fullName?: string,
    email?: string;
    password?: string;


};
export default function Signup() {

    const router = useRouter()
    const loggedIn = isLoggedIn();
    const dispatch = useAppDispatch()

    const [signup] = useSignupMutation();
    const onFinish = async (values: any) => {
        try {
            const res = await signup(values).unwrap()
            if (res?.token && res?.data) {
                setToLocalStorage(authKey, res.token)
                message.success(res.message);
                dispatch(setUser(res.data))
                router.push('/')
            }
        } catch (error: any) {
            const errorMessage: any = error?.data?.message
            message.error(errorMessage)
        }
    };

    useEffect(() => {
        if (loggedIn) { router.push('/') }
    }, [loggedIn, router])

    return (
        <div className="grid lg:grid-cols-2 justify-items-center content-center h-[100vh] ">
            <div>
                <Link className="" href={'/'}><ArrowLeftOutlined /> Back to home</Link>
                <Image src={login_image} alt="login" width={500} height={100} />
            </div>
            <div className="h-full w-full flex flex-col justify-center items-start">
                <h1 className="text-2xl mb-5">Sinup your new Account</h1>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    layout="vertical"

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
                    <p>Already have an account ? <Link href={'/signin'}>Singin</Link> </p>

                </Form>
            </div>


        </div>
    )
}
