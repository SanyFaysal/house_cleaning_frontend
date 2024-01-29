"use client"

import Image from "next/image";
import login_image from '../../../public/images/login-image.png';
import { Button, Checkbox, Form, Input, message } from "antd";
import Link from "next/link";
import { authApi, useSigninMutation } from "@/redux/api/userApi";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { isLoggedIn, setToLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setUser } from "@/redux/slices/userSlice";
import { useEffect } from "react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import SuggestAdminLoginInfo from "@/components/shared/SuggestAdminLoginInfo";

type FieldType = {
    email?: string;
    password?: string;

};
export default function Signin() {
    const { user } = useAppSelector(state => state.auth)
    const router = useRouter()

    const dispatch = useAppDispatch()
    const [signin] = useSigninMutation()
    const onFinish = async (values: any) => {
        try {
            const res = await signin(values).unwrap()
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
        if (user?.id) { router.push('/') }
    }, [user, router])
    return (
        <div className="grid lg:grid-cols-2 justify-items-center content-center h-[100vh]">
            <div>
                <Link className="" href={'/'}><ArrowLeftOutlined /> Back to home</Link>
                <Image src={login_image} alt="login" width={500} height={100} />
            </div>
            <div className="h-full w-full flex flex-col justify-center items-start">
                <h1 className="text-2xl">Sign in to your Account</h1>
                <SuggestAdminLoginInfo />
                <div className="mt-5" />
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    layout="vertical"

                    autoComplete="off"
                    className="mx-4 w-3/4  "
                >
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

                    <Form.Item className="flex justify-start w-full" >
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                    <p>Already have an account ? <Link href={'/signup'}>Sign up</Link> </p>

                </Form>
            </div>


        </div>
    )
}
