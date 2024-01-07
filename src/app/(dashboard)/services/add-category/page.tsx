'use client'

import React from 'react';
import {
    Button,
    Form,
    Input,
    message,
} from 'antd';
import CommonPageTitle from '@/components/ui/CommonPageTitle';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hook';
import { useCreateCategoryMutation } from '@/redux/api/categoryApi';
import { getFromLocalStorage } from '@/utils/local-storage';
import { authKey } from '@/constants/storageKey';


const AddService = () => {
    const { user } = useAppSelector(state => state.auth)
    const token = getFromLocalStorage(authKey)

    const [addCategory] = useCreateCategoryMutation()


    const handleAddCategory = async (data: any) => {
        try {

            const res: any = await addCategory({ token, data }).unwrap()

            if (res?.status) {
                message.success('Added Successful');
            }
        } catch (error: any) {
            const errorMessage: any = error?.data?.message
            message.error(errorMessage)
        }
    }
    return (
        <>
            <CommonPageTitle title='Add Category' items={
                [
                    { title: <Link href={`/${user?.role?.toLocaleLowerCase()}`}>Home</Link> },
                    { title: <p className='text-gray-400'>Add Category</p> },
                ]
            } />

            <Form
                layout="vertical"
                className='grid lg:grid-cols-2 w-full gap-x-5'
                onFinish={handleAddCategory}
            >

                <Form.Item rules={[{ required: true, message: 'Category title is required' }]} label="Category Title" name='title'>
                    <Input />
                </Form.Item>

                <div className='w-full flex justify-start items-center mt-2'>
                    <Button type="primary" htmlType="submit">
                        Add Category
                    </Button>
                </div>

            </Form >
        </>
    );
};

export default AddService